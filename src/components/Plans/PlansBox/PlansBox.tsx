import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';
import Clock from 'Menu/Clock/Clock';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import { timeFormat } from './data';
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
    }
  });

  return (
    <S.PlansBoxContainer
      ref={plansBoxContainerRef}
      className={transitionClassName}
      windowHeight={windowHeight}
      windowWidth={windowWidth}
    >
      <Clock timeFormat={timeFormat} />
    </S.PlansBoxContainer>
  );
};

export default PlansBox;
