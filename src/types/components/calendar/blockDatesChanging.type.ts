import { Dispatch } from '@reduxjs/toolkit';

import { YearElement } from './yearElement.type';

export type ChangingYearsConfig = {
  isMonthsView: boolean;
  isYearsView: boolean;
  year: number;
  month: number;
  highlightedYears: YearElement[];
  dispatch: Dispatch;
};

export type BlockDatesConfig = {
  highlightYear: number;
  lastVisibleYear: number;
  visibleYear: number;
  monthNumber: number;
  blockUp: boolean;
  blockDown: boolean;
};
