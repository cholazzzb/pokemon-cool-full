/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import { FC, useEffect, useState } from 'react';
import Card from '@/components/Card';
import Image from 'next/image';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { useOwnedPokemonStore } from '@/domains/OwnedPokemon/ownedPokemonStore';
import { releasePokemon } from '@/domains/OwnedPokemon/ownedPokemonUtil';

const ListItemStyle = css`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  border-style: solid;
  border-width: 2px 0px;
  border-color: #f2f2f5;
`;

type RowProps = {
  data: any;
  index: number;
  style: any;
};

const Row: FC<RowProps> = (props) => {
  const { data, index, style } = props;
  const { setSelectedPokeName, triggerRelease } = data;

  const { ownedPokemons } = useOwnedPokemonStore();
  const pokemonName = Object.keys(ownedPokemons)[index];

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
          src={`/sprites/${ownedPokemons[pokemonName].id}.png`}
          alt="pokemon"
          layout="fill"
        />
      </div>
      <div css={MainStyle}>
        <div>{pokemonName}</div>
      </div>
      <div css={ReleaseStyle}>
        <span css={ReleaseIconStyle} onClick={() => execute(pokemonName)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
        Release
      </div>
    </div>
  );
};

type CollectionListProps = {
  activePokeName: string;
  updateActivePokeName: (activePokeName: string) => void;
};

const CollectionList: FC<CollectionListProps> = (props) => {
  const { activePokeName, updateActivePokeName } = props;

  const [selectedPokeName, setSelectedPokeName] = useState<string | null>(null);
  const [releasing, setReleasing] = useState<boolean>(false);

  const triggerRelease = () => {
    setReleasing(!releasing);
  };

  const { ownedPokemons } = useOwnedPokemonStore();

  useEffect(() => {
    if (selectedPokeName) {
      releasePokemon(ownedPokemons, activePokeName, selectedPokeName);
      updateActivePokeName('');
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
        headText={activePokeName}
        bodyText={
          Object.values(ownedPokemons).reduce(
            (acc, pokemons) => acc + pokemons.total,
            0,
          ) + ' pokemons'
        }
      />

      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemCount={ownedPokemons[activePokeName].total}
            itemSize={100}
            itemData={{
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
