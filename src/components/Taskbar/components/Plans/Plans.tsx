import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import Calendar from './components/Calendar/Calendar';
import PlansDate from './components/PlansDate/PlansDate';
import getCurrentWindowHeight from './helpers/getCurrentWindowSize';
import * as S from './Plans.styled';

type Props = {
  transitionClassName: string;
};

const Plans: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const isPlanOpen = useSelector((state: RootState) => state.togglePlansVisibility.isPlanOpen);
  const today = useSelector((state: RootState) => state.showTodaysDay.today);

  const { windowHeight, windowWidth } = getCurrentWindowHeight();

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    const splittedToday = today.split('.');

    dispatch(plansActions.togglePlansVisibility(false));
    if (isPlanOpen) {
      dispatch(
        currentDateActions.updateMonthAndYear({
          month: +splittedToday[1] - 1,
          year: +splittedToday[2],
        }),
      );
    }
  });

  return (
    <S.PlansBoxContainer
      ref={plansBoxContainerRef}
      className={transitionClassName}
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    >
      <PlansDate />
      <Calendar />
    </S.PlansBoxContainer>
  );
};

export default Plans;
