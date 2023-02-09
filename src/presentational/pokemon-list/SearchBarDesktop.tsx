import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import { BaseInput } from '@/presentational/components/Input';
import { Center } from '@/presentational/components/Layout';
import Navigator from '@/presentational/components/Navigator';
import { mainTheme } from '@/presentational/theme';

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

const ShowOnDesktopOnly = mainTheme.styled('div', {
  display: 'none',
  '@md': {
    display: 'initial',
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

const SearchInputContainer = mainTheme.styled(Center, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '3px',
  backgroundColor: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#d9dadc',
  },
  flexDirection: 'row',
  height: '30px',
  justifyContent: 'start',
  padding: '10px',
  marginInline: '70px',
});

const CloseIconContainer = mainTheme.styled('button', {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '4px',
  border: '0px',
  marginInlineEnd: '4px',
});

const SearchIcon = mainTheme.styled('span', {
  backgroundColor: '$primary100',
  color: 'white',
  width: 30,
  height: 30,
  borderRadius: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
