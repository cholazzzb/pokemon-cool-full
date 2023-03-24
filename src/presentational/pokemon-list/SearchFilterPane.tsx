import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';

import { pokemonGenerations } from '@/domains/pokemonGeneration/pokemonGenerationEntity';
import {
  PokemonType,
  pokemonTypes,
} from '@/domains/pokemonType/pokemonTypeEntity';
import { Flex, FlexWrap, RightPane } from '@/presentational/components/Layout';
import PokemonGenerationTag from '@/presentational/components/Tags/PokemonGenerationTag';
import PokemonTypeTag from '@/presentational/components/Tags/PokemonTypeTag';
import Text from '@/presentational/components/Text';

type SearchFilterPaneProps = {
  showFilter: boolean;
  onClickToggleFilter: () => void;
  pokemonGenFilter: Set<number>;
  onClickPokemonGenFilter: (gen: number) => void;
  pokemonTypeFilter: Set<PokemonType>;
  onClickPokemonTypeFilter: (pokemonType: PokemonType) => void;
};

export default function SearchFilterPane(props: SearchFilterPaneProps) {
  const filterSelected =
    props.pokemonGenFilter.size > 0 || props.pokemonTypeFilter.size > 0;

  return (
    <RightPane>
      <Flex
        css={{
          width: '100%',
          height: 48,
          alignItems: 'center',
          backgroundColor: '$primary100',
          paddingInline: '$3',
          cursor: 'pointer',
        }}
        onClick={props.onClickToggleFilter}
      >
        <FontAwesomeIcon icon={faFilter} size="lg" color="white" />
        <Text css={{ marginInlineStart: '$3' }}> Filter Pokemon</Text>
      </Flex>
      {props.showFilter && (
        <AnimatePresence>
          <Flex
            css={{
              position: 'absolute',
              width: 300,
              marginInlineStart: -300,
              height: '100%',
              zIndex: '$floatingActionButton',
              backgroundColor: `rgba(255,255,255,${filterSelected ? 0.5 : 1})`,
              flexDirection: 'column',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px -7px 10px 5px',
              clipPath: 'inset(0px 0px 0px -15px)',
              borderRightStyle: 'solid',
              borderRightColor: 'rgba(0,0,0,0.1)',
              borderRightWidth: '$1',
            }}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
          >
            <Flex
              css={{
                width: '100%',
                height: 48,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingInline: '$3',
              }}
            >
              <FontAwesomeIcon
                icon={faTimes}
                style={{ cursor: 'pointer' }}
                onClick={props.onClickToggleFilter}
              />
            </Flex>
            <Text
              variant="h3"
              color="black"
              css={{ width: '100%', textAlign: 'center' }}
            >
              Pokemon Generation
            </Text>
            <FlexWrap
              css={{
                padding: '$1',
                marginBlockStart: '$1',
                justifyContent: 'center',
              }}
            >
              {pokemonGenerations.map((gen) => (
                <PokemonGenerationTag
                  key={`pokemon-gen-tag-${gen}`}
                  css={{
                    marginBlock: '$1',
                    marginInlineEnd: '$1',
                    cursor: 'pointer',
                  }}
                  generation={gen}
                  focused={props.pokemonGenFilter.has(gen)}
                  onClick={() => props.onClickPokemonGenFilter(gen)}
                />
              ))}
            </FlexWrap>

            <Text
              variant="h3"
              color="black"
              css={{ width: '100%', textAlign: 'center' }}
            >
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
                <PokemonTypeTag
                  key={`pokemon-type-tag-${pokemonType}`}
                  css={{
                    marginBlock: '$1',
                    marginInlineEnd: '$1',
                    cursor: 'pointer',
                  }}
                  pokemonType={pokemonType}
                  focused={props.pokemonTypeFilter.has(pokemonType)}
                  onClick={() => props.onClickPokemonTypeFilter(pokemonType)}
                />
              ))}
            </FlexWrap>
          </Flex>
        </AnimatePresence>
      )}
    </RightPane>
  );
}
