import { PokemonType } from '@/logic/pokemon/entity';
import { Show } from '@/shared-ui/component/flow';
import Text from '@/shared-ui/component/text';
import { css, cva, cx } from '@/shared-ui/panda-css/css';
import { Box, styled } from '@/shared-ui/panda-css/jsx';
import { homePokemonTypeTag } from '@/shared-ui/panda-css/recipes';

type Props = {
  pokemonType: PokemonType;
  onClick?: () => void;
  onClose?: () => void;
  css?: ReturnType<typeof css>;
};
export function PokemonTypeTagChip(props: Props) {
  return (
    <Box
      className={cx(
        homePokemonTypeTag({
          pokemonType: props.pokemonType,
          withClose: !!props.onClose,
        }),
        props.css,
      )}
      onClick={props.onClick}
    >
      <Text textTransform="capitalize" variant="b5">
        {props.pokemonType}
      </Text>

      <Show when={!!props.onClose}>
        <CloseButton onClick={props.onClose}>x</CloseButton>
      </Show>
    </Box>
  );
}

const CloseButton = styled(
  'button',
  cva({
    base: {
      // cursor: 'pointer',
    },
  }),
);

export function _UnusedToTriggerBuildCSS() {
  homePokemonTypeTag({
    pokemonType: 'bug',
  });
  homePokemonTypeTag({
    pokemonType: 'dark',
  });
  homePokemonTypeTag({
    pokemonType: 'dragon',
  });
  homePokemonTypeTag({
    pokemonType: 'electric',
  });
  homePokemonTypeTag({
    pokemonType: 'fairy',
  });
  homePokemonTypeTag({
    pokemonType: 'fighting',
  });
  homePokemonTypeTag({
    pokemonType: 'fire',
  });
  homePokemonTypeTag({
    pokemonType: 'flying',
  });
  homePokemonTypeTag({
    pokemonType: 'ghost',
  });
  homePokemonTypeTag({
    pokemonType: 'grass',
  });
  homePokemonTypeTag({
    pokemonType: 'ground',
  });
  homePokemonTypeTag({
    pokemonType: 'ice',
  });
  homePokemonTypeTag({
    pokemonType: 'normal',
  });
  homePokemonTypeTag({
    pokemonType: 'poison',
  });
  homePokemonTypeTag({
    pokemonType: 'psychic',
  });
  homePokemonTypeTag({
    pokemonType: 'rock',
  });
  homePokemonTypeTag({
    pokemonType: 'steel',
  });
  homePokemonTypeTag({
    pokemonType: 'water',
  });
}
