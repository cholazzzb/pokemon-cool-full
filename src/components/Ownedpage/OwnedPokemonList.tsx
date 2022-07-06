/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import { FC } from 'react';
import PokemonCardVer from '../PokemonCardVer';
import Card from '@/components/Card';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { PokemonName } from '@/domains/OwnedPokemon/ownedPokemonEntity';
import { useOwnedPokemonStore } from '@/domains/OwnedPokemon/ownedPokemonStore';

type RowProps = {
  data: {
    selectPokemon: (selectedPokemon: string) => void;
  };
  index: number;
  style: any;
};
const Row: FC<RowProps> = (props) => {
  const { data, index, style } = props;
  const { selectPokemon } = data;
  const { ownedPokemons } = useOwnedPokemonStore();
  const ownedPokemonsArr = Object.keys(ownedPokemons);
  return (
    <div onClick={() => selectPokemon(ownedPokemonsArr[index])} style={style}>
      <PokemonCardVer
        id={ownedPokemons[ownedPokemonsArr[index]].id}
        name={ownedPokemonsArr[index]}
      />
    </div>
  );
};

const ListStyle = css`
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

type OwnedPokemonListProps = {
  selectPokemon: (selectedPokemon: PokemonName) => void;
};
const OwnedPokemonList: FC<OwnedPokemonListProps> = ({ selectPokemon }) => {
  const { ownedPokemons } = useOwnedPokemonStore();

  return (
    <div style={{ height: '50%', padding: '10px' }}>
      <Card headText="Your Owned Pokemon" bodyText="Click to see details" />

      <AutoSizer>
        {({ height, width }) => (
          <List
            css={ListStyle}
            height={height}
            width={width}
            itemCount={Object.values(ownedPokemons).length}
            itemSize={200}
            layout="horizontal"
            itemData={{
              selectPokemon: selectPokemon,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default OwnedPokemonList;
