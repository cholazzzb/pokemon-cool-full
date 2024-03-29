import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react';

import { mainTheme } from '@/presentational/theme';
import { Show } from './Show';

type HeaderProps = {
  caption?: string;
  onClickBack?: () => void;
  onClickBackLink?: string;
};

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  caption,
  children,
  onClickBack,
  onClickBackLink,
}) => {
  return (
    <HeaderWrapper>
      <BackButton>
        {onClickBack && (
          <IconWrapper
            data-testid="header-backicon-button"
            onClick={onClickBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} color="black" />
          </IconWrapper>
        )}
        {onClickBackLink && (
          <Link href={onClickBackLink}>
            <IconWrapper data-testid="header-backicon-link">
              <FontAwesomeIcon icon={faChevronLeft} color="black" />
            </IconWrapper>
          </Link>
        )}
      </BackButton>
      <Caption data-testid="header-label">{caption}</Caption>
      <Show when={!!children}>
        <ChildrenWrapper data-testid="header-children-label">
          {children}
        </ChildrenWrapper>
      </Show>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = mainTheme.styled('div', {
  display: 'flex',
  height: '50px',
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
  display: 'flex',
  alignItems: 'center',
});

const Caption = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  color: 'black',
  fontSize: '25px',
  fontWeight: 700,
  padding: '10px',
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
