import { FC, useRef } from 'react';

import { useElementFocus } from 'hooks/useElementFocus';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import { MonthName } from 'types/components/calendar/monthName.type';
import { FocusConfig } from 'types/hooks/focusConfig.type';

import { getSplittedToday } from 'utils/getSplittedToday';
import { mergeClasses } from 'utils/mergeClasses';

import classes from './Month.module.css';

type Props = {
  month: MonthName;
  focusConfig: FocusConfig;
};

export const Month: FC<Props> = ({ month, focusConfig }) => {
  const { isFocus } = focusConfig;
  const { monthId, monthName } = month;

  const monthRef = useRef<HTMLButtonElement>(null);

  const { today, year } = useAppSelector(state => state.currentDate);
  const dispatch = useAppDispatch();

  const handleFocusMonth = useElementFocus(focusConfig, monthRef);

  const { month: currentMonth, year: currentYear } = getSplittedToday(today);

  const handleOpenCalendar = (monthId: number) => {
    if (monthId > 0 && monthId < 11) {
      dispatch(
        calendarActions.blockYearsListChanging({
          isBlockDown: false,
          isBlockUp: false,
        }),
      );
    }

    dispatch(currentDateActions.updateMonthAndYear({ month: monthId, year }));
    dispatch(calendarActions.setIsMonthsView(false));
  };

  return (
    <button
      ref={monthRef}
      className={mergeClasses(classes.root, {
        [classes.currentMonth]: monthId === currentMonth && year === currentYear,
      })}
      onClick={() => handleOpenCalendar(monthId)}
      onKeyDown={handleFocusMonth}
      tabIndex={isFocus ? 0 : -1}
      aria-label={`Select month ${monthName}`}
    >
      {monthName}
    </button>
  );
};
