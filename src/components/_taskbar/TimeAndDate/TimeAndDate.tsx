import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import CurrentDate from './components/CurrentDate/CurrentDate';
import CurrentTime from './components/CurrentTime/CurrentTime';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import formatCurrentDate from 'utils/formatCurrentDate';

import classes from './TimeAndDate.module.css';

const TimeAndDate: FC = () => {
  const today = useSelector((state: RootState) => state.currentDate.today);
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
