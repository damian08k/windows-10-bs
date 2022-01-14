import { CurrentDate } from 'types/components/menu/menu.type';

const getCurrentDate = (): CurrentDate => {
  const newDate = new Date();
  const dateTime = newDate.toISOString().split('T')[0];
  const currentDateDMYFormat = newDate.toLocaleDateString();
  const currentDateNamesFormat = newDate
    .toLocaleDateString('en-AU', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .toLowerCase();

  return {
    dateTime,
    currentDateDMYFormat,
    currentDateNamesFormat,
  };
};

export default getCurrentDate;
