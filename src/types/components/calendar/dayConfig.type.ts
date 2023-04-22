import { DayName } from './dayName.enum';

export type DayConfig = {
  id: string;
  name: DayName;
  dayNumber: number;
  month: number;
  year: number;
};
