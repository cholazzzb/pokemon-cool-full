import { useQuery, gql } from "@apollo/client";

const GET_POKEDETAIL = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        slot
        type {
          id
          url
          name
        }
      }
      height
      weight
      abilities {
        ability {
          url
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          url
          name
        }
      }
    }
  }
`;

const useQueryPokeDetail = (name:string) => {
  const { loading, error, data } = useQuery(GET_POKEDETAIL, {
    variables: {
      name
    },
  });
  return { loading, error, data };
};

export default useQueryPokeDetail;
