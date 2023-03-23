import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeColor } from '@/presentational/colorTheme';
import Text from '@/presentational/components/Text';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';
import { TagItem } from './Tag';

type PokemonTypeTagProps = ComponentProps<typeof PokemonTypeTagItem> & {
  pokemonType: PokemonType;
  onClickClose?: () => void;
};

function PokemonTypeTag({ onClickClose, ...props }: PokemonTypeTagProps) {
  return (
    <PokemonTypeTagItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      <TypeIcon type={props.pokemonType} />
      <Text
        variant="body1"
        color="white"
        css={{ textTransform: 'capitalize', marginInline: 4 }}
      >
        {props.pokemonType}
      </Text>
      {onClickClose && (
        <FontAwesomeIcon icon={faTimes} color="white" onClick={onClickClose} />
      )}
    </PokemonTypeTagItem>
  );
}

export default PokemonTypeTag;

const PokemonTypeTagItem = mainTheme.styled(TagItem, {
  variants: {
    focused: {
      true: {
        border: '4px solid',
        borderColor: '#b3b3cc',
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        cursor: 'not-allowed',
      },
    },
    withClose: {
      true: {
        justifyContent: 'space-between',
      },
    },
    pokemonType: createPokemonTypeColor(0.9),
  },
});
