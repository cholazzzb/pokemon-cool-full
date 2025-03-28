import { defineKeyframes } from '@pandacss/dev';

export const pandaKeyframes = defineKeyframes({
  rainbowBorder: {
    '0%': { borderColor: 'red' },
    '20%': { borderColor: 'orange' },
    '40%': { borderColor: 'yellow' },
    '60%': { borderColor: 'green' },
    '80%': { borderColor: 'blue' },
    '100%': { borderColor: 'indigo' },
  },

  pulse: {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 1,
    },
  },
});
