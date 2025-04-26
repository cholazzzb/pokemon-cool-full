import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiSvc } from '@/shared-logic/service';

const getListGenerationQuery = graphql(`
  query samplePokeAPIquery {
    generations: pokemon_v2_generation {
      name
      id
    }
  }
`);

export const GenerationGQLQueryKey = {
  getList: ['generations', 'list'],
};

export function getListGenerations() {
  return pokeApiSvc(getListGenerationQuery);
}
