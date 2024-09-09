import Image from 'next/image';
import { FunctionComponent, useEffect } from 'react';

import Alert from '@/presentational/components/Alert';
import { PokeballAnimation } from '@/presentational/components/Animation';
import { getAsset } from '@/utils/asset';
import { styled } from '../panda-css/jsx';

type CatchintAlertProps = {
  onSuccess: () => void;
  onError: () => void;
};

const CatchingAlert: FunctionComponent<CatchintAlertProps> = (props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const successRate = Math.random();
      successRate > 0.5 ? props.onSuccess() : props.onError();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Alert headText="Catching">
      <CatchIcon>
        <PokeballAnimation>
          <Image
            alt="pokeball"
            src={getAsset('icons/pokeballSelected')}
            width={30}
            height={30}
          />
        </PokeballAnimation>
      </CatchIcon>
    </Alert>
  );
};

export default CatchingAlert;

const CatchIcon = styled('span', {
  base: {
    width: '70px',
    height: '70px',
    borderRadius: '9999px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
