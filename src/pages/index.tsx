import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GetStaticPropsResult, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  AllPokemonsNameType,
  getAllPokemonsName,
} from '@/domains/pokemons/pokemonsService';
import Header from '@/presentational/components/Header';
import {
  Body,
  Layout,
  RightPane,
  YScrollable,
} from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import PokemonList from '@/presentational/pokemon-list/PokemonList';
import SearchBarWrapper from '@/presentational/pokemon-list/SearchBarWrapper';
import { getAsset } from '@/utils/asset';

type HomeProps = AllPokemonsNameType;

const Home: NextPage<HomeProps> = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const filteredPokemons =
    searchValue.length === 0
      ? props.pokemons.results
      : props.pokemons.results.filter((pokemon) =>
          pokemon.name.match(new RegExp(searchValue)),
        );

  return (
    <Layout>
      <RightPane />
      <Body>
        <Header caption="List Pokemons" />
        <YScrollable>
          <PokemonList pokemons={filteredPokemons} />
        </YScrollable>
      </Body>
      <Navigator>
        <Link href="/" style={{ width: '100%' }}>
          <Navigator.Item>
            <Navigator.ItemIcon>
              <FontAwesomeIcon icon={faBookOpen} color="#ed5564" />
            </Navigator.ItemIcon>
            <Navigator.ItemText>Pokemon List</Navigator.ItemText>
          </Navigator.Item>
        </Link>
        <Link href="/owned" style={{ width: '100%' }}>
          <Navigator.Item>
            <Navigator.ItemIcon>
              <Image
                alt="pokeball"
                src={getAsset('images/pokeball')}
                width={20}
                height={20}
              />
            </Navigator.ItemIcon>
            <Navigator.ItemText>Owned</Navigator.ItemText>
          </Navigator.Item>
        </Link>
        <SearchBarWrapper onChangeSearch={onChangeSearch} />
      </Navigator>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  try {
    const allPokemons = await getAllPokemonsName();
    if (allPokemons === null) {
      throw new Error('getPokemonName Error');
    }
    return { props: allPokemons };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
