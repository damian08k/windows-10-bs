import { CurrentDate } from 'types/components/menu/menu.type';

const formatCurrentDate = (currentDate: string): CurrentDate => {
  console.log(currentDate);
  //   const dateTime = today.toISOString().split('T')[0];
  //   const currentDateDMYFormat = newDate.toLocaleDateString();

  //   return {
  //     dateTime,
  //     currentDateDMYFormat,
  //     currentDateNamesFormat,
  //   };

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
