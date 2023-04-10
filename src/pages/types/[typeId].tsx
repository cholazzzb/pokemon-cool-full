import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { EffectivityMap } from '@/domains/type/typeEntity';
import {
  RelationSummary,
  calculateTypeRelationSummary,
} from '@/domains/type/typeLogic';
import { getTypeDetailById } from '@/domains/type/typeService.gql';
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
import PokemonTypeTag from '@/presentational/components/Tags/PokemonTypeTag';
import TypeCard, { EffectivityText } from '@/presentational/type/TypeCard';
import { convertURLQueryToString } from '@/utils/url';

type TypeDetailPageProps = {
  pokemonType: string;
  relationSummary: RelationSummary;
};

const TypeDetailPage: NextPage<TypeDetailPageProps> = (props) => {
  const color = getPrimaryColorFromType(props.pokemonType);

  return (
    <Layout>
      <RightPane />
      <Body>
        <Header caption={props.pokemonType} onClickBackLink="/types" />
        <YScrollable style={{ backgroundColor: color, padding: 40 }}>
          {props.relationSummary.map((summary) => (
            <TypeCard key={props.pokemonType}>
              <EffectivityText>{EffectivityMap[summary[0]]}</EffectivityText>

              <FlexWrap css={{ justifyContent: 'space-around' }}>
                {summary[1].map((type) => (
                  <a
                    key={type.name}
                    href={`/types/${type.id}`}
                    style={{ paddingBlockEnd: 8 }}
                  >
                    <PokemonTypeTag pokemonType={type.name as PokemonType} />
                  </a>
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

    const detail = typeDetail.pokemon_v2_type[0];
    const pokemonType = detail.name;
    const relation = detail.pokemon_v2_typeefficacies;
    const relationSummary = calculateTypeRelationSummary(relation);

    return { props: { pokemonType, relationSummary } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
