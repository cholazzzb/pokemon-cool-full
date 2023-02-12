import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { mainTheme } from '@/presentational/theme';

type NavigateOverviewProps = {
  currentId: number;
};

const NavigateOverview: FunctionComponent<NavigateOverviewProps> = ({
  currentId,
}) => {
  return (
    <Container>
      <Link href={`/detailed/${currentId + 1}`}>
        <a style={{ textDecoration: 'none' }}>
          <Icon>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Icon>
        </a>
      </Link>
      {currentId > 1 && (
        <Link href={`/detailed/${currentId - 1}`}>
          <a style={{ textDecoration: 'none' }}>
            <Icon>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </Icon>
          </a>
        </Link>
      )}
    </Container>
  );
};

export default NavigateOverview;

const Container = mainTheme.styled('div', {
  position: 'absolute',
  top: '60%',
  display: 'flex',
  flexDirection: 'row-reverse',
  width: '100%',
  justifyContent: 'space-between',
});

const Icon = mainTheme.styled('span', {
  display: 'flex',
  width: '25px',
  height: '25px',
  padding: '20px',
  color: 'white',
});
