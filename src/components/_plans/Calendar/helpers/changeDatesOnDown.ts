import { Dispatch } from '@reduxjs/toolkit';

import { currentDateActions } from 'store/slices/currentDate.slice';

import {
  BlockDatesConfig,
  ChangingYearsConfig,
} from 'types/components/calendar/blockDatesChanging.type';
import { YearElement } from 'types/components/calendar/yearElement.type';

import { MAX_VISIBLE_YEAR, MAX_HIGHLIGHT_YEAR, LAST_VISIBLE_MAX_YEAR } from 'src/constants';

import betterAt from 'utils/betterAt';

import { blockDatesChanging } from './blockDatesChanging';

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

  const changeYearsConfig: ChangingYearsConfig = {
    isMonthsView,
    isYearsView,
    year,
    month,
    highlightedYears,
    dispatch,
  };

  const blockDatesConfig: BlockDatesConfig = {
    highlightYear: MAX_HIGHLIGHT_YEAR,
    lastVisibleYear: LAST_VISIBLE_MAX_YEAR,
    visibleYear: MAX_VISIBLE_YEAR,
    monthNumber: 10,
    blockUp: false,
    blockDown: true,
  };

  blockDatesChanging(changeYearsConfig, blockDatesConfig);
};

export default changeDatesOnDown;
