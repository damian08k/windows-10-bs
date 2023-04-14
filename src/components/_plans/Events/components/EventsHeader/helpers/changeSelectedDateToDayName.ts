import { SelectedDate } from 'types/store/calendar.type';

export const changeSelectedDateToDayName = (selectedDate: SelectedDate): string => {
  const { day, month, year } = selectedDate;

  const date = new Date(
    `${year}-${month < 10 ? `0${month + 1}` : month + 1}-${day < 10 ? `0${day}` : day}`,
  );

  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

  return dayName;
};
