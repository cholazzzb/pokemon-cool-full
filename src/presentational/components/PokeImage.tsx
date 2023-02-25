import Image from 'next/image';
import { FunctionComponent } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { createPokemonTypeColor } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';

type ImageProps = {
  type: string;
  size: number;
  image: string;
};

const PokeImage: FunctionComponent<ImageProps> = (props) => {
  const { type, size, image } = props;

  const ImageBackground = mainTheme.styled('div', {
    borderRadius: '9999px',
    width: `${size}px`,
    height: `${size}px`,
    variants: {
      pokemonType: createPokemonTypeColor(0.9),
    },
  });

  const ImageWrapper = mainTheme.styled('div', {
    position: 'relative',
    zIndex: '$pokeImage',
    borderRadius: '9999px',
    width: `${size + 40}px`,
    height: `${size + 40}px`,
    transform: 'translateX(-20px) translateY(15px)',
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
