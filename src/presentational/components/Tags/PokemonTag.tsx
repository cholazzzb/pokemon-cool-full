import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';

import { createPokemonTypeColor } from '@/presentational/colorTheme';
import Text from '@/presentational/components/Text';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';
import { TagItem } from './Tag';

type PokemonTagProps = ComponentProps<typeof PokemonTagItem> & {
  onClose?: () => void;
};

function PokemonTag(props: PokemonTagProps) {
  const pokemonType =
    typeof props.pokemonType === 'string' ? props.pokemonType : 'normal';

  return (
    <PokemonTagItem pokemonType={props.pokemonType} {...props}>
      <TypeIcon type={pokemonType} />
      <Text
        variant="body1"
        color="white"
        css={{ textTransform: 'capitalize', marginInline: 4 }}
      >
        {pokemonType}
      </Text>
      {props.onClose && (
        <FontAwesomeIcon icon={faTimes} color="white" onClick={props.onClose} />
      )}
    </PokemonTagItem>
  );
}

export default PokemonTag;

const PokemonTagItem = mainTheme.styled(TagItem, {
  variants: {
    focused: {
      true: {
        border: '4px solid',
        borderColor: '$tertiary100',
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
    },
    onClose: {
      true: {
        justifyContent: 'space-between',
      },
    },
    pokemonType: createPokemonTypeColor(0.9),
  },
});
