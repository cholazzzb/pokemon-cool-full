import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, FunctionComponent, useState } from 'react';

import { Body, Layout, RightPane } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import OwnedBottomSheet from '@/presentational/owned-pokemon/OwnedBottomSheet';
import type { OwnedPokemonListProps } from '@/presentational/owned-pokemon/OwnedPokemonList';
import { getAsset } from '@/utils/asset';

const OwnedPokemonList = dynamic(
  () => import('@/presentational/owned-pokemon/OwnedPokemonList'),
  { ssr: false },
) as FunctionComponent<OwnedPokemonListProps>;

const Owned: NextPage = () => {
  const [activePokeName, setActivePokeName] = useState('');
  const [showDetailed, setShowDetailed] = useState(false);

  return (
    <Fragment>
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
            <OwnedBottomSheet
              pokemonName={activePokeName}
              onClose={() => setShowDetailed(false)}
            />
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
