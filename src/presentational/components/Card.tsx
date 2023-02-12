import { FunctionComponent } from 'react';
import { mainTheme } from '../theme';

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

const CardWrapper = mainTheme.styled('div', {
  textTransform: 'capitalize',
  padding: '10px 0px',
});

const CardHeader = mainTheme.styled('div', {
  fontSize: '25px',
  fontWeight: 900,
});

const CardBody = mainTheme.styled('div', {
  fontSize: '20px',
});
