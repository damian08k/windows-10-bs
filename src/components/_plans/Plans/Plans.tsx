import { FC, useRef } from 'react';

import useOutsideClick from 'hooks/useOutsideClick';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { calendarActions, initialSelectedDate } from 'store/slices/calendar.slice';
import { currentDateActions } from 'store/slices/currentDate.slice';

import Calendar from '_plans/Calendar/Calendar';
import Events from '_plans/Events/Events';
import PlansDate from '_plans/PlansDate/PlansDate';
import ToggleEventsVisibility from '_plans/ToggleEventsVisibility/ToggleEventsVisibility';

import getSplittedToday from 'utils/calendar/getSplittedToday';
import mergeClasses from 'utils/mergeClasses';

import resetPlansViews from './helpers/outsideClickCallback';

import classes from './Plans.module.css';

type Props = {
  transitionClassName: string;
};

const Plans: FC<Props> = ({ transitionClassName }) => {
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const { isPlanOpen, isEventsVisible } = useAppSelector(state => state.plans);
  const today = useAppSelector(state => state.currentDate.today);
  const dispatch = useAppDispatch();

  const { month, year } = getSplittedToday(today);

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      resetPlansViews(dispatch);
      dispatch(
        currentDateActions.updateMonthAndYear({
          month,
          year,
        }),
      );
      dispatch(calendarActions.setSelectedDate(initialSelectedDate));
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
      {isEventsVisible && <Events />}
      <ToggleEventsVisibility />
    </div>
  );
};

export default Plans;
