import { KeyboardEvent, memo } from 'react';

import CurrentDate from './components/CurrentDate/CurrentDate';
import CurrentTime from './components/CurrentTime/CurrentTime';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { plansActions } from 'store/slices/plans.slice';

import formatCurrentDate from 'utils/calendar/formatCurrentDate';

import classes from './TimeAndDate.module.css';

const TimeAndDate = () => {
  const today = useAppSelector(state => state.currentDate.today);
  const { isPlanOpen } = useAppSelector(state => state.plans);
  const dispatch = useAppDispatch();

  const { currentDateNamesFormat } = formatCurrentDate(today);

  const handleOpenPlans = () => {
    dispatch(plansActions.togglePlansVisibility(true));
  };

  const handleSwitchPlansVisibility = (evt: KeyboardEvent<HTMLButtonElement>) => {
    const { key } = evt;

    if (key === 'Enter') {
      if (isPlanOpen) {
        dispatch(plansActions.togglePlansVisibility(false));
      } else {
        handleOpenPlans();
      }
    }
  };

  return (
    <button
      className={classes.root}
      data-title={currentDateNamesFormat}
      onMouseDown={handleOpenPlans}
      onKeyDown={evt => handleSwitchPlansVisibility(evt)}
    >
      <CurrentTime />
      <CurrentDate />
    </button>
  );
};

export default memo(TimeAndDate);
