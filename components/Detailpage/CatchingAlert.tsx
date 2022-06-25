/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Image from "next/image";
import Alert from "@components/Alert";

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

interface ICatchintAlertProps {
  setCatchStatus: Dispatch<SetStateAction<null | string>>;
}

const CatchingAlert: FC<ICatchintAlertProps> = (props) => {
  const { setCatchStatus } = props;

  useEffect(() => {
    setTimeout(() => {
      const successRate = Math.random();
      successRate > 0.5 ? setCatchStatus("SUCCESS") : setCatchStatus("FAILED");
    }, 2000);
  }, []);

  const CatchIconStyle = css`
    width: 70px;
    height: 70px;
    border-radius: 9999px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Alert headText="Catching">
      <div>
        <span css={CatchIconStyle}>
          <span
            css={css`
              animation: ${CatchAnimation} 1s ease infinite;
            `}
          >
            <Image src="/pokeballSelected.svg" width={30} height={30} />
          </span>
        </span>
      </div>
    </Alert>
  );
};

export default CatchingAlert;
