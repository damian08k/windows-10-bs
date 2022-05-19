import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import CurrentDate from '../CurrentDate/CurrentDate';
import MenuClock from '../MenuClock/MenuClock';

import * as S from './TimeAndDate.styled';

const TimeAndDate: FC = () => {
  const today = useSelector((state: RootState) => state.showTodaysDay.today);
  const dispatch = useAppDispatch();

  const { currentDateNamesFormat } = formatCurrentDate(today);

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
