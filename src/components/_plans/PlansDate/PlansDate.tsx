import { PlansClock } from './components/PlansClock/PlansClock';

import { useAppSelector } from 'store/hooks';

import { formatCurrentDate } from 'utils/formatCurrentDate';

import classes from './PlansDate.module.css';

export const PlansDate = () => {
  const today = useAppSelector(state => state.currentDate.today);

  const { currentDateNamesFormat } = formatCurrentDate(today);

  return (
    <div className={classes.root}>
      <PlansClock />
      <button className={classes.plansDate} aria-label={`${currentDateNamesFormat}`}>
        <span>{currentDateNamesFormat}</span>
      </button>
    </div>
  );
};
