import { Config } from '@pandacss/dev';

import { homePokemonCardRecipe } from '@/ui/home/recipes/home-pokemon-card.recipe';
import { homePokemonTypeTagRecipe } from '@/ui/home/recipes/home-pokemon-type-tag.recipe';
import { teamBuildingPokemonCardRecipe } from '@/ui/team-building/recipes/team-building-pokemon-card.recipe';

export const pandaRecipes: NonNullable<
  NonNullable<Config['theme']>['extend']
>['recipes'] = {
  // Home
  homePokemonTypeTag: homePokemonTypeTagRecipe,
};

export const pandaSlotRecipes: NonNullable<
  NonNullable<Config['theme']>['extend']
>['slotRecipes'] = {
  // Home
  homePokemonCard: homePokemonCardRecipe,

  // Team Building
  teamBuildingPokemonCard: teamBuildingPokemonCardRecipe,
};
