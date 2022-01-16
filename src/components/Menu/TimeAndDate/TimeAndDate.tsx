import { FC, memo } from 'react';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import getCurrentDate from 'utils/getCurrentDate';

import CurrentDate from '../CurrentDate/CurrentDate';
import MenuClock from '../MenuClock/MenuClock';

import * as S from './TimeAndDate.styled';

const TimeAndDate: FC = () => {
  const dispatch = useAppDispatch();

  const { currentDateNamesFormat } = getCurrentDate();

  const handleOpenPlans = () => {
    dispatch(plansActions.togglePlansVisibility(true));
  };

  return (
    <S.Container data-title={currentDateNamesFormat} onClick={handleOpenPlans}>
      <MenuClock />
      <CurrentDate />
    </S.Container>
  );
};

export default memo(TimeAndDate);
