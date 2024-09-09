import { Config } from '@pandacss/dev';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeBgColor } from '../colorTheme';

export const pandaUtilities: NonNullable<Config['utilities']>['extend'] = {
  pokeType100: {
    values: {},
    transform(value: PokemonType) {
      console.log({ value });
      return createPokemonTypeBgColor()[value];
    },
  },
};

function rgba2hex(orig: string) {
  const rgb = orig
    .replace(/\s/g, '')
    .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);

  const alpha = (() => {
    const raw = ((rgb && rgb[4]) || '').trim();
    if (raw !== '') {
      return Number(raw);
    } else {
      return 1;
    }
  })();

  const hex = (() => {
    if (!rgb) return orig;
    const [rr, gg, bb] = rgb.map((el) => Number(el));
    return (
      (rr | (1 << 8)).toString(16).slice(1) +
      (gg | (1 << 8)).toString(16).slice(1) +
      (bb | (1 << 8)).toString(16).slice(1)
    );
  })();

  // multiply before convert to HEX
  const alphaStr = ((alpha * 255) | (1 << 8)).toString(16).slice(1);

  return hex + alphaStr;
}
