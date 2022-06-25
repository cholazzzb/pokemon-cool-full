/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";

import { FC, useState } from "react";

import SuccessAlert from "./SuccessAlert";
import FailedAlert from "./FailedAlert";
import Image from "next/image";
import CatchingAlert from "./CatchingAlert";

const CatchPokemonStyle = css`
  position:absolute;
  right: 20px;
  top: 120px;
  width: 70px;
  height: 70px;
  border-radius: 9999px
  display:flex;
  justify-content:center
  align-items:center;
`;

const CatchAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
    transform: rotate(30deg);
  };
  40%, 43% {
    transform: translate3d(0, -20px, 0);
    transform: rotate(-30deg);
  };
  70% {
    transform: translate3d(0, -5px, 0);
  };
  90% {
    transform: translate3d(0,-4px,0);
  }
`;

interface ICatchPokemonProps {
  id: number;
  iconColor: string;
  pokemonName: string;
}

const CatchPokemon: FC<ICatchPokemonProps> = (props) => {
  const { id, iconColor, pokemonName } = props;
  const [catchStatus, setCatchStatus] = useState<null | string>(null);

  const catchPokemon = () => {
    setCatchStatus("CATCHING");
  };

  let Alert;
  switch (catchStatus) {
    case "SUCCESS":
      Alert = (
        <SuccessAlert
          id={id}
          pokemonName={pokemonName}
          color={iconColor}
          setCatchStatus={setCatchStatus}
        />
      );
      break;

    case "FAILED":
      Alert = <FailedAlert iconColor={iconColor} catchPokemon={catchPokemon} />;
      break;

    case "CATCHING":
      Alert = <CatchingAlert setCatchStatus={setCatchStatus} />;
      break;

    default:
      Alert = <div>Error</div>;
      break;
  }

  const CatchIconStyle = css`
    width: 70px;
    height: 70px;
    border-radius: 9999px;
    background-color: ${iconColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div css={CatchPokemonStyle}>
      <span css={CatchIconStyle} onClick={catchPokemon}>
        <span
          css={css`
            animation: ${CatchAnimation} 1s ease infinite;
          `}
        >
          <Image src="/pokeballSelected.svg" width={30} height={30} />
        </span>
        Catch
      </span>
      {catchStatus && Alert}
    </div>
  );
};

export default CatchPokemon;
