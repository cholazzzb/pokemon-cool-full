import getConfig from 'next/config';
import Link from 'next/link';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { GetPokemonsByGensAndTypesQuery } from '@/__generated__/pokeapi/gql/graphql';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { useGetPokemonsByGensAndTypesQuery } from '@/domains/pokemons/pokemonsHook';
import { GetListTypesRes } from '@/domains/type/typeService.gql';
import { createPokemonTypeBgColor } from '@/presentational/colorTheme';
import { Flex, YStack } from '@/presentational/components/Layout';
import PokeImage from '@/presentational/components/PokeImage';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';
import { styled } from '../panda-css/jsx';

const { publicRuntimeConfig } = getConfig();

type ListTypesProps = {
  types: GetListTypesRes['types'];
};

const ListTypes: FunctionComponent<ListTypesProps> = (props) => {
  return (
    <YStack css={{ width: '100%', height: '100%' }}>
      {props.types.map((pokemonType) => (
        <Row
          key={`row-pokemonType-${pokemonType}`}
          pokemonTypes={pokemonType}
        />
      ))}
    </YStack>
  );
};

export default ListTypes;

type Miliseconds = number;

type RowProps = {
  pokemonTypes: GetListTypesRes['types'][0];
};

const Row: FunctionComponent<RowProps> = ({ pokemonTypes }) => {
  const pokemonQuery = useGetPokemonsByGensAndTypesQuery({
    pageSize: 4 * 8,
    genIds: [],
    typeIds: [pokemonTypes?.id],
  });

  const [randomPokemon, setRandomPokemon] = useState<
    GetPokemonsByGensAndTypesQuery['pokemons']
  >([]);

  const calculateRandomDelay = (): Miliseconds => {
    return 4000 + Math.random() * 10000;
  };

  const showRandomPokemon = (
    pokemons: GetPokemonsByGensAndTypesQuery['pokemons'],
  ) => {
    const selected = [...pokemons];
    const shownPokemon = 4;
    for (let iter = 0; iter < shownPokemon; iter++) {
      const lastLength = selected.length - 1 - iter;
      const randomIdx = Math.floor(Math.random() * lastLength);
      [selected[randomIdx], selected[lastLength]] = [
        selected[lastLength],
        selected[randomIdx],
      ];
    }
    setRandomPokemon(
      selected.slice(selected.length - 1 - shownPokemon, selected.length - 1),
    );
  };

  const delayRef = useRef<NodeJS.Timeout>();
  const changeGenId = () => {
    delayRef.current = setTimeout(() => {
      showRandomPokemon(pokemonQuery.flattenData);
      changeGenId();
    }, calculateRandomDelay());
  };

  useEffect(() => {
    changeGenId();
    return () => {
      delayRef.current && clearTimeout(delayRef.current);
    };
  }, [delayRef.current]);

  const pokemonType = pokemonTypes.name as PokemonType;
  const pokemonTypeId = pokemonTypes.id;

  return (
    <ListItem pokemonType={pokemonType}>
      <Link href={`/types/${pokemonTypeId}`}>
        <ListItemLink>
          <TypeIcon size={50} type={pokemonType} />
          <Text>{pokemonType}</Text>
          <Flex css={{ width: '100%', justifyContent: 'space-between' }}>
            {randomPokemon.map((pokemon) => (
              <PokeImage
                key={`pokemon-image-${pokemon.name}`}
                type={pokemonType}
                image={publicRuntimeConfig.pokemonImageUrl.replace(
                  '{id}',
                  pokemon.id.toString(),
                )}
                size={36}
                posY={-20}
              />
            ))}
          </Flex>
        </ListItemLink>
      </Link>
    </ListItem>
  );
};

const ListItem = mainTheme.styled('div', {
  borderRadius: 10,
  marginBlock: '$3',
  variants: {
    pokemonType: createPokemonTypeBgColor(0.8),
  },
});

const ListItemLink = styled('div', {
  base: {
    color: 'initial',
    width: '100%',
    height: '100%',
    paddingInlineStart: '2x',
    paddingInlineEnd: '5x',
    display: 'flex',
    alignItems: 'center',
  },
});

const Text = styled('p', {
  base: {
    color: 'white',
    marginInlineEnd: '5x',
    textTransform: 'capitalize',
  },
});
