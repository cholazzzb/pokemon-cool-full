import Image from 'next/image';
import { FunctionComponent } from 'react';

import { getSecondaryColorFromType } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';

type ImageProps = {
  type: string;
  size: number;
  image: string;
};

const PokeImage: FunctionComponent<ImageProps> = (props) => {
  const { type, size, image } = props;
  const bgColor = getSecondaryColorFromType(type);

  const ImageBackground = mainTheme.styled('div', {
    backgroundColor: bgColor,
    borderRadius: '9999px',
    width: `${size}px`,
    height: `${size}px`,
  });

  const ImageWrapper = mainTheme.styled('div', {
    position: 'relative',
    borderRadius: '9999px',
    width: `${size + 40}px`,
    height: `${size + 40}px`,
    transform: 'translateX(-20px) translateY(15px)',
    transformOrigin: 'bottom',
  });

  return (
    <ImageBackground>
      <ImageWrapper>
        <Image
          data-testid="pokemon-image"
          src={image}
          alt="pokemon"
          layout="fill"
        />
      </ImageWrapper>
    </ImageBackground>
  );
};

export default PokeImage;
