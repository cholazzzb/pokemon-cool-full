/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';

const TabBodyStyle = css`
  overflow: auto;
  padding: 10px;
`;

const TextContainerStyle = css`
  display: flex;
  align-items: center;
  height: 30px;
`;

const LabelStyle = css`
  color: gray;
  width: 30%;
`;

const DataStyle = css`
  text-transform: capitalize;
`;

type TabAboutProps = {
  height: number;
  weight: number;
  abilities: Array<{ ability: Omit<BaseName, 'id'> }>;
};

const TabAbout: FunctionComponent<TabAboutProps> = ({
  height,
  weight,
  abilities,
}) => {
  return (
    <div css={TabBodyStyle}>
      <div css={TextContainerStyle}>
        <p css={LabelStyle}>Height</p>
        {height}
      </div>
      <div css={TextContainerStyle}>
        <p css={LabelStyle}>Weight</p>
        {weight}
      </div>
      <div css={TextContainerStyle}>
        <p css={LabelStyle}> Abilities</p>
        <p css={DataStyle}>
          {abilities
            .map(
              (ability: { [key: string]: { [key: string]: string } }) =>
                `${ability.ability.name}`,
            )
            .join(', ')}
          .
        </p>
      </div>
    </div>
  );
};

export default TabAbout;
