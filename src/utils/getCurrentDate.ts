import { CurrentDate } from 'types/components/menu/menu.type';

const getCurrentDate = (): CurrentDate => {
  const newDate = new Date();
  const dateDay = newDate.getDate();
  const dateDayName = newDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const dateMonth = newDate.getMonth() + 1;
  const dateMonthName = newDate.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
  const dateYear = newDate.getFullYear();

  const dateTime = `${dateYear}-${dateMonth}-${dateDay}`;
  const currentDateDMYFormat = `${dateDay}.${dateMonth}.${dateYear}`;
  const currentDateNamesFormat = `${dateDayName}, ${dateDay} ${dateMonthName} ${dateYear}`;

  return {
    dateTime,
    currentDateDMYFormat,
    currentDateNamesFormat,
  };
};

export default getCurrentDate;
