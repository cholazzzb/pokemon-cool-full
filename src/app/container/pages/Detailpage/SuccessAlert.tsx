/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { addPokemon } from '@/domains/ownedPokemon/ownedPokemonUtil';
import Alert from 'src/presentational/components/Alert';

const FormStyle = css`
  display: flex;
  flex-direction: column;
`;

const InputStyle = css`
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0px;
`;

interface ISuccessAlertProps {
  id: number;
  pokemonName: string;
  color: string;
  setCatchStatus: Dispatch<SetStateAction<null | string>>;
}

const SuccessAlert: FC<ISuccessAlertProps> = (props) => {
  useEffect(() => {
    const audio = new Audio('/pokemonCaughtSound.mp3');
    audio.play();
  }, []);

  const { id, pokemonName, color, setCatchStatus } = props;

  const onClose = () => {
    setCatchStatus(null);
  };

  const [name, setName] = useState<string>('');
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [_, setWarningMessage] = useState('');

  const [onSaving, setOnSaving] = useState<boolean>(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setOnSaving(true);
  };

  const { ownedPokemons, setOwnedPokemons } = useOwnedPokemonStore();

  const submitForm = () => {
    const { error, result } = addPokemon(ownedPokemons, id, pokemonName, name);
    if (error) {
      setWarningMessage(error);
    } else {
      setOwnedPokemons(result);
    }
    onClose();
  };

  useEffect(() => {
    if (onSaving) {
      submitForm();
    }
  }, [onSaving]);

  const ButtonStyle = css`
    background-color: ${color};
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px;
  `;

  return (
    <Alert headText="SUCCESS">
      <div css={FormStyle}>
        Gotcha! Pokemon catched!!!
        <label>Give your pokemon name!</label>
        <input
          css={InputStyle}
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Insert Pokemon Name"
        />
        <button css={ButtonStyle} onClick={handleSubmit}>
          OK
        </button>
      </div>
    </Alert>
  );
};

export default SuccessAlert;
