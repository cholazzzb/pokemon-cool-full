import Image from 'next/image';
import { FunctionComponent, useState } from 'react';

import { PokeballAnimation } from '@/presentational/components/Animation';
import { mainTheme } from '@/presentational/theme';
import { getAsset } from '@/utils/asset';
import CatchingAlert from './CatchingAlert';
import FailedAlert from './FailedAlert';
import SuccessAlert from './SuccessAlert';

type CatchStatus = 'SUCCESS' | 'FAILED' | 'CATCHING' | null;

type CatchPokemonProps = {
  id: number;
  iconColor: string;
  pokemonName: string;
};

const CatchPokemon: FunctionComponent<CatchPokemonProps> = (props) => {
  const { id, iconColor, pokemonName } = props;
  const [catchStatus, setCatchStatus] = useState<null | CatchStatus>(null);

  const catchPokemon = () => {
    setCatchStatus('CATCHING');
  };

  const renderAlert = (status: CatchStatus) => {
    switch (status) {
      case 'SUCCESS':
        return (
          <SuccessAlert
            id={id}
            pokemonName={pokemonName}
            color={iconColor}
            onClose={() => setCatchStatus(null)}
          />
        );

      case 'FAILED':
        return (
          <FailedAlert iconColor={iconColor} catchPokemon={catchPokemon} />
        );

      case 'CATCHING':
        return (
          <CatchingAlert
            onSuccess={() => setCatchStatus('SUCCESS')}
            onError={() => setCatchStatus('FAILED')}
          />
        );

      default:
        return <div>Error</div>;
    }
  };

  const CatchIcon = mainTheme.styled('span', {
    width: '70px',
    height: '70px',
    borderRadius: '35px',
    backgroundColor: iconColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });

  return (
    <FloatingButton>
      <CatchIcon onClick={catchPokemon}>
        <PokeballAnimation>
          <Image
            alt="pokeball"
            src={getAsset('icons/pokeballSelected')}
            width={30}
            height={30}
          />
        </PokeballAnimation>
        Catch
      </CatchIcon>
      {catchStatus && renderAlert(catchStatus)}
    </FloatingButton>
  );
};

export default CatchPokemon;

const FloatingButton = mainTheme.styled('div', {
  position: 'absolute',
  right: '20px',
  top: '120px',
  width: '70px',
  height: '70px',
  borderRadius: '35px',
  display: 'flex',
  justifyContent: 'cente',
  alignItems: 'center',
});
