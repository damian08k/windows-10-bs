import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import useFillCalendar from 'hooks/useFillCalendar';
import { DayName } from 'types/components/calendar/dayName.enum';
import { RootState } from 'types/store/clockState.type';
import formatCurrentDate from 'utils/formatCurrentDate';

import * as S from './Calendar.styled';
import getDateElements from './helpers/getDateElements';
import getWeekDays from './helpers/getWeekDays';

const { TODAY } = DayName;

const Calendar: FC = () => {
  const today = useSelector((state: RootState) => state.showTodaysDay.today);
  const { dateTime } = formatCurrentDate(today);

  const listOfDays = useFillCalendar(new Date(dateTime));
  const { month, year } = getDateElements();
  const weekDays = getWeekDays();

  const handleArrowDownClick = () => {
    console.log('down');
  };

  const handleArrowUpClick = () => {
    console.log('up');
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.DateInformation>
          <span className="month">{month}</span>
          <span>{year}</span>
        </S.DateInformation>
        <S.ArrowsContainer>
          <ArrowUp onClick={handleArrowUpClick} />
          <ArrowDown onClick={handleArrowDownClick} />
        </S.ArrowsContainer>
      </S.CalendarHeader>
      <S.WeekDays>
        {weekDays.map(day => (
          <p key={day}>{day}</p>
        ))}
      </S.WeekDays>
      <S.Days>
        {listOfDays.map(({ id, name, dayNumber }) => (
          <div
            key={id}
            className={`day ${name} ${dayNumber === new Date(dateTime).getDate() && TODAY}`}
          >
            <div className="dayNumber">{dayNumber}</div>
          </div>
        ))}
      </S.Days>
    </S.CalendarContainer>
  );
};

export default Calendar;
