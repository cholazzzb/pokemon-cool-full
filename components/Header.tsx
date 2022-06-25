/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderStyle = css`
  color: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const BackStyle = css`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const IconStyle = css`
  padding: 10px;
  width: 15px;
  height: 15px;
`;

const CaptionStyle = css`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 25px;
  font-weight: 700;
  padding: 10px;
  max-height: 30px;
  width: 70%;
`;

const ChildrenStyle = css`
  display: flex;
  justify-content: center;
  width: 15%;
  height:100%
  align-items:center;
`;

interface IHeaderProps {
  caption?: string;
  children?: any;
  onBack?: () => void;
}

const Header: FC<IHeaderProps> = (props) => {
  const { caption, children, onBack } = props;
  return (
    <div css={HeaderStyle}>
      <div css={BackStyle}>
        {onBack && (
          <span data-testid="header-backicon" css={IconStyle} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
        )}
      </div>
      <div data-testid="header-label" css={CaptionStyle}>
        {caption}
      </div>
      <div data-testid="header-children-label" css={ChildrenStyle}>
        {children}
      </div>
    </div>
  );
};

export default Header;
