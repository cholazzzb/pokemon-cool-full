import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

import Overview from '@/app/container/pages/Detailpage/Overview';
import Tab from '@/app/container/pages/Detailpage/Tab';
import TabContainer from '@/app/container/pages/Detailpage/TabContainer';
import {
  PokemonDetailByNameType,
  getPokemonDetailByName,
  getPokemonName,
} from '@/domains/pokemons/pokemonsService';
import { getPrimaryColorFromType } from '@/presentational/colorTheme';
import { Body, Layout, RightPane } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import { mainTheme } from '@/presentational/theme';
import { getAsset } from '@/utils/asset';
import { convertURLQueryToString } from '@/utils/url';

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

  const primColor = getPrimaryColorFromType(types[0].type.name);
  const DetailPageContainer = mainTheme.styled(Body, {
    backgroundColor: primColor,
  });

  return (
    <Layout>
      <RightPane />
      <DetailPageContainer>
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
      </DetailPageContainer>
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
                src={getAsset('images/pokeball')}
                width={20}
                height={20}
              />
            </Navigator.ItemIcon>
            <Navigator.ItemText>Owned</Navigator.ItemText>
          </Navigator.Item>
        </Link>
      </Navigator>
    </Layout>
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
