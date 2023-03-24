import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps } from 'react';

import Text from '@/presentational/components/Text';
import { mainTheme } from '@/presentational/theme';
import { numberToRoman } from '@/utils/number';
import { TagItem } from './Tag';

type PokemonGenerationTagProps = ComponentProps<
  typeof PokemonGenerationTagItem
> & {
  generation: number;
  onClickClose?: () => void;
};

export default function PokemonGenerationTag({
  generation,
  onClickClose,
  ...props
}: PokemonGenerationTagProps) {
  return (
    <PokemonGenerationTagItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      <Text
        variant="body1"
        color="white"
        css={{ textTransform: 'capitalize', marginInline: 4 }}
      >
        Gen {numberToRoman(generation)}
      </Text>
      {onClickClose && (
        <FontAwesomeIcon icon={faTimes} color="white" onClick={onClickClose} />
      )}
    </PokemonGenerationTagItem>
  );
}

const PokemonGenerationTagItem = mainTheme.styled(TagItem, {
  flexShrink: 0,
  backgroundColor: '$primary100',
  color: 'white',
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
  },
});
