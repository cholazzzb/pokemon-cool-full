import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import { BaseInput } from '@/presentational/components/Input';
import Navigator from '@/presentational/components/Navigator';
import { Center, styled } from '../panda-css/jsx';

type SearchBarDesktopProps = SearchInputProps & {
  show: boolean;
  onClickSearch: () => void;
};

const SearchBarDesktop: FunctionComponent<SearchBarDesktopProps> = (props) => {
  return (
    <ShowOnDesktopOnly>
      {props.show ? (
        <SearchInput
          onChangeSearch={props.onChangeSearch}
          onClickCloseSearch={props.onClickCloseSearch}
        />
      ) : (
        <Navigator.Item onClick={props.onClickSearch}>
          <SearchIcon>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ width: 15, height: 15 }}
            />
          </SearchIcon>
          <Navigator.ItemText>Search Pokemon</Navigator.ItemText>
        </Navigator.Item>
      )}
    </ShowOnDesktopOnly>
  );
};

export default SearchBarDesktop;

const ShowOnDesktopOnly = styled('div', {
  base: {
    display: 'none',
    md: {
      display: 'initial',
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
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '3px',
    backgroundColor: 'white',
    cursor: 'pointer',
    _hover: {
      backgroundColor: '#d9dadc',
    },
    flexDirection: 'row',
    height: '30px',
    justifyContent: 'start',
    padding: '10px',
    marginInline: '70px',
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

const SearchIcon = styled('span', {
  base: {
    backgroundColor: 'primary.100',
    color: 'white',
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
