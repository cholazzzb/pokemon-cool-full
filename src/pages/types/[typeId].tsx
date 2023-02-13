import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { EffectivityMap } from '@/domains/type/typeEntity';
import { calculateTypeRelationSummary } from '@/domains/type/typeLogic';
import {
  GetTypeDetailByIdRes,
  getTypeDetailById,
} from '@/domains/type/typeService.gql';
import { getPrimaryColorFromType } from '@/presentational/colorTheme';
import Header from '@/presentational/components/Header';
import {
  Body,
  FlexWrap,
  Layout,
  RightPane,
  YScrollable,
} from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import TypeChip from '@/presentational/components/TypeChip';
import TypeCard, { EffectivityText } from '@/presentational/type/TypeCard';
import { convertURLQueryToString } from '@/utils/url';

type TypeDetailPageProps = {
  typeId: number;
  typeDetail: GetTypeDetailByIdRes;
};

const TypeDetailPage: NextPage<TypeDetailPageProps> = (props) => {
  const detail = props.typeDetail.pokemon_v2_type[0];
  const pokemonType = detail.name;
  const color = getPrimaryColorFromType(pokemonType);
  const relation = detail.pokemon_v2_typeefficacies;
  const relationSummary = calculateTypeRelationSummary(relation);

  return (
    <Layout>
      <RightPane />
      <Body>
        <Header caption={pokemonType} onClickBackLink="/types" />
        <YScrollable style={{ backgroundColor: color, padding: '20px' }}>
          {relationSummary.map((summary) => (
            <TypeCard key={pokemonType}>
              <EffectivityText>{EffectivityMap[summary[0]]}</EffectivityText>

              <FlexWrap>
                {summary[1].map((type) => (
                  <Link key={type.name} href={`/types/${type.id}`}>
                    <TypeChip type={type.name as PokemonType} />
                  </Link>
                ))}
              </FlexWrap>
            </TypeCard>
          ))}
        </YScrollable>
      </Body>
      <Navigator />
    </Layout>
  );
};

export default TypeDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (let typeId = 1; typeId <= 12; typeId++) {
    paths.push({
      params: { typeId: `${typeId}` },
    });
  }
  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps: GetStaticProps<TypeDetailPageProps> = async (
  staticPropsContext,
) => {
  const { params } = staticPropsContext;

  const typeId = convertURLQueryToString(params?.typeId);
  try {
    const typeDetail = await getTypeDetailById(Number(typeId));
    if (typeDetail === null) {
      throw new Error('getTypeDetailById Error');
    }

    return { props: { typeId: Number(typeId), typeDetail } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
