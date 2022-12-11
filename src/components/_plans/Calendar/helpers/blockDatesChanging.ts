import { calendarActions } from 'store/slices/calendar.slice';

import {
  BlockDatesConfig,
  ChangingYearsConfig,
} from 'types/components/calendar/blockDatesChanging.type';
import { YearType } from 'types/components/calendar/yearType.type';

const { HIGHLIGHTED } = YearType;

export const blockDatesChanging = (
  changingYearsConfig: ChangingYearsConfig,
  blockDatesConfig: BlockDatesConfig,
): void => {
  const { isMonthsView, isYearsView, year, month, highlightedYears, dispatch } =
    changingYearsConfig;
  const { highlightYear, lastVisibleYear, visibleYear, monthNumber, blockUp, blockDown } =
    blockDatesConfig;

  const isYearHiglighed = Boolean(
    highlightedYears.find(({ year: y, type }) => y === highlightYear && type === HIGHLIGHTED),
  );

  if (
    (isYearsView && isYearHiglighed) ||
    (isMonthsView && year === lastVisibleYear) ||
    (!isMonthsView && !isYearsView && year === visibleYear && month === monthNumber)
  ) {
    dispatch(
      calendarActions.blockYearsListChanging({
        isBlockUp: blockUp,
        isBlockDown: blockDown,
      }),
    );

    return;
  }

  dispatch(
    calendarActions.blockYearsListChanging({
      isBlockDown: false,
      isBlockUp: false,
    }),
  );
};
