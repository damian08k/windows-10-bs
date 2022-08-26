import { SelectedDay } from 'types/store/calendar.type';

const changeSelectedDateToDayName = (selectedDay: SelectedDay): string => {
  const { selectedDay: day, selectedMonth: month, selectedYear: year } = selectedDay;

  const date = new Date(
    `${year}-${month < 10 ? `0${month + 1}` : month + 1}-${day < 10 ? `0${day}` : day}`,
  );

  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

  return dayName;
};

export default changeSelectedDateToDayName;
