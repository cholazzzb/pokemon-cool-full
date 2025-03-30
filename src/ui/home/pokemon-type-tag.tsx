import { PokemonType } from '@/logic/pokemon/entity';
import Text from '@/shared-ui/component/text';
import { css, cx } from '@/shared-ui/panda-css/css';
import { Box } from '@/shared-ui/panda-css/jsx';
import { homePokemonTypeTag } from '@/shared-ui/panda-css/recipes';

type Props = {
  pokemonType: PokemonType;
  css?: ReturnType<typeof css>;
};
export function PokemonTypeTag(props: Props) {
  return (
    <Box
      className={cx(
        homePokemonTypeTag({ pokemonType: props.pokemonType }),
        props.css,
      )}
    >
      <Text textTransform="capitalize" variant="b5">
        {props.pokemonType}
      </Text>
    </Box>
  );
}

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
