import getConfig from 'next/config';
import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import { asPokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import Link from 'next/link';
import { getSecondaryColorFromType } from 'src/presentational/colorTheme';
import PokeImage from 'src/presentational/components/PokeImage';
import TypeChip from 'src/presentational/components/TypeChip';
import { mainTheme } from 'src/presentational/theme';
import CatchPokemon from './CatchPokemon';
import NavigateOverview from './NavigateOverview';

type OverviewProps = {
  id: number;
  currentName: string;
  types: Array<{ type: BaseName }>;
};

const Overview: FunctionComponent<OverviewProps> = ({
  id,
  currentName,
  types,
}) => {
  const seconColor = getSecondaryColorFromType(types[0].type.name);

  const { publicRuntimeConfig } = getConfig();

  return (
    <Container>
      <RelativePosition>
        <Information>
          <TextName>{currentName}</TextName>
          <TextId>#{id}</TextId>
          <TypesContainer>
            {types.map((type) => {
              const pokemonType = asPokemonType(type.type.name);
              if (pokemonType === null) {
                return <></>;
              }
              return (
                <Link
                  key={`information-pokemonn-type-${pokemonType}`}
                  href={`/types/${type.type.id}`}
                >
                  <TypeChip type={pokemonType} />
                </Link>
              );
            })}
          </TypesContainer>
        </Information>
        <ImageContainer>
          <PokeImage
            type={types[0].type.name}
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

const Information = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
});

const TextName = mainTheme.styled('p', {
  width: '100%',
  fontSize: '30px',
  fontWeight: '700',
  lineHeight: '30px',
  textTransform: 'capitalize',
  padding: '0px 20px 10px 20px',
});

const TypesContainer = mainTheme.styled('div', {
  display: 'flex',
  width: '100%',
  padding: '0px 20px 10px 20px',
});

const ImageContainer = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '200px',
});

const TextId = mainTheme.styled('p', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const Container = mainTheme.styled('div', {
  color: 'white',
});

const RelativePosition = mainTheme.styled('div', {
  position: 'relative',
});
