import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import getSplittedToday from 'utils/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import getMonthsNames from './helpers/getMonthsNames';

import classes from './MonthsList.module.css';

const MonthsList = () => {
  const { today, year } = useAppSelector(state => state.currentDate);
  const months = getMonthsNames();
  const dispatch = useAppDispatch();

  const { year: currentYear, month: currentMonth } = getSplittedToday(today);

  const handleOpenCalendar = (monthId: number) => {
    dispatch(currentDateActions.updateMonthAndYear({ month: monthId, year }));
    dispatch(calendarActions.setIsMonthsView(false));
  };

  return (
    <div className={classes.root}>
      {months.map(({ monthName, monthId }) => (
        <div
          key={monthName}
          className={mergeClasses(classes.month, {
            [classes.currentMonth]: monthId === currentMonth && year === currentYear,
          })}
          onClick={() => handleOpenCalendar(monthId)}
        >
          {monthName}
        </div>
      ))}
    </div>
  );
};
export default MonthsList;
