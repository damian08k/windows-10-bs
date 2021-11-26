import { FC } from 'react';

import getCurrentDate from 'utils/getCurrentDate';

import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

import { Container } from './TimeAndDate.styled';

const TimeAndDate: FC = () => {
  const { currentDateNamesFormat } = getCurrentDate();

  return (
    <Container data-title={currentDateNamesFormat}>
      <Clock />
      <CurrentDate />
    </Container>
  );
};

export default TimeAndDate;
