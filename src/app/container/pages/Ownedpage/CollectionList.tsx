import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import getConfig from 'next/config';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { releasePokemon } from '@/domains/ownedPokemon/ownedPokemonUtil';

const PokeImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Main = styled.div`
  width: 60%;
`;
const Release = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const ReleaseIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  border-style: solid;
  border-width: 2px 0px;
  border-color: #f2f2f5;
`;

type RowData = {
  pokemonName: string;
  names: Array<string>;
  setSelectedPokeName: (pokeName: string) => void;
  triggerRelease: () => void;
};

type RowProps = {
  data: RowData;
  index: number;
  style: any;
};

const Row: FC<RowProps> = (props) => {
  const { data, index, style } = props;
  const { pokemonName, names, setSelectedPokeName, triggerRelease } = data;
  const { publicRuntimeConfig } = getConfig();

  const { ownedPokemons } = useOwnedPokemonStore();

  const execute = (pokeName: string) => {
    setSelectedPokeName(pokeName);
    triggerRelease();
  };

  return (
    <div style={style}>
      <ListItem>
        <PokeImage>
          <Image
            data-testid="pokemon-image"
            src={publicRuntimeConfig.pokemonImageUrl.replace(
              '{id}',
              ownedPokemons[pokemonName].id.toString(),
            )}
            alt="pokemon"
            layout="fill"
          />
        </PokeImage>

        <Main>
          <div>{names[index]}</div>
        </Main>
        <Release>
          <ReleaseIcon onClick={() => execute(pokemonName)}>
            <FontAwesomeIcon icon={faTrash} />
          </ReleaseIcon>
          Release
        </Release>
      </ListItem>
    </div>
  );
};

const AutoSizerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

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
    <AutoSizerContainer>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            itemCount={ownedPokemons[activePokeName].total}
            itemSize={100}
            itemData={{
              pokemonName: activePokeName,
              names: Object.keys(ownedPokemons[activePokeName].name),
              setSelectedPokeName: setSelectedPokeName,
              triggerRelease: triggerRelease,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </AutoSizerContainer>
  );
};

export default CollectionList;
