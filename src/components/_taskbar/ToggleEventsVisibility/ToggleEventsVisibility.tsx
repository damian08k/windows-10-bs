import { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { plansActions } from 'store/slices/plans.slice';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import classes from './ToggleEventsVisibility.module.css';

const ToggleEventsVisibility: FC = () => {
  const isEventsVisible = useAppSelector(state => state.plans.isEventsVisible);
  const dispatch = useAppDispatch();

  const handleToggleEventsVisibility = () => {
    dispatch(plansActions.toogleEventsVisibility(!isEventsVisible));
  };

  return (
    <button className={classes.root} onClick={handleToggleEventsVisibility}>
      {isEventsVisible ? (
        <>
          <p>Hide plan</p>
          <ArrowDownIcon className={classes.arrow} />
        </>
      ) : (
        <>
          <p>Show plan</p>
          <ArrowUpIcon className={classes.arrow} />
        </>
      )}
    </button>
  );
};

export default ToggleEventsVisibility;
