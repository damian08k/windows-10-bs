import { FC, memo } from 'react';

import { plansActions } from 'store/slices/plans.slice';
import { useAppDispatch } from 'store/store';
import getCurrentDate from 'utils/getCurrentDate';

import Clock from '../Clock/Clock';
import CurrentDate from '../CurrentDate/CurrentDate';

import * as S from './TimeAndDate.styled';

type Props = {
  timeFormat: Intl.DateTimeFormatOptions;
};

const TimeAndDate: FC<Props> = ({ timeFormat }) => {
  const dispatch = useAppDispatch();

  const { currentDateNamesFormat } = getCurrentDate();

  const handleOpenPlans = () => {
    dispatch(plansActions.togglePlansVisibility(true));
  };

  return (
    <S.Container data-title={currentDateNamesFormat} onClick={handleOpenPlans}>
      <Clock timeFormat={timeFormat} />
      <CurrentDate />
    </S.Container>
  );
};

export default memo(TimeAndDate);
