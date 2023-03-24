import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';

import {
  PokemonType,
  pokemonTypes,
} from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeBaseColor } from '@/presentational/colorTheme';
import Text from '@/presentational/components/Text';
import TypeIcon from '@/presentational/components/TypeIcon';
import { mainTheme } from '@/presentational/theme';
import { TagItem } from './Tag';

type PokemonTypeTagProps = ComponentProps<typeof PokemonTypeTagItem> & {
  pokemonType: PokemonType;
  onClickClose?: () => void;
};

function PokemonTypeTag({
  pokemonType,
  onClickClose,
  ...props
}: PokemonTypeTagProps) {
  return (
    <PokemonTypeTagItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      pokemonType={pokemonType}
      {...props}
    >
      <TypeIcon type={pokemonType} />
      <Text
        variant="body1"
        color="white"
        css={{ textTransform: 'capitalize', marginInline: 4 }}
      >
        {pokemonType}
      </Text>
      {onClickClose && (
        <FontAwesomeIcon icon={faTimes} color="white" onClick={onClickClose} />
      )}
    </PokemonTypeTagItem>
  );
}

export default PokemonTypeTag;

const pokemonTypeBaseColor07 = createPokemonTypeBaseColor(0.7);
const pokemonTypeBaseColor08 = createPokemonTypeBaseColor(0.8);
const pokemonTypeBaseColor10 = createPokemonTypeBaseColor(1);

const pokemonTypeBackgroundColor = pokemonTypes.reduce(
  (acc, pokemonType) => ({
    ...acc,
    [pokemonType]: {
      backgroundColor: pokemonTypeBaseColor08[pokemonType],
      '&:hover': {
        backgroundColor: pokemonTypeBaseColor07[pokemonType],
      },
    },
  }),
  {},
) as Record<
  PokemonType,
  {
    backgroundColor: string;
    '&:hover': {
      backgroundColor: string;
    };
  }
>;

const PokemonTypeTagItem = mainTheme.styled(TagItem, {
  variants: {
    focused: {
      true: {
        border: '4px solid',
        borderColor: '$neutral100',
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
    pokemonType: pokemonTypeBackgroundColor,
  },

  compoundVariants: pokemonTypes.map((pokemonType) => ({
    pokemonType,
    focused: true,
    css: {
      backgroundColor: pokemonTypeBaseColor08[pokemonType],
      '&:hover': {
        backgroundColor: pokemonTypeBaseColor07[pokemonType],
      },
      border: '4px solid',
      borderColor: pokemonTypeBaseColor10[pokemonType],
    },
  })),
});
