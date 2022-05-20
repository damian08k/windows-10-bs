import { FC } from 'react';
import { useSelector } from 'react-redux';

import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import getMonthsNames from './helpers/getMonthsNames';
import classes from './MonthsList.module.css';

const MonthsList: FC = () => {
  const { month, year } = useSelector((state: RootState) => state.showTodaysDay);
  const months = getMonthsNames();
  const dispatch = useAppDispatch();

  const handleOpenCalendar = (monthId: number) => {
    dispatch(currentDateActions.updateMonthAndYear({ month: monthId, year }));
    dispatch(currentDateActions.setIsMonthsView(false));
  };

  return (
    <div className={classes.root}>
      {months.map(({ monthName, monthId }) => (
        <div
          key={monthName}
          className={`${classes.month} ${month === monthId && classes.currentMonth}`}
          onClick={() => handleOpenCalendar(monthId)}
        >
          {monthName}
        </div>
      ))}
    </div>
  );
};
export default MonthsList;
