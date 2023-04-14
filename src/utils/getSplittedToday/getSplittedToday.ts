import { SplittedToday } from 'types/utils/splittedToday.type';

export const getSplittedToday = (today: string): SplittedToday => {
  const splittedToday = today.split('.');

  return {
    day: +splittedToday[0],
    month: +splittedToday[1] - 1,
    year: +splittedToday[2],
  };
};
