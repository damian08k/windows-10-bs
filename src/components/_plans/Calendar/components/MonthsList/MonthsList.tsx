import { useRef } from 'react';

import { Month } from './components/Month/Month';

import { useArrowFocus } from 'hooks/useArrowFocus';

import { useAppSelector } from 'store/hooks';

import getSplittedToday from 'utils/calendar/getSplittedToday';

import getMonthsNames from './helpers/getMonthsNames';

import classes from './MonthsList.module.css';

const MONTHS_IN_ROW = 4;

const MonthsList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { today, year } = useAppSelector(state => state.currentDate);
  const months = getMonthsNames();

  const { month: currentMonth, year: currentYear } = getSplittedToday(today);

  const initialFocus = months.findIndex(({ monthId }) => monthId === currentMonth);
  const [focus, setFocus] = useArrowFocus(
    months.length,
    containerRef,
    MONTHS_IN_ROW,
    year === currentYear ? initialFocus : 0,
  );

  return (
    <div className={classes.root} ref={containerRef}>
      {months.map((month, index) => (
        <Month
          key={month.monthId}
          month={month}
          setFocus={setFocus}
          index={index}
          isFocus={focus === index}
        />
      ))}
    </div>
  );
};
export default MonthsList;
