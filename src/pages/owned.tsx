import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, FunctionComponent, useState } from 'react';

import Dialog from '@/presentational/components/Dialog';
import { Body, Layout, RightPane } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import type { CollectionListProps } from '@/presentational/owned-pokemon//CollectionList';
import type { OwnedPokemonListProps } from '@/presentational/owned-pokemon/OwnedPokemonList';
import { getAsset } from '@/utils/asset';

const OwnedPokemonList = dynamic(
  () => import('@/presentational/owned-pokemon/OwnedPokemonList'),
  { ssr: false },
) as FunctionComponent<OwnedPokemonListProps>;

const CollectionList = dynamic(
  () => import('@/presentational/owned-pokemon/CollectionList'),
  { ssr: false },
) as FunctionComponent<CollectionListProps>;

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
          <Link href="/" style={{ width: '100%' }}>
            <Navigator.Item>
              <Navigator.ItemIcon>
                <FontAwesomeIcon icon={faBook} />
              </Navigator.ItemIcon>
              <Navigator.ItemText>Pokemon List</Navigator.ItemText>
            </Navigator.Item>
          </Link>

          <Link href="/owned" style={{ width: '100%' }}>
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
