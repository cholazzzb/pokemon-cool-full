import { EffectivityMapKey } from './typeEntity';
import { GetTypeDetailByIdRes } from './typeService.gql';

type PokemonType = {
  id: number;
  name: string;
};

export const calculateTypeRelationSummary = (
  relation: GetTypeDetailByIdRes['pokemon_v2_type'][0]['pokemon_v2_typeefficacies'],
): Array<[EffectivityMapKey, Array<PokemonType>]> => {
  const map: Map<EffectivityMapKey, Array<PokemonType>> = new Map();
  for (const rel of relation) {
    const effectivity = rel.damage_factor as EffectivityMapKey;

    if (map.has(effectivity)) {
      const types = map.get(effectivity) as Array<PokemonType>;
      const newType = {
        id: rel.target_type_id ?? 0,
        name: rel.pokemonV2TypeByTargetTypeId?.name ?? '',
      } as PokemonType;
      if (newType) map.set(effectivity, [...types, newType]);
    } else {
      const newType = {
        id: rel.target_type_id ?? 0,
        name: rel.pokemonV2TypeByTargetTypeId?.name ?? '',
      } as PokemonType;
      if (newType) map.set(effectivity, [newType]);
    }
  }

  return Array.from(map.entries());
};
