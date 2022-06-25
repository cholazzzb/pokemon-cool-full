/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { FC } from "react";
import Alert from "@components/Alert";

const AlertContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IFailedAlertProps {
  iconColor: string;
  catchPokemon: () => void;
}

const FailedAlert: FC<IFailedAlertProps> = (props) => {
  const { iconColor, catchPokemon } = props;
  const TryAgainStyle = css`
    display: flex;
    justify-content: center;
    width: 100px;
    padding: 10px;
    border-radius: 20px;
    background-color: ${iconColor};
  `;

  return (
    <Alert headText="FAILED">
      <div css={AlertContainerStyle}>
        <div
          css={css`
            height: 100px;
          `}
        >
          Pokemon not catched
        </div>
        <div onClick={catchPokemon} css={TryAgainStyle}>
          Try Again
        </div>
      </div>
    </Alert>
  );
};

export default FailedAlert;
