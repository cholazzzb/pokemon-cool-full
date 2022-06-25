/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

const PieContainerStyle = css`
  height: 150px;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PieBackgroundStyle = css`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
`;

const InnerCircleStyle = css`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 100%;
  top: 15px;
  left: 50% - 120px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5) inset;
  color: white;
`;

const ContentStyle = css`
  position: absolute;
  display: block;
  width: 120px;
  top: 30px;
  left: 0;
  text-align: center;
  font-size: 14px;
`;

interface IPieSliceProps {
  size: number;
  fullSize: number;
}

const PieSlice: FC<IPieSliceProps> = (props) => {
  const { size, fullSize } = props;

  const PieSliceStyle = css`
    background-color: #${Math.floor(Math.random() * 16777215).toString(16)};
    transform: rotate(${(size * 360) / fullSize}deg);
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    clip: rect(0px, 150px, 150px, 75px);
  `;

  const PieStyle = css`
    transition: all 1s;
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    clip: rect(0px, 75px, 150px, 0px);
  `;

  return (
    <div css={PieSliceStyle}>
      <div css={PieStyle}></div>
    </div>
  );
};

interface IPieChartProps {
  data: any[];
}

const PieChart: FC<IPieChartProps> = (props) => {
  return (
    <div css={PieContainerStyle}>
      <div css={PieBackgroundStyle}></div>
      {props.data.map((pokemon) => (
        <PieSlice key={pokemon.attributes.name} size={pokemon.attributes.length} fullSize={4} />
      ))}
      <div css={InnerCircleStyle}>
        <div css={ContentStyle}></div>
      </div>
    </div>
  );
};

export default PieChart;
