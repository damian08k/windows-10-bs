import { DayName } from './dayName.enum';

export type DayElement = {
  id: string;
  name: DayName;
  dayNumber: number;
  isToday?: boolean;
  elementName: 'day';
};
