/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useState, Fragment } from 'react';

import Layout from '@/components/Layout';
import Body from '@/components/Body';
import Listpage from '@/app/container/pages/Listpage/Listpage';
import Navigator from '@/components/Navigator';
import useQueryPokemons from '@/hooks/API/useQueryPokemons';

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('LISTPAGE');
  const [_, setCurrentId] = useState<number>(1);

  const { loading, error, data } = useQueryPokemons();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

  return (
    <Fragment>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navigator
          currentPage={currentPage}
          goToListPage={() => (window.location.href = '/')}
          goToOwnedPage={() => (window.location.href = '/owned')}
        />
        <Body>
          <Listpage
            pokemons={data.pokemons.results}
            setCurrentPage={setCurrentPage}
            setCurrentId={setCurrentId}
          />
        </Body>
      </Layout>
    </Fragment>
  );
};

export default Home;
