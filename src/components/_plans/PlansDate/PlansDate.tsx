import PlansClock from './components/PlansClock/PlansClock';

import { useAppSelector } from 'store/hooks';

import formatCurrentDate from 'utils/calendar/formatCurrentDate';

import classes from './PlansDate.module.css';

const PlansDate = () => {
  const today = useAppSelector(state => state.currentDate.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <div className={classes.root}>
      <PlansClock />
      <button className={classes.plansDate}>
        <span>{currentDateNamesFormat}</span>
      </button>
    </div>
  );
};

export default PlansDate;
