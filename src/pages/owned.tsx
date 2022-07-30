/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { OWNEDPAGE } from '@/constants/route';
import Layout from '@/components/Layout';
import Navigator from '@/components/Navigator';
import Dialog from '@/components/Dialog';

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

  return (
    <Fragment>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navigator
          currentPage={OWNEDPAGE}
          goToListPage={() => {
            window.location.href = '/';
          }}
          goToOwnedPage={() => {
            window.location.href = '/owned';
          }}
        />
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
                updateActivePokeName={(activePokeName) =>
                  setActivePokeName(activePokeName)
                }
              />
            </Dialog>
          )}
        </Body>
      </Layout>
    </Fragment>
  );
};

export default Owned;
