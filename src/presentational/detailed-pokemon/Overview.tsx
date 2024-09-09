import getConfig from 'next/config';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import { asPokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { getSecondaryColorFromType } from '@/presentational/colorTheme';
import PokeImage from '@/presentational/components/PokeImage';
import PokemonTag from '@/presentational/components/Tags/PokemonTypeTag';
import Text from '@/presentational/components/Text';
import { styled } from '../panda-css/jsx';
import CatchPokemon from './CatchPokemon';
import NavigateOverview from './NavigateOverview';

type OverviewProps = {
  id: number;
  currentName: string;
  types: GetPokemonDetailByIdQuery['about'][0]['types'];
};

const Overview: FunctionComponent<OverviewProps> = ({
  id,
  currentName,
  types,
}) => {
  const pokemonMainType = types[0]?.type?.name ?? 'normal';
  const seconColor = getSecondaryColorFromType(pokemonMainType);

  const { publicRuntimeConfig } = getConfig();

  return (
    <Container>
      <RelativePosition>
        <Information>
          <TextName variant="h1">{`#${id} ${currentName}`} </TextName>
          <TypesContainer>
            {types.map((type) => {
              const pokemonType = asPokemonType(type?.type?.name ?? '');
              if (pokemonType === null) {
                return <></>;
              }
              return (
                <Link
                  key={`information-pokemon-type-${pokemonType}`}
                  href={`/types/${type?.type?.id ?? 1}`}
                >
                  <PokemonTag
                    pokemonType={pokemonType}
                    css={{ marginInlineEnd: '$2' }}
                  />
                </Link>
              );
            })}
          </TypesContainer>
        </Information>
        <ImageContainer>
          <PokeImage
            type={pokemonMainType}
            image={publicRuntimeConfig.pokemonImageUrl.replace(
              '{id}',
              id.toString(),
            )}
            size={200}
          />
        </ImageContainer>
        <NavigateOverview currentId={id} />
      </RelativePosition>
      <CatchPokemon id={id} iconColor={seconColor} pokemonName={currentName} />
    </Container>
  );
};

export default Overview;

const Information = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
});

const TextName = styled(Text, {
  base: {
    width: '100%',
    textTransform: 'capitalize',
    padding: '0px 20px 10px 20px',
  },
});

const TypesContainer = styled('div', {
  base: {
    display: 'flex',
    width: '100%',
    padding: '0px 20px 10px 20px',
  },
});

const ImageContainer = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    height: '200px',
  },
});

const Container = styled('div', {
  base: {
    color: 'white',
  },
});

const RelativePosition = styled('div', {
  base: {
    position: 'relative',
  },
});
