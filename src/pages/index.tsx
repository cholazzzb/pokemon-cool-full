/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';

import PokemonList from '@/app/container/pages/Listpage/PokemonList';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import {
  AllPokemonsNameType,
  getAllPokemonsName,
} from '@/domains/pokemons/pokemonsService';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import type { GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import { Fragment, useState } from 'react';
import Body from 'src/presentational/components/Body';
import Header from 'src/presentational/components/Header';
import { Layout } from 'src/presentational/components/Layout';
import Navigator, { NavItems } from 'src/presentational/components/Navigator';
import SearchBarWrapper from 'src/presentational/pokemon-list/SearchBarWrapper';

type HomeProps = AllPokemonsNameType;

const Home: NextPage<HomeProps> = (props) => {
  const { ownedPokemons } = useOwnedPokemonStore();

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

  const navItems: NavItems = [
    {
      href: '/',
      icon: faBook,
      text: 'Pokemon List',
      color: 'black',
      bgColor: 'white',
    },
    {
      href: '/owned',
      iconImage: '/pokeball.png',
      text: 'Owned',
      color: 'white',
      bgColor: 'gray',
      badge: {
        topPos: -10,
        rightPos: -10,
        text: String(
          Object.values(ownedPokemons).reduce(
            (acc, pokemons) => acc + pokemons.total,
            0,
          ),
        ),
      },
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header caption="Pokemon List" />
        <Body>
          <PokemonList pokemons={filteredPokemons} />
        </Body>
        <SearchBarWrapper onChangeSearch={onChangeSearch} />
        <Navigator navItems={navItems} />
      </Layout>
    </Fragment>
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
    console.error({ error });
    return {
      notFound: true,
    };
  }
};
