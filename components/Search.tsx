/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchContainerStyle = css`
  display: flex;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 5px;
  margin-bottom: 10px;
  color: gray;
  font-size: 15px;
`;

const IconStyle = css`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const Search = () => {
  const [open, setOpen] = useState(false);
  return (
    <div css={SearchContainerStyle}>
      <span css={IconStyle}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      Search
    </div>
  );
};

export default Search;
