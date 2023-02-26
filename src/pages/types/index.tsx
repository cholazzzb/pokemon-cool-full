import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

import { GetListTypesRes, getListTypes } from '@/domains/type/typeService.gql';
import Header from '@/presentational/components/Header';
import { Body, Layout, RightPane } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import ListTypes from '@/presentational/type/ListTypes';

type MovesPageProps = {
  types: GetListTypesRes['types'];
};

const MovesPage: NextPage<MovesPageProps> = (props) => {
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
          <Header caption="List Pokemon Types" onClickBackLink="/" />
          <ListTypes types={props.types} />
        </Body>
        <Navigator />
      </Layout>
    </Fragment>
  );
};

export default MovesPage;

export const getStaticProps: GetStaticProps<MovesPageProps> = async () => {
  try {
    const listPokemonMoves = await getListTypes();
    if (!listPokemonMoves) {
      throw new Error('getListTypes Error');
    }
    return { props: { types: listPokemonMoves['types'] } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
