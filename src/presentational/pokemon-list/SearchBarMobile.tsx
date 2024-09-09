import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import FloatingActionButton from '@/presentational/components/FloatingActionButton';
import { BaseInput } from '@/presentational/components/Input';
import { Center, styled } from '../panda-css/jsx';

type SearchBarMobileProps = SearchInputProps & {
  show: boolean;
  onClickSearch: () => void;
};

const SearchBarMobile: FunctionComponent<SearchBarMobileProps> = (props) => {
  return (
    <ShowOnMobileOnly>
      {props.show ? (
        <SearchInput
          onChangeSearch={props.onChangeSearch}
          onClickCloseSearch={props.onClickCloseSearch}
        />
      ) : (
        <SearchIconButton onClick={props.onClickSearch} />
      )}
    </ShowOnMobileOnly>
  );
};

export default SearchBarMobile;

const ShowOnMobileOnly = styled('div', {
  base: {
    md: {
      display: 'none',
    },
  },
});

type SearchInputProps = {
  onChangeSearch: (searchValue: string) => void;
  onClickCloseSearch: () => void;
};
const SearchInput = (props: SearchInputProps) => {
  return (
    <SearchInputContainer>
      <BaseInput
        autoFocus
        type="text"
        placeholder="🔍 Search pokemon by name"
        onChange={(e) => props.onChangeSearch(e.target.value)}
      />
      <CloseIconContainer onClick={props.onClickCloseSearch}>
        <FontAwesomeIcon icon={faTimes} style={{ width: 15, height: 15 }} />
      </CloseIconContainer>
    </SearchInputContainer>
  );
};

const SearchInputContainer = styled(Center, {
  base: {
    position: 'fixed',
    width: '100vw',
    left: 0,
    bottom: 50,
    zIndex: 'searchBar',
  },
});

const CloseIconContainer = styled('button', {
  base: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '30px',
    borderRadius: '4px',
    border: '0px',
    marginInlineEnd: '4px',
  },
});

type SearchIconButtonProps = {
  onClick: () => void;
};
const SearchIconButton: FunctionComponent<SearchIconButtonProps> = (props) => {
  return (
    <FloatingActionButton posIndex={1} size="lg" onClick={props.onClick}>
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </FloatingActionButton>
  );
};
