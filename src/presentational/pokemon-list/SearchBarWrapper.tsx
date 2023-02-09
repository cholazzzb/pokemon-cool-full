import { FunctionComponent, useState } from 'react';

import SearchBarDesktop from './SearchBarDesktop';
import SearchBarMobile from './SearchBarMobile';

type SearchBarWrapperProps = {
  onChangeSearch: (searchValue: string) => void;
};

const SearchBarWrapper: FunctionComponent<SearchBarWrapperProps> = (props) => {
  const [show, setShow] = useState(false);
  const onClickSearch = () => {
    setShow(true);
  };
  const onClickCloseSearch = () => {
    props.onChangeSearch('');
    setShow(false);
  };

  return (
    <>
      <SearchBarMobile
        show={show}
        onClickSearch={onClickSearch}
        onChangeSearch={props.onChangeSearch}
        onClickCloseSearch={onClickCloseSearch}
      />
      <SearchBarDesktop
        show={show}
        onClickSearch={onClickSearch}
        onChangeSearch={props.onChangeSearch}
        onClickCloseSearch={onClickCloseSearch}
      />
    </>
  );
};

export default SearchBarWrapper;
