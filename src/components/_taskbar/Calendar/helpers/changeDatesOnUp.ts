import { Dispatch } from '@reduxjs/toolkit';

import { currentDateActions } from 'store/slices/currentDate.slice';

import { YearElement } from 'types/components/calendar/yearElement.type';

const changeDatesOnUp = (
  isMonthsView: boolean,
  isYearsView: boolean,
  year: number,
  month: number,
  highlightedYears: YearElement[],
  dispatch: Dispatch,
): void => {
  if (isMonthsView && !isYearsView) {
    dispatch(currentDateActions.updateYear(year - 1));
  } else if (!isMonthsView && !isYearsView) {
    dispatch(currentDateActions.updateMonthAndYear({ month: month - 1 }));
  } else if (isYearsView && highlightedYears.length) {
    const year = highlightedYears[0].year - 1;
    dispatch(currentDateActions.updateYear(year));
  }
};

export default changeDatesOnUp;
