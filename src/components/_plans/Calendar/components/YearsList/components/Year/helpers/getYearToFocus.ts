import { YearElement } from 'types/components/calendar/yearElement.type';
import { YearType } from 'types/components/calendar/yearType.type';

const { HIGHLIGHTED } = YearType;

export const getYearToFocus = (listOfYears: YearElement[], focusedYear: YearElement): number => {
  const dayToFocus = listOfYears.findIndex(
    ({ type, year }) => type === HIGHLIGHTED && year === focusedYear?.year,
  );

  return dayToFocus;
};
