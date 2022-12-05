import { Dispatch } from '@reduxjs/toolkit';

import { currentDateActions } from 'store/slices/currentDate.slice';

import {
  BlockDatesConfig,
  ChangingYearsConfig,
} from 'types/components/calendar/blockDatesChanging.type';
import { YearElement } from 'types/components/calendar/yearElement.type';

import { LAST_VISIBLE_MIN_YEAR, MIN_HIGHLIGHT_YEAR, MIN_VISIBLE_YEAR } from 'src/constants';

import { blockDatesChanging } from './blockDatesChanging';

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

  const changeYearsConfig: ChangingYearsConfig = {
    isMonthsView,
    isYearsView,
    year,
    month,
    highlightedYears,
    dispatch,
  };

  const blockDatesConfig: BlockDatesConfig = {
    highlightYear: MIN_HIGHLIGHT_YEAR,
    lastVisibleYear: LAST_VISIBLE_MIN_YEAR,
    visibleYear: MIN_VISIBLE_YEAR,
    monthNumber: 1,
    blockUp: true,
    blockDown: false,
  };

  blockDatesChanging(changeYearsConfig, blockDatesConfig);
};

export default changeDatesOnUp;
