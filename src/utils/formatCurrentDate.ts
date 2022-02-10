import { CurrentDate } from 'types/components/menu/menu.type';

const formatCurrentDate = (currentDate: string): CurrentDate => {
  const dateTime = currentDate.split('.').reverse().join('-');
  const currentDateDMYFormat = currentDate;
  const currentDateNamesFormat = new Date(dateTime)
    .toLocaleDateString('en-AU', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toLowerCase();

  return { dateTime, currentDateDMYFormat, currentDateNamesFormat };
};

export default formatCurrentDate;
