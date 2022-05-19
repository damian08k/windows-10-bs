import { FC } from 'react';
import { useSelector } from 'react-redux';

import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { RootState } from 'types/store/clockState.type';

import getMonthsNames from './helpers/getMonthsNames';
import * as S from './MonthsList.styled';

const MonthsList: FC = () => {
  const { month, year } = useSelector((state: RootState) => state.showTodaysDay);
  const months = getMonthsNames();
  const dispatch = useAppDispatch();

  const handleOpenCalendar = (monthId: number) => {
    dispatch(currentDateActions.updateMonthAndYear({ month: monthId, year }));
    dispatch(currentDateActions.setIsMonthsView(false));
  };

  return (
    <S.MonthsContainer>
      {months.map(({ monthName, monthId }) => (
        <div
          key={monthName}
          className={`month ${month === monthId && 'currentMonth'}`}
          onClick={() => handleOpenCalendar(monthId)}
        >
          {monthName}
        </div>
      ))}
    </S.MonthsContainer>
  );
};
export default MonthsList;
