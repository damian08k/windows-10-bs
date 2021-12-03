import { FC, useRef } from 'react';
import { useSelector } from 'react-redux';

import useOutsideClick from 'hooks/useOutsideClick';
import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import getCurrentWindowHeight from './helpers/getCurrentWindowHeight';
import { PlansBoxContainer } from './PlansBox.styled';

type Props = {
  transitionClassName: string;
};

const PlansBox: FC<Props> = ({ transitionClassName }) => {
  const dispatch = useAppDispatch();
  const plansBoxContainerRef = useRef<HTMLDivElement>(null);
  const isPlanOpen = useSelector((state: RootState) => state.togglePlansVisibility.isPlanOpen);

  const { windowHeight } = getCurrentWindowHeight();

  useOutsideClick(plansBoxContainerRef, () => {
    if (isPlanOpen) {
      dispatch(plansActions.togglePlansVisibility(false));
    }
  });

  return (
    <PlansBoxContainer
      ref={plansBoxContainerRef}
      className={transitionClassName}
      windowHeight={windowHeight}
    >
      Plans
    </PlansBoxContainer>
  );
};

export default PlansBox;
