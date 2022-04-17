import { lighten } from 'polished';
import styled from 'styled-components';

import { DayName } from 'types/components/calendar/dayName.enum';

const { PREVIOUS_MONTH_DAY, NEXT_MONTH_DAY, TODAY } = DayName;

export const CalendarContainer = styled.div`
  padding: var(--spacing) calc(var(--spacing) * 2) calc(var(--spacing) * 2);
  border-bottom: 1px solid var(--plansBorderColor);
  font-size: 1.5rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: calc(var(--spacing) * 2);

  & > * {
    flex-basis: 40%;
  }
`;

export const DateInformation = styled.div`
  display: flex;
  gap: 5%;

  .month {
    text-transform: lowercase;
  }
`;

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10%;

  & > * {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const WeekDays = styled.div`
  display: flex;
  padding-bottom: var(--spacing);
  text-transform: lowercase;
  text-align: center;

  & > * {
    flex-basis: calc(100% / 7);
  }
`;

export const Days = styled.div`
  --daysSpacing: 2px;
  --dayHoverBorder: rgb(121, 121, 121);
  --dayNumberBackground: rgb(16, 124, 16);
  --todayBorderColor: rgb(16, 124, 16);

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: var(--daysSpacing);

  .day {
    line-height: 35px;
    border: 2px solid transparent;
    text-align: center;

    &:hover {
      border-color: var(--dayHoverBorder);
    }
  }

  .${PREVIOUS_MONTH_DAY}, .${NEXT_MONTH_DAY} {
    color: rgba(var(--white), 0.5);
  }

  .${TODAY} {
    padding: var(--daysSpacing);
    border: 2px solid var(--todayBorderColor);

    .dayNumber {
      background-color: var(--dayNumberBackground);
      color: var(--white);
      font-weight: bold;
    }

    &:hover {
      border-color: ${lighten(0.3, 'rgb(158, 204, 41)')};
    }
  }
`;
