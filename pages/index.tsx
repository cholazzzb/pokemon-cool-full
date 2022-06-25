/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";

import type { NextPage } from "next";
import Head from "next/head";

import { FC, useState, Dispatch, SetStateAction } from "react";

import Layout from "@components/Layout";
import Body from "@components/Body";
import Listpage from "@components/Listpage/Listpage";
import Detailpage from "@components/Detailpage/Detailpage";
import Ownedpage from "@components/Ownedpage/Ownedpage";
import Navigator from "@components/Navigator";
import { DETAILPAGE, LISTPAGE, OWNEDPAGE } from "@constants/route";
import useLoadOwnedPoke from "hooks/useLoadOwnedPoke";
import { OwnedPokemonContext } from "context/OwnedPokemonContext";
import useQueryPokemons from "@hooks/API/useQueryPokemons";

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
  const [currentPage, setCurrentPage] = useState<string>("LISTPAGE");
  const [currentId, setCurrentId] = useState<number>(1);

  const OwnedPokemonContextValue = useLoadOwnedPoke();

  const { loading, error, data } = useQueryPokemons();

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <OwnedPokemonContext.Provider value={OwnedPokemonContextValue}>
      <Head>
        <title>Pokemon Cool</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navigator currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
    </OwnedPokemonContext.Provider>
  );
};

export default Home;
