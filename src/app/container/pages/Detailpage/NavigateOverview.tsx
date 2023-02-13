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
        <Icon>
          <FontAwesomeIcon
            style={{ width: 25, height: 25 }}
            icon={faChevronCircleRight}
            color="white"
          />
        </Icon>
      </Link>
      {currentId > 1 && (
        <Link href={`/detailed/${currentId - 1}`}>
          <Icon>
            <FontAwesomeIcon
              style={{ width: 25, height: 25 }}
              icon={faChevronCircleLeft}
              color="white"
            />
          </Icon>
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
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px',
  height: '25px',
  padding: '20px',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});
