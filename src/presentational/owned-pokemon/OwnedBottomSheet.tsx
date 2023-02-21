import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { FunctionComponent } from 'react';

import { usePokeType } from '@/domains/pokemon/pokemonHook';
import { getPrimaryColorFromType } from '@/presentational/colorTheme';
import { BottomSheet, Center, Flex } from '@/presentational/components/Layout';
import { H1 } from '@/presentational/components/Text';
import { CollectionListProps } from '@/presentational/owned-pokemon/CollectionList';
import { mainTheme } from '@/presentational/theme';

const CollectionList = dynamic(
  () => import('@/presentational/owned-pokemon/CollectionList'),
  { ssr: false },
) as FunctionComponent<CollectionListProps>;

type OwnedBottomSheetProps = {
  pokemonName: string;
  onClose: () => void;
};

function OwnedBottomSheet(props: OwnedBottomSheetProps) {
  const typesQuery = usePokeType(props.pokemonName);

  const pokemonType = typesQuery.data?.pokemon.types[0].type.name;
  const primaryColor = pokemonType && getPrimaryColorFromType(pokemonType);

  return (
    <BottomSheet
      style={{
        paddingBlockStart: 0,
        borderTop: `solid 4px ${primaryColor}`,
      }}
    >
      <Flex style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Flex style={{ width: '15%' }} />
        <Center style={{ width: '70%' }}>
          <H1 style={{ textTransform: 'capitalize' }}>{props.pokemonName}</H1>
        </Center>
        <CloseIcon
          data-testid="dialog-close-button"
          style={{ width: '15%' }}
          onClick={props.onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </CloseIcon>
      </Flex>
      <CollectionList
        activePokeName={props.pokemonName}
        onClickRelease={props.onClose}
      />
    </BottomSheet>
  );
}

export default OwnedBottomSheet;

const CloseIcon = mainTheme.styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '24px',
  height: '24px',
  color: 'black',
});
