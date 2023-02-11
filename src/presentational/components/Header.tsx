import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import { mainTheme } from '@/presentational/theme';

type HeaderProps = {
  caption?: string;
  onBack?: () => void;
};

const Header: FunctionComponent<HeaderProps> = ({
  caption,
  children,
  onBack,
}) => {
  return (
    <HeaderWrapper>
      <BackButton>
        {onBack && (
          <IconWrapper data-testid="header-backicon" onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconWrapper>
        )}
      </BackButton>
      <Caption data-testid="header-label">{caption}</Caption>
      <ChildrenWrapper data-testid="header-children-label">
        {children}
      </ChildrenWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = mainTheme.styled('div', {
  color: 'white',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
});
const BackButton = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '15%',
});

const IconWrapper = mainTheme.styled('span', {
  padding: '10px',
  width: '15px',
  height: '15px',
});

const Caption = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  color: 'black',
  fontSize: '25px',
  fontWeight: 700,
  padding: '10px',
  maxHeight: '30px',
  width: '70%',
  textTransform: 'capitalize',
});

const ChildrenWrapper = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '15%',
  height: '100%',
  alignItems: 'center',
});
