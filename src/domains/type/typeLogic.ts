import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { EffectivityMapKey } from './typeEntity';
import { GetTypeDetailByIdRes } from './typeService.gql';

type PokemonTargetType = {
  id: number;
  name: PokemonType;
};

export type RelationSummary = Array<
  [EffectivityMapKey, Array<PokemonTargetType>]
>;

export const calculateTypeRelationSummary = (
  relation: GetTypeDetailByIdRes['pokemon_v2_type'][0]['pokemon_v2_typeefficacies'],
): RelationSummary => {
  const map: Map<EffectivityMapKey, Array<PokemonTargetType>> = new Map();
  for (const rel of relation) {
    const effectivity = rel.damage_factor as EffectivityMapKey;

    if (map.has(effectivity)) {
      const types = map.get(effectivity) as Array<PokemonTargetType>;
      const newType = {
        id: rel.target_type_id ?? 0,
        name: rel.pokemonV2TypeByTargetTypeId?.name ?? '',
      } as PokemonTargetType;
      if (newType) map.set(effectivity, [...types, newType]);
    } else {
      const newType = {
        id: rel.target_type_id ?? 0,
        name: rel.pokemonV2TypeByTargetTypeId?.name ?? '',
      } as PokemonTargetType;
      if (newType) map.set(effectivity, [newType]);
    }
  }

  return Array.from(map.entries());
};
