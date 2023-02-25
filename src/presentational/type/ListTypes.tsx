import Link from 'next/link';
import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { GetListTypesRes } from '@/domains/type/typeService.gql';
import { getPrimaryColorFromType } from '@/presentational/colorTheme';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';

type ListTypesProps = {
  types: GetListTypesRes['pokemon_v2_type'];
};

const ListTypes: FunctionComponent<ListTypesProps> = (props) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemCount={props.types.length ?? 0}
          itemSize={100}
          itemData={{
            types: props.types,
          }}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListTypes;

type RowProps = {
  data: { types: GetListTypesRes['pokemon_v2_type'] };
  index: number;
  style: CSSProperties;
};

const Row: FunctionComponent<RowProps> = ({ data, index, style }) => {
  const types = data.types;
  if (types.length === 0) {
    return <></>;
  }

  const pokemonType = types[index].name as PokemonType;
  const pokemonTypeId = types[index].id;
  const primaryColor = getPrimaryColorFromType(pokemonType);

  const ListItem = createListItem(primaryColor);

  return (
    <ListItem style={{ ...style, height: 80 }}>
      <Link href={`/types/${pokemonTypeId}`}>
        <ListItemLink>
          <TypeIcon size={50} type={pokemonType} />
          <Text>{types[index]?.name}</Text>
        </ListItemLink>
      </Link>
    </ListItem>
  );
};

const createListItem = (backgroundColor: string) =>
  mainTheme.styled('div', {
    backgroundColor,
    borderRadius: 10,
  });

const ListItemLink = mainTheme.styled('a', {
  textDecoration: 'none',
  color: 'initial',
  width: '100%',
  height: '100%',
  paddingInlineStart: 30,
  display: 'flex',
  alignItems: 'center',
});

const Text = mainTheme.styled('p', {
  color: 'white',
  marginInlineStart: '10px',
});
