import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

import { Container } from './StyledComponents';

const TimeAndDate = () => {
  return (
    <Container>
      <Clock />
      <CurrentDate />
    </Container>
  );
};

export default TimeAndDate;
