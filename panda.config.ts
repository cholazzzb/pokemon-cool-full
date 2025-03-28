import { defineConfig } from '@pandacss/dev';

import { globalCss } from '@/shared-ui/config/global-css';
import { mainTheme } from '@/shared-ui/config/theme';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,.ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  theme: mainTheme,
  globalCss,
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'src/shared-ui/panda-css',
});
