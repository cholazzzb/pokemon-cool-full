/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';

import PokemonList from '@/app/container/pages/Listpage/PokemonList';
import Body from '@/components/Body';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Navigator, { NavItems } from '@/components/Navigator';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import {
  AllPokemonsNameType,
  getAllPokemonsName,
} from '@/domains/pokemons/pokemonsService';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import type { GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

type HomeProps = AllPokemonsNameType;

const Home: NextPage<HomeProps> = (props) => {
  const { ownedPokemons } = useOwnedPokemonStore();

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
          <PokemonList pokemons={props.pokemons.results} />
        </Body>
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
