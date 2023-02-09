/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import Dialog from '@/presentational/components/Dialog';
import { Layout, RightPane } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import { getAsset } from '@/utils/asset';

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
        <RightPane />
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
        <Navigator>
          <Link href="/">
            <Navigator.Item>
              <Navigator.ItemIcon>
                <FontAwesomeIcon icon={faBook} />
              </Navigator.ItemIcon>
              <Navigator.ItemText>Pokemon List</Navigator.ItemText>
            </Navigator.Item>
          </Link>

          <Link href="/owned">
            <Navigator.Item>
              <Navigator.ItemIcon>
                <Image
                  alt="pokeball"
                  src={getAsset('icons/pokeballSelected')}
                  width={20}
                  height={20}
                />
              </Navigator.ItemIcon>
              <Navigator.ItemText>Owned</Navigator.ItemText>
            </Navigator.Item>
          </Link>
        </Navigator>
      </Layout>
    </Fragment>
  );
};

export default Owned;
