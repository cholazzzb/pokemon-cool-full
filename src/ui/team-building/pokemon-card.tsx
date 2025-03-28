import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { PokemonType } from '@/logic/pokemon/entity';
import { pokeImageURL } from '@/shared-logic/url';
import Text from '@/shared-ui/component/text';
import { css } from '@/shared-ui/panda-css/css';
import { Box, Flex } from '@/shared-ui/panda-css/jsx';
import { teamBuildingPokemonCard } from '@/shared-ui/panda-css/recipes';
import { PokemonTypeTag } from '../home/pokemon-type-tag';

type Props = {
  id: number;
  pokemonTypes: Array<PokemonType>;
  name: string;
};
export function PokemonCard({
  pokemonTypes,
  ...props
}: PropsWithChildren<Props>) {
  const classes = teamBuildingPokemonCard({
    pokemonType: pokemonTypes[0],
  });

  return (
    <Box className={classes.card}>
      <Text variant="h5" className={classes.text}>
        {`#${String(props.id).padStart(3, '0')}`}
      </Text>
      <span className={classes.imgBG}>
        <Image
          alt={`pokemon-image-${props.id}`}
          src={pokeImageURL.replace('{id}', `${props.id}`)}
          className={css({
            marginBlockStart: '-1x',
          })}
          width={100}
          height={100}
        />
      </span>
      <Text variant="s1" className={classes.text}>
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
  teamBuildingPokemonCard({
    pokemonType: 'bug',
  });
  teamBuildingPokemonCard({
    pokemonType: 'dark',
  });
  teamBuildingPokemonCard({
    pokemonType: 'dragon',
  });
  teamBuildingPokemonCard({
    pokemonType: 'electric',
  });
  teamBuildingPokemonCard({
    pokemonType: 'fairy',
  });
  teamBuildingPokemonCard({
    pokemonType: 'fighting',
  });
  teamBuildingPokemonCard({
    pokemonType: 'fire',
  });
  teamBuildingPokemonCard({
    pokemonType: 'flying',
  });
  teamBuildingPokemonCard({
    pokemonType: 'ghost',
  });
  teamBuildingPokemonCard({
    pokemonType: 'grass',
  });
  teamBuildingPokemonCard({
    pokemonType: 'ground',
  });
  teamBuildingPokemonCard({
    pokemonType: 'ice',
  });
  teamBuildingPokemonCard({
    pokemonType: 'normal',
  });
  teamBuildingPokemonCard({
    pokemonType: 'poison',
  });
  teamBuildingPokemonCard({
    pokemonType: 'psychic',
  });
  teamBuildingPokemonCard({
    pokemonType: 'rock',
  });
  teamBuildingPokemonCard({
    pokemonType: 'steel',
  });
  teamBuildingPokemonCard({
    pokemonType: 'water',
  });
}
