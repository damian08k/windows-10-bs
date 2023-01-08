import { CALENDAR_WEEK_DAYS } from 'src/constants';

export const getWeekDays = (): string[] => {
  const baseMondayDay = new Date(Date.UTC(2022, 0, 31)); // Monday date
  const weekDays = [];

  for (let i = 0; i < CALENDAR_WEEK_DAYS; i++) {
    weekDays.push(baseMondayDay.toLocaleDateString('en-US', { weekday: 'short' }));
    baseMondayDay.setDate(baseMondayDay.getDate() + 1);
  }

  return weekDays;
};
