import { FC } from 'react';
import { useSelector } from 'react-redux';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';

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
          <p>Hide plans</p>
          <ArrowDown className={classes.arrow} />
        </>
      ) : (
        <>
          <p>Show plans</p>
          <ArrowUp className={classes.arrow} />
        </>
      )}
    </button>
  );
};

export default ToggleEventsVisibility;
