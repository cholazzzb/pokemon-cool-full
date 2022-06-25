/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Dispatch, SetStateAction } from "react";

const NavigateOverviewStyle = css`
  position: absolute;
  top: 60%;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const IconStyle = css`
  display:flex;
  width: 25px;
  height: 25px;
  padding: 20px;
`;

interface INavigateOverviewProps {
  currentId: number;
  setCurrentId: Dispatch<SetStateAction<number>>;
}

const NavigateOverview: FC<INavigateOverviewProps> = (props) => {
  const { currentId, setCurrentId } = props;
  const prevPokemon = () => {
    setCurrentId(currentId - 1);
  };

  const nextPokemon = () => {
    setCurrentId(currentId + 1);
  };

  return (
    <div css={NavigateOverviewStyle}>
      {currentId > 1 ? (
        <span onClick={prevPokemon} css={IconStyle}>
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </span>
      ) : (
        <span></span>
      )}
      <span onClick={nextPokemon} css={IconStyle}>
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </span>
    </div>
  );
};

export default NavigateOverview;
