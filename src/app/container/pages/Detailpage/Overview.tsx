/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import getConfig from 'next/config';
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import PokeImage from '@/components/PokeImage';
import TypeChip from '@/components/TypeChip';
import { BaseName } from '@/domains/entity';
import { asPokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { getSecondaryColorFromType } from '@/utils/colorTheme';
import NavigateOverview from './NavigateOverview';
import CatchPokemon from './CatchPokemon';

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextName = styled.p`
  font-size: 30px;
  font-weight: 700;
  line-height: 1px;
  text-transform: capitalize;
  padding: 0px 20px 10px 20px;
`;

const TypesContainer = styled.div`
  display: flex;
  padding: 0px 20px 10px 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const TextId = styled.p`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const Container = styled.div`
  color: white;
`;

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
      <div
        css={css`
          position: relative;
        `}
      >
        <Information>
          <div>
            <TextName>{currentName}</TextName>
            <TypesContainer>
              {types.map((type) => {
                const pokemonType = asPokemonType(type.type.name);
                if (pokemonType === null) {
                  return <></>;
                }
                return (
                  <TypeChip
                    key={`information-pokemonn-type-${pokemonType}`}
                    type={pokemonType}
                  />
                );
              })}
            </TypesContainer>
          </div>
          <TextId>#{id}</TextId>
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
      </div>
      <CatchPokemon id={id} iconColor={seconColor} pokemonName={currentName} />
    </Container>
  );
};

export default Overview;
