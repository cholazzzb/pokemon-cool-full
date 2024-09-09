import { mainTheme } from '../panda-config/theme';

const Animation = mainTheme.keyframes({
  '20%': {
    transform: 'translate3d(0,0,0) rotate(30deg)',
  },
  '40%': {
    transform: 'translate3d(0,-20px,0) rotate(-30deg)',
  },
  '43%': {
    transform: 'translate3d(0,-20px,0) rotate(-30deg)',
  },
  '53%': {
    transform: 'translate3d(0,0,0) rotate(30deg)',
  },
  '70%': {
    transform: 'translate3d(0,-5px,0)',
  },
  '80%': {
    transform: 'translate3d(0,0,0) rotate(30deg)',
  },
  '90%': {
    transform: 'translate3d(0,-4px,0)',
  },
});

export const PokeballAnimation = mainTheme.styled('span', {
  animation: `${Animation} 1s ease infinite`,
});
