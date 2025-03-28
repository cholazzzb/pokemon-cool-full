import { defineRecipe } from '@pandacss/dev';

import { pokemonTypes } from '@/logic/pokemon/entity';
import { createPokemonTypeBgColor } from '@/shared-ui/config/color';

const pokemonTypeBaseColor08 = createPokemonTypeBgColor(0.8);
const pokemonTypeBaseColor09 = createPokemonTypeBgColor(0.9);
const pokemonTypeBaseColor10 = createPokemonTypeBgColor(1);

export const homePokemonTypeTagRecipe = defineRecipe({
  className: 'home-pokemon-type-tag',
  description: 'Pokemon Type Tag for home page',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    marginInlineEnd: '1x',
    paddingInline: '2x',
    height: '24px',
    md: {
      paddingInline: '3x',
      height: '32px',
    },
  },
  variants: {
    focused: {
      true: {
        border: '4px solid',
        borderColor: '$neutral100',
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
    },
    withClose: {
      true: {
        justifyContent: 'space-between',
      },
    },
    pokemonType: pokemonTypeBaseColor09,
  },

  compoundVariants: pokemonTypes.map((pokemonType) => ({
    pokemonType,
    focused: true,
    css: {
      backgroundColor: pokemonTypeBaseColor08[pokemonType],
      border: '4px solid',
      borderColor: pokemonTypeBaseColor10[pokemonType],
    },
  })),
});
