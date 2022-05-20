import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import PlansClock from './components/PlansClock/PlansClock';
import classes from './PlansDate.module.css';

const PlansDate: FC = () => {
  const today = useSelector((state: RootState) => state.showTodaysDay.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <div className={classes.root}>
      <PlansClock />
      <div className={classes.plansDate}>{currentDateNamesFormat}</div>
    </div>
  );
};

export default PlansDate;
