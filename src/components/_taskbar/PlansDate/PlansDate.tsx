import { FC } from 'react';
import { useSelector } from 'react-redux';

import PlansClock from './components/PlansClock/PlansClock';

import { RootState } from 'types/store/store.type';

import formatCurrentDate from 'utils/formatCurrentDate';

import classes from './PlansDate.module.css';

const PlansDate: FC = () => {
  const today = useSelector((state: RootState) => state.currentDate.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <div className={classes.root}>
      <PlansClock />
      <div className={classes.plansDate}>{currentDateNamesFormat}</div>
    </div>
  );
};

export default PlansDate;
