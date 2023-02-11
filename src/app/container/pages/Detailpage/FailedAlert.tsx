import { FunctionComponent } from 'react';

import Alert from '@/presentational/components/Alert';
import { mainTheme } from '@/presentational/theme';

const AlertContainer = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
});

interface IFailedAlertProps {
  iconColor: string;
  catchPokemon: () => void;
}

const FailedAlert: FunctionComponent<IFailedAlertProps> = (props) => {
  const { iconColor, catchPokemon } = props;
  const Text = mainTheme.styled('div', {
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    padding: '10px',
    borderRadius: '20px',
    marginTop: '70px',
    backgroundColor: iconColor,
  });

  return (
    <Alert headText="FAILED">
      <AlertContainer>
        Pokemon not catched
        <Text onClick={catchPokemon}>Try Again</Text>
      </AlertContainer>
    </Alert>
  );
};

export default FailedAlert;
