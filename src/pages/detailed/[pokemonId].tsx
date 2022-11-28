/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Head from 'next/head';
import { Fragment, FunctionComponent, useState } from 'react';

import Overview from '@/app/container/pages/Detailpage/Overview';
import Tab from '@/app/container/pages/Detailpage/Tab';
import TabContainer from '@/app/container/pages/Detailpage/TabContainer';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import {
  getPokemonDetailByName,
  getPokemonName,
  PokemonDetailByNameType,
} from '@/domains/pokemons/pokemonsService';
import { convertURLQueryToString } from '@/utils/url';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { getPrimaryColorFromType } from 'src/presentational/colorTheme';
import { Layout } from 'src/presentational/components/Layout';
import Navigator, { NavItems } from 'src/presentational/components/Navigator';

type DetailPageProps = {
  pokemonId: string;
  pokemonName: string;
  pokemonDetail: PokemonDetailByNameType;
};

const DetailPage: FunctionComponent<DetailPageProps> = ({
  pokemonId,
  pokemonName,
  pokemonDetail,
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { types, ...others } = pokemonDetail.pokemon;
  const { ownedPokemons } = useOwnedPokemonStore();

  const primColor = getPrimaryColorFromType(types[0].type.name);
  const DetailpageStyle = css`
    background-color: ${primColor};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `;

  const navItems: NavItems = [
    {
      href: '/',
      icon: faBook,
      iconColor: 'black',
      text: 'Pokemon List',
      textColor: 'white',
      bgColor: 'gray',
    },
    {
      href: '/owned',
      iconImage: '/pokeball.png',
      text: 'Owned',
      iconColor: 'white',
      textColor: 'white',
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
        <div css={DetailpageStyle}>
          <Overview
            id={Number(pokemonId)}
            currentName={pokemonName}
            types={types}
          />
          <TabContainer
            currentTab={currentTab}
            setCurrentTab={(selectedTab: number) => setCurrentTab(selectedTab)}
            primColor={primColor}
          >
            <Tab currentTab={currentTab} {...others} types={types} />
          </TabContainer>
        </div>
        <Navigator navItems={navItems} />
      </Layout>
    </Fragment>
  );
};

export default DetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (let pokemonId = 1; pokemonId <= 898; pokemonId++) {
    paths.push({
      params: { pokemonId: `${pokemonId}` },
    });
  }
  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps = async (
  staticPropsContext: GetStaticPropsContext,
): Promise<GetStaticPropsResult<DetailPageProps>> => {
  const { params } = staticPropsContext;

  const pokemonId = convertURLQueryToString(params?.pokemonId);
  try {
    const pokemon = await getPokemonName(Number(pokemonId));
    if (pokemon === null) {
      throw new Error('getPokemonName Error');
    }
    const pokemonName = pokemon.pokemons.results[0].name;

    const pokemonDetail = await getPokemonDetailByName(pokemonName);
    if (pokemonDetail === null) {
      throw new Error('getPokemonDetailByName Error');
    }

    return { props: { pokemonId, pokemonName, pokemonDetail } };
  } catch (error) {
    console.error({ error });
    return {
      notFound: true,
    };
  }
};
