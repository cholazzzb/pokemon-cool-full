import { faBullseye, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ComponentProps, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { useListTypes } from '@/domains/type/typeHook';
import { createPokemonTypeBgColor } from '@/presentational/colorTheme';
import { ButtonOutline } from '@/presentational/components/Button';
import { Center, Flex } from '@/presentational/components/Layout';
import Text from '@/presentational/components/Text';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';

type TabMoveProps = {
  moves: GetPokemonDetailByIdQuery['moves'];
};

const TabMoves: FunctionComponent<TabMoveProps> = ({ moves }) => {
  const pokeListTypes = useListTypes();
  const listTypes = pokeListTypes.data?.types ?? [];

  return (
    <>
      <MoveContainer>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={moves.length}
              itemSize={52}
              itemData={moves}
            >
              {({ data, index, style }) => {
                const moveTypeId = data[index].move?.typeId ?? 1;
                const moveType = (listTypes[moveTypeId - 1]?.name ??
                  'normal') as PokemonType;
                return (
                  <MoveRow
                    style={style}
                    key={data[index].move?.name ?? ''}
                    pokemonType={moveType}
                    moveTypeId={moveTypeId}
                    moveName={
                      data[index]?.move?.name.replace(/-/g, ' ') ?? 'error'
                    }
                    power={data[index]?.move?.power ?? 0}
                    acc={data[index]?.move?.accuracy ?? 0}
                    pp={data[index]?.move?.pp ?? 0}
                  />
                );
              }}
            </List>
          )}
        </AutoSizer>
      </MoveContainer>
      <Flex
        style={{
          width: '100%',
          padding: 12,
        }}
      >
        <ButtonOutline
          style={{
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <Text>Close</Text>
        </ButtonOutline>
      </Flex>
    </>
  );
};

export default TabMoves;

function MoveRow(
  props: {
    moveTypeId: number;
    moveName: string;
    power: number;
    acc: number;
    pp: number;
  } & ComponentProps<typeof Row>,
) {
  const pokemonType =
    typeof props.pokemonType === 'string' ? props.pokemonType : 'normal';
  return (
    <Row {...props}>
      <Link href={`/types/${props.moveTypeId}`} style={{ width: '12.5%' }}>
        <TypeIcon type={pokemonType} />
      </Link>
      <Flex css={{ flexDirection: 'column', flexGrow: 1 }}>
        <Text css={{ textTransform: 'capitalize' }}>{props.moveName}</Text>
        <Text variant="body1">PP: {props.pp}</Text>
      </Flex>
      <Center css={{ width: '25%' }}>
        <FontAwesomeIcon icon={faDumbbell} color="white" />
        <Text variant="body1" css={{ marginInline: '$1' }}>
          {props.power}{' '}
        </Text>
      </Center>
      <Center css={{ width: '25%' }}>
        <FontAwesomeIcon icon={faBullseye} color="white" />
        <Text variant="body1" css={{ marginInline: '$1' }}>
          {props.acc !== 0 ? props.acc : '-'}
        </Text>
      </Center>
    </Row>
  );
}
const Row = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingInline: '$3',
  border: 'solid',
  borderColor: 'rgba(141, 158, 255, 0.5)',
  borderInline: '6px',
  variants: {
    pokemonType: createPokemonTypeBgColor(0.8),
  },
});

const MoveContainer = mainTheme.styled('div', {
  height: '100%',
  width: '100%',
  paddingInlineStart: '10px',
});
