import { FC } from 'react';
import { useSelector } from 'react-redux';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/arrow_up.svg';

import classes from './ToggleEventsVisibility.module.css';

const ToggleEventsVisibility: FC = () => {
  const isEventsVisible = useSelector((state: RootState) => state.plans.isEventsVisible);
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
