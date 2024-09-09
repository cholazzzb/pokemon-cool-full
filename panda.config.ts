import { defineConfig } from '@pandacss/dev';

import { pandaMainTheme } from '@/presentational/panda-config/theme';
import { pandaUtilities } from '@/presentational/panda-config/utilities';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: pandaMainTheme,
  },
  utilities: {
    extend: pandaUtilities,
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'src/presentational/panda-css',
});
