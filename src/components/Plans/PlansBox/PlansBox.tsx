import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';
import Calendar from 'Plans/Calendar/Calendar';
import PlansBoxDate from 'Plans/PlansBoxDate/PlansBoxDate';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import getCurrentWindowHeight from './helpers/getCurrentWindowSize';
import * as S from './PlansBox.styled';

type Props = {
  transitionClassName: string;
};

const PlansBox: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const isPlanOpen = useSelector((state: RootState) => state.togglePlansVisibility.isPlanOpen);

  const { windowHeight, windowWidth } = getCurrentWindowHeight();

  useOutsideClick<HTMLDivElement>(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      dispatch(plansActions.togglePlansVisibility(false));
      dispatch(
        currentDateActions.updateMonthAndYear({
          // Przechowuje obecną datę w stanie jako currentDate, może tego tu użyć?
          month: new Date().getMonth(),
          year: new Date().getFullYear(),
        }),
      );
    }
  });

  console.log(new Date().getMonth(), new Date().getFullYear());

  return (
    <S.PlansBoxContainer
      ref={plansBoxContainerRef}
      className={transitionClassName}
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    >
      <PlansBoxDate />
      <Calendar />
    </S.PlansBoxContainer>
  );
};

export default PlansBox;
