import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { PokemonType } from '@/logic/pokemon/entity';
import { pokeImageURL } from '@/shared-logic/url';
import Text from '@/shared-ui/component/text';
import { css } from '@/shared-ui/panda-css/css';
import { Box, Flex } from '@/shared-ui/panda-css/jsx';
import { homePokemonCard } from '@/shared-ui/panda-css/recipes';
import { PokemonTypeTag } from './pokemon-type-tag';

type Props = {
  id: number;
  pokemonTypes: Array<PokemonType>;
  name: string;
};

export function PokemonCard({
  pokemonTypes,
  ...props
}: PropsWithChildren<Props>) {
  const classes = homePokemonCard({ pokemonType: pokemonTypes[0] });

  return (
    <Box className={classes.card}>
      <Text variant="h6" className={classes.text}>
        {`#${String(props.id).padStart(3, '0')}`}
      </Text>
      <span className={classes.imgBG}>
        <Image
          alt={`pokemon-image-${props.id}`}
          src={pokeImageURL.replace('{id}', `${props.id}`)}
          className={css({
            marginBlockStart: '-1x',
          })}
          width={115}
          height={115}
        />
      </span>
      <Text variant="s2" className={classes.text}>
        {`${props.name}`}
      </Text>

      <Flex>
        {pokemonTypes.map((pokemonType) => (
          <PokemonTypeTag key={pokemonType} pokemonType={pokemonType} />
        ))}
      </Flex>
    </Box>
  );
}

export function _UnusedToTriggerBuildCSS() {
  homePokemonCard({
    pokemonType: 'bug',
  });
  homePokemonCard({
    pokemonType: 'dark',
  });
  homePokemonCard({
    pokemonType: 'dragon',
  });
  homePokemonCard({
    pokemonType: 'electric',
  });
  homePokemonCard({
    pokemonType: 'fairy',
  });
  homePokemonCard({
    pokemonType: 'fighting',
  });
  homePokemonCard({
    pokemonType: 'fire',
  });
  homePokemonCard({
    pokemonType: 'flying',
  });
  homePokemonCard({
    pokemonType: 'ghost',
  });
  homePokemonCard({
    pokemonType: 'grass',
  });
  homePokemonCard({
    pokemonType: 'ground',
  });
  homePokemonCard({
    pokemonType: 'ice',
  });
  homePokemonCard({
    pokemonType: 'normal',
  });
  homePokemonCard({
    pokemonType: 'poison',
  });
  homePokemonCard({
    pokemonType: 'psychic',
  });
  homePokemonCard({
    pokemonType: 'rock',
  });
  homePokemonCard({
    pokemonType: 'steel',
  });
  homePokemonCard({
    pokemonType: 'water',
  });
}
