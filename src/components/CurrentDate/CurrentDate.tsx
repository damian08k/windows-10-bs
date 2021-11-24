import { Container } from './CurrentDate.styled';

const CurrentDate = () => {
  const newDate = new Date();
  const dateDay = newDate.getDate();
  const dateMonth = newDate.getMonth() + 1;
  const dateYear = newDate.getFullYear();

  const dateTime = `${dateYear}-${dateMonth}-${dateDay}`;
  const currentDate = `${dateDay}.${dateMonth}.${dateYear}`;

  return <Container dateTime={dateTime}>{currentDate}</Container>;
};

export default CurrentDate;
