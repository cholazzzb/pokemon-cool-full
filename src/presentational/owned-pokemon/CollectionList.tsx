import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import shallow from 'zustand/shallow';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import { mainTheme } from 'src/presentational/theme';

type RowData = {
  pokemonName: string;
  names: Array<string>;
  onClickRelease: () => void;
};

type RowProps = {
  data: RowData;
  index: number;
  style: any;
};

const Row: FunctionComponent<RowProps> = (props) => {
  const { data, index, style } = props;
  const { pokemonName, names, onClickRelease } = data;
  const { publicRuntimeConfig } = getConfig();

  const { ownedPokemons, releasePokemonByName } = useOwnedPokemonStore(
    (state) => ({
      ownedPokemons: state.ownedPokemons,
      releasePokemonByName: state.releasePokemonByName,
    }),
    shallow,
  );

  const pokemonId = ownedPokemons[pokemonName].id.toString();

  const releasePokemon = () => {
    onClickRelease();
    releasePokemonByName(pokemonName, names[index]);
  };

  return (
    <div style={style}>
      <ListItem>
        <PokeImage>
          <Link href={`detailed/${pokemonId}`}>
            <Image
              data-testid="pokemon-image"
              src={publicRuntimeConfig.pokemonImageUrl.replace(
                '{id}',
                pokemonId,
              )}
              alt="pokemon"
              width={75}
              height={75}
            />
          </Link>
        </PokeImage>

        <Main>
          <div>{names[index]}</div>
        </Main>
        <Release onClick={releasePokemon}>
          <ReleaseIcon>
            <FontAwesomeIcon icon={faTrash} />
          </ReleaseIcon>
          Release
        </Release>
      </ListItem>
    </div>
  );
};

const AutoSizerContainer = mainTheme.styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
});

export type CollectionListProps = {
  activePokeName: string;
  onClickRelease: () => void;
};

const CollectionList: FunctionComponent<CollectionListProps> = (props) => {
  const { activePokeName, onClickRelease } = props;
  const { ownedPokemons } = useOwnedPokemonStore();

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
              onClickRelease,
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

const PokeImage = mainTheme.styled('div', {
  position: 'relative',
  width: '100px',
  height: '100px',
});

const Main = mainTheme.styled('div', {
  flexGrow: 1,
});

const Release = mainTheme.styled('div', {
  display: 'flex',
  cursor: 'pointer',
  backgroundColor: '$red100',
  color: 'white',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100px',
  width: '100px',
  '&:hover': {
    backgroundColor: '$red90',
  },
});

const ReleaseIcon = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  width: '20px',
  height: '20px',
  marginBottom: '10px',
});

const ListItem = mainTheme.styled('div', {
  display: 'flex',
  width: '100%',
  height: '100px',
  alignItems: 'center',
  borderStyle: 'solid',
  borderWidth: '2px 0px',
  borderColor: '#f2f2f5',
});
