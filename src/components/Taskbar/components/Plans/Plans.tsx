import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import Calendar from './components/Calendar/Calendar';
import Plan from './components/Plan/Plan';
import PlansDate from './components/PlansDate/PlansDate';

import useOutsideClick from 'hooks/useOutsideClick';

import { calendarActions } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';

import { RootState } from 'types/store/store.type';

import getSplittedToday from 'utils/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import classes from './Plans.module.css';

type Props = {
  transitionClassName: string;
};

const Plans: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const isPlanOpen = useSelector((state: RootState) => state.plans.isPlanOpen);
  const today = useSelector((state: RootState) => state.currentDate.today);

  const { month, year } = getSplittedToday(today);

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      // TODO: Split this reset to separate method/slice/reducer
      dispatch(plansActions.togglePlansVisibility(false));
      dispatch(calendarActions.setIsMonthsView(false));
      dispatch(calendarActions.setIsYearsView(false));
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
      className={mergeClasses(classes.root, {
        [classes.showPlans]: !transitionClassName.includes('false'),
      })}
    >
      <PlansDate />
      <Calendar />
      <Plan />
    </div>
  );
};

export default Plans;
