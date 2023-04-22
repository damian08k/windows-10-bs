import { SelectedDate } from 'types/store/calendar.type';

export const getSelectedDateAsString = ({ day, month, year }: SelectedDate) =>
  `${day}-${month}-${year}`;
