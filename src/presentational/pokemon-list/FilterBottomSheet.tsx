import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';

import { pokemonGenerations } from '@/domains/pokemonGeneration/pokemonGenerationEntity';
import {
  PokemonType,
  pokemonTypes,
} from '@/domains/pokemonType/pokemonTypeEntity';
import {
  BottomSheet as BottomSheetDefault,
  Center,
  Flex,
  FlexWrap,
} from '@/presentational/components/Layout';
import { ModalOverlay } from '@/presentational/components/ModalOverlay';
import PokemonGenerationTag from '@/presentational/components/Tags/PokemonGenerationTag';
import PokemonTag from '@/presentational/components/Tags/PokemonTypeTag';
import Text from '@/presentational/components/Text';
import { styled } from '../panda-css/jsx';

type FilterBottomSheetProps = {
  pokemonGenFilter: Set<number>;
  onClickPokemonGenFilter: (gen: number) => void;
  pokemonTypeFilter: Set<PokemonType>;
  onClickPokemonTypeFilter: (pokemonType: PokemonType) => void;
  onClickClose: () => void;
};

function FilterBottomSheet(props: FilterBottomSheetProps) {
  return (
    <ModalOverlay css={{ alignItems: 'flex-end', md: { display: 'none' } }}>
      <AnimatePresence>
        <BottomSheet
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -500, opacity: 0 }}
        >
          <Center>
            <div style={{ width: '15%' }}></div>
            <Text
              css={{ width: '70%', textAlign: 'center' }}
              color="black"
              variant="h2"
            >
              Filter
            </Text>
            <FontAwesomeIcon
              style={{ width: '15%' }}
              icon={faTimes}
              color="black"
              onClick={props.onClickClose}
            />
          </Center>
          <Text variant="h3" color="black">
            Pokemon Generation
          </Text>
          <Flex
            css={{
              marginInlineStart: '$5',
              marginBlockStart: '$1',
              flexGrow: 1,
              overflowX: 'scroll',
            }}
          >
            {pokemonGenerations.map((gen) => (
              <PokemonGenerationTag
                key={`pokemon-gen-tag-${gen}`}
                css={{
                  marginBlock: '$1',
                  marginInlineEnd: '$1',
                }}
                generation={gen}
                focused={props.pokemonGenFilter.has(gen)}
                onClick={() => props.onClickPokemonGenFilter(gen)}
              />
            ))}
          </Flex>

          <Text variant="h3" color="black">
            Pokemon Type
          </Text>
          <FlexWrap
            css={{
              padding: '$1',
              marginBlockStart: '$1',
              justifyContent: 'center',
            }}
          >
            {pokemonTypes.map((pokemonType) => (
              <PokemonTag
                key={`pokemon-type-tag-${pokemonType}`}
                css={{
                  marginBlock: '$1',
                  marginInlineEnd: '$1',
                }}
                pokemonType={pokemonType}
                focused={props.pokemonTypeFilter.has(pokemonType)}
                onClick={() => props.onClickPokemonTypeFilter(pokemonType)}
              />
            ))}
          </FlexWrap>
        </BottomSheet>
      </AnimatePresence>
    </ModalOverlay>
  );
}

export default FilterBottomSheet;

const BottomSheet = styled(BottomSheetDefault, {
  base: {
    paddingBlockStart: '5x',
    paddingInline: '5x',
    height: '420px',
    boxShadow: '0px -4px 4px #b3b3cc',
  },
});
