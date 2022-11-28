import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useState } from 'react';
import { BaseInput } from '../components/Input';
import { Center } from '../components/Layout';
import { mainTheme } from '../theme';

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
      {show && (
        <SearchInput
          onChangeSearch={props.onChangeSearch}
          onClickCloseSearch={onClickCloseSearch}
        />
      )}
      {!show && <SearchFloatingButton onClick={onClickSearch} />}
    </>
  );
};

export default SearchBarWrapper;

type SearchInputProps = {
  onChangeSearch: (searchValue: string) => void;
  onClickCloseSearch: () => void;
};
const SearchInput = (props: SearchInputProps) => {
  return (
    <Center>
      <BaseInput
        autoFocus
        type="text"
        placeholder="🔍 Search pokemon by name"
        onChange={(e) => props.onChangeSearch(e.target.value)}
      />
      <CloseIconContainer onClick={props.onClickCloseSearch}>
        <FontAwesomeIcon icon={faTimes} size="sm" />
      </CloseIconContainer>
    </Center>
  );
};

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

type SearchFloatingButtonProps = {
  onClick: () => void;
};
const SearchFloatingButton = (props: SearchFloatingButtonProps) => {
  return (
    <FloatingButton onClick={props.onClick}>
      <FontAwesomeIcon icon={faSearch} />
    </FloatingButton>
  );
};

const FloatingButton = mainTheme.styled('div', {
  position: 'absolute',
  bottom: '70px',
  right: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '50%',
  backgroundColor: '$primary100',
  color: 'white',
});
