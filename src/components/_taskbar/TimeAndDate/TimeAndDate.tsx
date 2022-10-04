import { memo } from 'react';

import CurrentDate from './components/CurrentDate/CurrentDate';
import CurrentTime from './components/CurrentTime/CurrentTime';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { plansActions } from 'store/slices/plans.slice';

import formatCurrentDate from 'utils/calendar/formatCurrentDate';

import classes from './TimeAndDate.module.css';

const TimeAndDate = () => {
  const today = useAppSelector(state => state.currentDate.today);
  const dispatch = useAppDispatch();

  const { currentDateNamesFormat } = formatCurrentDate(today);

  const handleOpenPlans = () => {
    dispatch(plansActions.togglePlansVisibility(true));
  };

  return (
    <div className={classes.root} data-title={currentDateNamesFormat} onMouseDown={handleOpenPlans}>
      <CurrentTime />
      <CurrentDate />
    </div>
  );
};

export default memo(TimeAndDate);
