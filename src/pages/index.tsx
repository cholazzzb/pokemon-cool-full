import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import PokemonList from '@/app/container/pages/Listpage/PokemonList';
import {
  AllPokemonsNameType,
  getAllPokemonsName,
} from '@/domains/pokemons/pokemonsService';
import { getAsset } from '@/utils/asset';
import Link from 'next/link';
import Body from 'src/presentational/components/Body';
import Header from 'src/presentational/components/Header';
import { Layout, RightPane } from 'src/presentational/components/Layout';
import Navigator from 'src/presentational/components/Navigator';
import SearchBarWrapper from 'src/presentational/pokemon-list/SearchBarWrapper';

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
    <Fragment>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <RightPane />
        <Body>
          <Header caption="List Pokemons" />
          <PokemonList pokemons={filteredPokemons} />
        </Body>
        <Navigator>
          <Link href="/">
            <Navigator.Item>
              <Navigator.ItemIcon>
                <FontAwesomeIcon icon={faBookOpen} color="#ed5564" />
              </Navigator.ItemIcon>
              <Navigator.ItemText>Pokemon List</Navigator.ItemText>
            </Navigator.Item>
          </Link>
          <Link href="/owned">
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
