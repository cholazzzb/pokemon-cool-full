import {
  ChangeEvent,
  FunctionComponent,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { addPokemon } from '@/domains/ownedPokemon/ownedPokemonUtil';
import Alert from '@/presentational/components/Alert';
import { YStack } from '@/presentational/components/Layout';
import { mainTheme } from '@/presentational/theme';
import { getAsset } from '@/utils/asset';

type SuccessAlertProps = {
  id: number;
  pokemonName: string;
  color: string;
  onClose: () => void;
};

const SuccessAlert: FunctionComponent<SuccessAlertProps> = (props) => {
  useEffect(() => {
    const audio = new Audio(getAsset('audios/pokemonCaughtSound'));
    audio.play();
  }, []);

  const { id, pokemonName, color } = props;

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
    props.onClose();
  };

  useEffect(() => {
    if (onSaving) {
      submitForm();
    }
  }, [onSaving]);

  const Button = mainTheme.styled('button', {
    backgroundColor: color,
    borderRadius: '10px',
    padding: '10px',
    margin: '10px 0px',
  });

  return (
    <Alert headText="SUCCESS">
      <YStack>
        Gotcha! Pokemon catched!!!
        <label>Give your pokemon name!</label>
        <Input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Insert Pokemon Name"
        />
        <Button onClick={handleSubmit}>OK</Button>
      </YStack>
    </Alert>
  );
};

export default SuccessAlert;

const Input = mainTheme.styled('input', {
  borderRadius: '10px',
  padding: '10px',
  margin: '10px 0px',
});
