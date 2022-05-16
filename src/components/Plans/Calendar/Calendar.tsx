import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import useFillCalendar from 'hooks/useFillCalendar';
import CalendarMonthsList from 'Plans/CalendarMonthsList/CalendarMonthsList';
import { currentDateActions } from 'store/slices/currentDate.slice';
import { useAppDispatch } from 'store/store';
import { DayName } from 'types/components/calendar/dayName.enum';
import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import * as S from './Calendar.styled';
import getWeekDays from './helpers/getWeekDays';

const { TODAY, CURRENT_MONTH_DAY } = DayName;

const Calendar: FC = () => {
  const { today, month, year } = useSelector((state: RootState) => state.showTodaysDay);

  const dispatch = useAppDispatch();

  const listOfDays = useFillCalendar(new Date(year, month, 1), month);

  const weekDays = getWeekDays();
  const { dateTime } = formatCurrentDate(today);

  const handleArrowDownClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month + 1 }));
  };

  const handleArrowUpClick = () => {
    dispatch(currentDateActions.updateMonthAndYear({ month: month - 1 }));
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.DateInformation>
          <span className="month">
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(0, month))}
          </span>
          <span>{year}</span>
        </S.DateInformation>
        <S.ArrowsContainer>
          <ArrowUp onClick={handleArrowUpClick} />
          <ArrowDown onClick={handleArrowDownClick} />
        </S.ArrowsContainer>
      </S.CalendarHeader>
      {/* <>
        <S.WeekDays>
          {weekDays.map(day => (
            <p key={day}>{day}</p>
          ))}
        </S.WeekDays>
        <S.Days>
          {listOfDays.map(({ id, name, dayNumber }) => (
            <div
              key={id}
              className={`day ${name} ${
                dayNumber === new Date(dateTime).getDate() && name === CURRENT_MONTH_DAY && TODAY
              }`}
            >
              <div className="dayNumber">{dayNumber}</div>
            </div>
          ))}
        </S.Days>
      </> */}
      <CalendarMonthsList />
    </S.CalendarContainer>
  );
};

export default Calendar;
