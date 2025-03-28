import { defineSlotRecipe } from '@pandacss/dev';

import { PokemonType } from '@/logic/pokemon/entity';
import { createPokemonTypeBgColor } from '@/shared-ui/config/color';
import { SystemStyleObject } from '@/shared-ui/panda-css/types';

const bg09 = createPokemonTypeBgColor(0.9);
const bg08 = createPokemonTypeBgColor(0.8);

export const homePokemonCardRecipe = defineSlotRecipe({
  className: 'home-pokemon-card',
  description: 'Vertical Pokemon Card for home page',
  slots: ['card', 'imgBG', 'text'],
  base: {
    card: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '16px',
      backgroundColor: 'white',
      width: '120px',
      height: '200px',
      paddingInline: '3x',
      paddingBlock: '3x',
      marginInline: '6x',
      marginBlock: '4x',

      md: {
        width: '160px',
        height: '260px',
        marginInline: '8x',
      },
    },
    imgBG: {
      display: 'flex',
      justifyContent: 'center',
      width: 'full',
      height: '115px',
      borderRadius: '50%',
      marginBlockEnd: '2x',
      md: {
        marginBlockEnd: '5x',
      },
    },
    text: {
      textTransform: 'capitalize',
      marginBlockEnd: '2x',
    },
  },
  variants: {
    pokemonType: Object.keys(bg09).reduce(
      (acc, key) => {
        acc[key as PokemonType] = {
          card: bg08[key as PokemonType],
          imgBG: bg09[key as PokemonType],
          text: {},
        };
        return acc;
      },
      {} as Record<
        PokemonType,
        {
          card: (typeof bg09)[PokemonType];
          imgBG: SystemStyleObject;
          text: SystemStyleObject;
        }
      >,
    ),
  },
});
