import { mainTheme } from '../theme';

export const BaseInput = mainTheme.styled('input', {
  display: 'flex',
  margin: '10px',
  paddingInline: '10px',
  height: '40px',
  width: '100%',
  backgroundColor: 'gray',
  color: 'white',
  borderRadius: '10px',
  border: '1px',
  borderColor: '$primary100',
});
