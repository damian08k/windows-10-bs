import { Dispatch } from '@reduxjs/toolkit';

import { currentDateActions } from 'store/slices/currentDate.slice';

import { YearElement } from 'types/components/calendar/yearElement.type';

import betterAt from 'utils/betterAt';

const changeDatesOnDown = (
  isMonthsView: boolean,
  isYearsView: boolean,
  year: number,
  month: number,
  highlightedYears: YearElement[],
  dispatch: Dispatch,
) => {
  if (isMonthsView && !isYearsView) {
    dispatch(currentDateActions.updateYear(year + 1));
  } else if (!isMonthsView && !isYearsView) {
    dispatch(currentDateActions.updateMonthAndYear({ month: month + 1 }));
  } else if (isYearsView && highlightedYears.length) {
    const year = betterAt(highlightedYears, -1).year + 1;
    dispatch(currentDateActions.updateYear(year));
  }
};

export default changeDatesOnDown;
