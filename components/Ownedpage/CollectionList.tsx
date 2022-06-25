/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Card from "@components/Card";
import Image from "next/image";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  OwnedPokemonContext,
  OwnedPokemonContextType,
} from "@context/OwnedPokemonContext";

import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

const ListItemStyle = css`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  border-style: solid;
  border-width: 2px 0px;
  border-color: #f2f2f5;
`;

interface IRowProps {
  data: any;
  index: number;
  style: any;
}

const Row: FC<IRowProps> = (props) => {
  const { data, index, style } = props;
  const { id, attributes, setSelectedPokeName, triggerRelease } = data;

  const execute = (pokeName: string) => {
    setSelectedPokeName(pokeName);
    triggerRelease();
  };

  const PokeImageStyle = css`
    position: relative;
    width: 100px;
    height: 100px;
  `;
  const MainStyle = css`
    width: 60%;
  `;
  const ReleaseStyle = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 20%;
  `;

  const ReleaseIconStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
  `;

  return (
    <div css={ListItemStyle} style={style}>
      <div css={PokeImageStyle}>
        <Image
          data-testid="pokemon-image"
          src={`/sprites/${id}.png`}
          alt="pokemon"
          layout="fill"
        />
      </div>
      <div css={MainStyle}>
        <div>{attributes[index].name}</div>
      </div>
      <div css={ReleaseStyle}>
        <span
          css={ReleaseIconStyle}
          onClick={() => execute(attributes[index].name)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
        Release
      </div>
    </div>
  );
};

interface ICollectionListStyle {
  activePokeIdx: number;
  setActivePokeIdx: Dispatch<SetStateAction<number | null>>;
}

const CollectionList: FC<ICollectionListStyle> = (props) => {
  const { activePokeIdx, setActivePokeIdx } = props;

  const [selectedPokeName, setSelectedPokeName] = useState<string | null>(null);
  const [releasing, setReleasing] = useState<boolean>(false);

  const triggerRelease = () => {
    setReleasing(!releasing);
  };

  const { ownedPokemon, savePokemon, releasePokemon } = useContext(
    OwnedPokemonContext
  ) as OwnedPokemonContextType;

  const pokemonId = ownedPokemon[activePokeIdx].id;
  const pokemonName = ownedPokemon[activePokeIdx].name;
  const pokemonAttributes = ownedPokemon[activePokeIdx].attributes;

  useEffect(() => {
    if (selectedPokeName) {
      releasePokemon(selectedPokeName);
      setActivePokeIdx(null);
    }
  }, [releasing]);

  return (
    <div
      css={css`
        height: 15%;
        padding: 10px;
      `}
    >
      <Card
        headText={pokemonName}
        bodyText={pokemonAttributes.length + " pokemons"}
      />

      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemCount={pokemonAttributes.length}
            itemSize={100}
            itemData={{
              id: pokemonId,
              attributes: pokemonAttributes,
              setSelectedPokeName: setSelectedPokeName,
              triggerRelease: triggerRelease,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default CollectionList;
