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
import { getAsset } from '@/utils/asset';
import { styled } from '../panda-css/jsx';

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

  const { ownedPokemons, setOwnedPokemons } = useOwnedPokemonStore();

  const { id, pokemonName, color } = props;

  const [name, setName] = useState<string>('');
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [_, setWarningMessage] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { error, result } = addPokemon(ownedPokemons, id, pokemonName, name);
    if (error) {
      setWarningMessage(error);
    } else {
      setOwnedPokemons(result);
    }
    props.onClose();
  };

  const Button = styled('button', {
    base: {
      borderRadius: '10px',
      padding: '10px',
      margin: '10px 0px',
    },
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
        <Button style={{ backgroundColor: color }} onClick={handleSubmit}>
          OK
        </Button>
      </YStack>
    </Alert>
  );
};

export default SuccessAlert;

const Input = styled('input', {
  base: {
    borderRadius: '10px',
    border: 'solid 1px',
    padding: '10px',
    margin: '10px 0px',
  },
});
