/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC, Fragment, useState } from "react";
import Header from "./Header";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OverlayStyle = css`
  z-index: 50;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseIconStyle = css`
  display: flex;
  width: 25px;
  height: 25px;
  color: black;
`;

const AlertBodyStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface IAlertProps {
  headText: string;
  children: any;
}

const Alert: FC<IAlertProps> = (props) => {
  const { headText } = props;
  const [show, setShow] = useState<boolean>(true);

  const onClose = () => {
    setShow(false);
  };

  const AlertStyle = css`
    color: black;
    z-index: 50;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0%;
    height: 60%;
    width: 100%;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  `;

  if (!show) return <Fragment></Fragment>;

  return (
    <div css={OverlayStyle}>
      <div css={AlertStyle}>
        <Header caption={headText}>
          <span
            data-testid="alert-close-button"
            css={CloseIconStyle}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </Header>
        <div css={AlertBodyStyle}>{props.children}</div>
      </div>
    </div>
  );
};

export default Alert;
