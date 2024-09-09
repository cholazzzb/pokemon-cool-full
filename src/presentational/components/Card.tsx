import { FunctionComponent } from 'react';

import { styled } from '../panda-css/jsx';

type CardProps = {
  headText: string;
  bodyText: string;
};

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <CardWrapper>
      <CardHeader>{props.headText}</CardHeader>
      <CardBody>{props.bodyText}</CardBody>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled('div', {
  base: {
    textTransform: 'capitalize',
    padding: '10px 0px',
  },
});

const CardHeader = styled('div', {
  base: {
    fontSize: '25px',
    fontWeight: 900,
  },
});

const CardBody = styled('div', {
  base: {
    fontSize: '20px',
  },
});
