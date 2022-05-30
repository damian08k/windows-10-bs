import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/store.type';
import getSplittedToday from 'utils/getSplittedToday';

import Calendar from './components/Calendar/Calendar';
import PlansDate from './components/PlansDate/PlansDate';
import getCurrentWindowHeight from './helpers/getCurrentWindowSize';
import classes from './Plans.module.css';

type Props = {
  transitionClassName: string;
};

const Plans: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const isPlanOpen = useSelector((state: RootState) => state.plans.isPlanOpen);
  const today = useSelector((state: RootState) => state.currentDate.today);

  const { windowHeight, windowWidth } = getCurrentWindowHeight();
  const { month, year } = getSplittedToday(today);

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      dispatch(plansActions.togglePlansVisibility(false));
      dispatch(
        currentDateActions.updateMonthAndYear({
          month,
          year,
        }),
      );
    }
  });

  return (
    <div
      ref={plansBoxContainerRef}
      className={`${classes.root} ${!transitionClassName.includes('false') && classes.showPlans}`}
      style={{
        width: windowWidth * 0.2,
        height: windowHeight * 0.7,
      }}
    >
      <PlansDate />
      <Calendar />
    </div>
  );
};

export default Plans;
