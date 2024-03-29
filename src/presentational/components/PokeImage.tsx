import Image from 'next/image';
import { FunctionComponent } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeBgColor } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';

type ImageProps = {
  type: string;
  size: number;
  image: string;
  posX?: number;
  posY?: number;
};

const PokeImage: FunctionComponent<ImageProps> = (props) => {
  const { type, size, image, posX = -20, posY = 15 } = props;

  const ImageBackground = mainTheme.styled('div', {
    borderRadius: '9999px',
    width: `${size}px`,
    height: `${size}px`,
    variants: {
      pokemonType: createPokemonTypeBgColor(0.9),
    },
  });

  const ImageWrapper = mainTheme.styled('div', {
    position: 'relative',
    zIndex: '$pokeImage',
    borderRadius: '9999px',
    width: `${size + 40}px`,
    height: `${size + 40}px`,
    transform: `translateX(${posX}px) translateY(${posY}px)`,
    transformOrigin: 'bottom',
  });

  return (
    <ImageBackground pokemonType={type as PokemonType}>
      <ImageWrapper>
        <Image
          data-testid="pokemon-image"
          src={image}
          alt="pokemon"
          width={size + 40}
          height={size + 40}
        />
      </ImageWrapper>
    </ImageBackground>
  );
};

export default PokeImage;
