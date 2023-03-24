import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { getPokemonDetailById } from '@/domains/pokemons/pokemonsService.gql';
import {
  createPokemonTypeBgColor,
  getPrimaryColorFromType,
} from '@/presentational/colorTheme';
import {
  Body,
  BottomSheet,
  Layout,
  RightPane,
} from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import InformationCards from '@/presentational/detailed-pokemon/InformationCards';
import LocationCards from '@/presentational/detailed-pokemon/LocationCards';
import Overview from '@/presentational/detailed-pokemon/Overview';
import { mainTheme } from '@/presentational/theme';
import { getAsset } from '@/utils/asset';
import { convertURLQueryToString } from '@/utils/url';

type DetailPageProps = {
  pokemonId: string;
  pokemonDetail: GetPokemonDetailByIdQuery;
};

const DetailPage: FunctionComponent<DetailPageProps> = ({
  pokemonId,
  pokemonDetail,
}) => {
  const pokemonTypes = pokemonDetail.about[0].types;
  const pokemonType = (pokemonDetail.about[0].types[0].type?.name ??
    'normal') as PokemonType;

  const primaryColor = getPrimaryColorFromType(pokemonType);

  return (
    <Layout>
      <RightPane />
      <DetailPageContainer pokemonType={pokemonType}>
        <Overview
          id={Number(pokemonId)}
          currentName={pokemonDetail.about[0].name}
          types={pokemonTypes}
        />
        <BottomSheet>
          <InformationCards
            primaryColor={primaryColor}
            informations={pokemonDetail}
          />
          <LocationCards />
        </BottomSheet>
      </DetailPageContainer>
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
  return {
    fallback: 'blocking',
    paths: Array.from(Array(20).keys()).map((idx) => ({
      params: {
        pokemonId: `${idx + 1}`,
      },
    })),
  };
};

export const getStaticProps = async (
  staticPropsContext: GetStaticPropsContext,
): Promise<GetStaticPropsResult<DetailPageProps>> => {
  const { params } = staticPropsContext;

  const pokemonId = convertURLQueryToString(params?.pokemonId);
  try {
    const pokemonDetail = await getPokemonDetailById(Number(pokemonId));

    return { props: { pokemonId, pokemonDetail } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const DetailPageContainer = mainTheme.styled(Body, {
  variants: {
    pokemonType: createPokemonTypeBgColor(0.9),
  },
});
