/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';

import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import Layout from '@/components/Layout';
import Body from '@/components/Body';
import Navigator, { NavItems } from '@/components/Navigator';
import useQueryPokemons from '@/hooks/API/useQueryPokemons';
import Header from '@/components/Header';
import PokemonList from '@/app/container/pages/Listpage/PokemonList';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';

const Home: NextPage = () => {
  const { loading, error, data } = useQueryPokemons();
  const { ownedPokemons } = useOwnedPokemonStore();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

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
          <PokemonList pokemons={data.pokemons.results} />
        </Body>
        <Navigator navItems={navItems} />
      </Layout>
    </Fragment>
  );
};

export default Home;
