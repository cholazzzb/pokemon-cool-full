import { defineSlotRecipe } from '@pandacss/dev';

import { createPokemonTypeBgColor } from '@/shared-ui/config/color';
import { PokemonType } from '@/logic/pokemon/entity';
import { SystemStyleObject } from '@/shared-ui/panda-css/types';

const bg09 = createPokemonTypeBgColor(0.9);
const bg08 = createPokemonTypeBgColor(0.8);

export const teamBuildingPokemonCardRecipe = defineSlotRecipe({
  className: 'team-building-pokemon-card-recipe',
  description: 'Horizontal Pokemon Card for team building page',
  slots: ['card', 'imgBG', 'text'],
  base: {
    card: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      paddingInline: '3x',
      paddingBlock: '3x',
      marginInline: '8x',
      marginBlock: '4x',
      borderRadius: '16px',
      width: '250px',
      height: '160px',
      backgroundColor: 'white',
    },
    imgBG: {
      display: 'flex',
      justifyContent: 'center',
      width: 'full',
      height: '100px',
      borderRadius: '50%',
      marginBlockEnd: '5x',
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
