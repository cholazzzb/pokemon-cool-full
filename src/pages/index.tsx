/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { FC, useState, Dispatch, SetStateAction, Fragment } from 'react';

import Layout from '@/components/Layout';
import Body from '@/components/Body';
import Listpage from '@/app/container/pages/Listpage/Listpage';
import Detailpage from '@/components/Detailpage/Detailpage';
import Ownedpage from '@/app/container/pages/Ownedpage/Ownedpage';
import Navigator from '@/components/Navigator';
import { DETAILPAGE, LISTPAGE, OWNEDPAGE } from '@/constants/route';
import useQueryPokemons from '@/hooks/API/useQueryPokemons';

interface IContentProps {
  pokemons: any[];
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  currentId: number;
  setCurrentId: Dispatch<SetStateAction<number>>;
}

const Content: FC<IContentProps> = (props) => {
  const { pokemons, currentPage, setCurrentPage, currentId, setCurrentId } =
    props;

  switch (currentPage) {
    case LISTPAGE:
      return (
        <Listpage
          pokemons={pokemons}
          setCurrentPage={setCurrentPage}
          setCurrentId={setCurrentId}
        />
      );

    case DETAILPAGE:
      return (
        <Detailpage
          id={currentId}
          currentName={pokemons[currentId - 1].name}
          setCurrentId={setCurrentId}
          setCurrentPage={setCurrentPage}
        />
      );

    case OWNEDPAGE:
      return <Ownedpage />;

    default:
      return <div>ERROR</div>;
  }
};

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('LISTPAGE');
  const goToListPage = () => {
    setCurrentPage(LISTPAGE);
  };

  const goToOwnedPage = () => {
    setCurrentPage(OWNEDPAGE);
  };
  const [currentId, setCurrentId] = useState<number>(1);

  const { loading, error, data } = useQueryPokemons();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

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
          goToListPage={goToListPage}
          goToOwnedPage={goToOwnedPage}
        />
        <Body>
          <Content
            pokemons={data.pokemons.results}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </Body>
      </Layout>
    </Fragment>
  );
};

export default Home;
