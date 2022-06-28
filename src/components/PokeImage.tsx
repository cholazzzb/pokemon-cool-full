/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Image from 'next/image';
import { FC } from 'react';
import { getSecondaryColorFromType } from '../../utils/colorTheme';

interface ImageProps {
  type: string;
  size: number;
  image: string;
}

const PokeImage: FC<ImageProps> = (props) => {
  const { type, size, image } = props;
  const bgColor = getSecondaryColorFromType(type);

  const ImageBackgroundStyle = css`
    background-color: ${bgColor};
    border-radius: 9999px;
    width: ${size}px;
    height: ${size}px;
  `;

  const ImageStyle = css`
    position: relative;
    border-radius: 9999px;
    width: ${size + 40}px;
    height: ${size + 40}px;
    transform: translateX(-20px) translateY(15px);
    transform-origin: bottom;
  `;

  return (
    <div css={ImageBackgroundStyle}>
      <div css={ImageStyle}>
        <Image
          data-testid="pokemon-image"
          src={image}
          alt="pokemon"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PokeImage;
