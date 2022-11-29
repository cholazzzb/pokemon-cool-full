/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Fragment, useState } from 'react';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Dialog from 'src/presentational/components/Dialog';
import { Layout } from 'src/presentational/components/Layout';
import Navigator, { NavItems } from 'src/presentational/components/Navigator';

const OwnedPokemonList = dynamic(
  () => import('@/app/container/pages/Ownedpage/OwnedPokemonList'),
  { ssr: false },
);

const CollectionList = dynamic(
  () => import('@/app/container/pages/Ownedpage/CollectionList'),
  { ssr: false },
);

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const Owned: NextPage = () => {
  const [activePokeName, setActivePokeName] = useState('');
  const [showDetailed, setShowDetailed] = useState(false);
  const { ownedPokemons } = useOwnedPokemonStore();

  const navItems: NavItems = [
    {
      href: '/',
      icon: faBook,
      iconColor: 'white',
      text: 'Pokemon List',
      textColor: 'white',
      bgColor: 'gray',
    },
    {
      href: '/owned',
      iconImage: '/pokeball.png',
      iconColor: 'black',
      text: 'Owned',
      textColor: 'black',
      bgColor: 'white',
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
        <Body>
          <OwnedPokemonList
            selectPokemon={(selectedPokemon) => {
              setShowDetailed(true);
              setActivePokeName(selectedPokemon);
            }}
          />
          {showDetailed && activePokeName.length > 0 && (
            <Dialog
              headerText={activePokeName}
              onClose={() => setShowDetailed(false)}
            >
              <CollectionList
                activePokeName={activePokeName}
                onClickRelease={() => setShowDetailed(false)}
              />
            </Dialog>
          )}
        </Body>
        <Navigator navItems={navItems} />
      </Layout>
    </Fragment>
  );
};

export default Owned;
