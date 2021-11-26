import { FC } from 'react';

import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

import { Container } from './TimeAndDate.styled';

const TimeAndDate: FC = () => {
  return (
    <Container>
      <Clock />
      <CurrentDate />
    </Container>
  );
};

export default TimeAndDate;
