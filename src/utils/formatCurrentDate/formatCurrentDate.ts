import { FormattedCurrentDate } from 'types/components/taskbar/formattedCurrentDate.type';

export const formatCurrentDate = (currentDate: string): FormattedCurrentDate => {
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
