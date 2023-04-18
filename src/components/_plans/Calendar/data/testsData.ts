import { initialSelectedDate } from 'store/slices/calendar.slice';

import { YearType } from 'types/components/calendar/yearType.type';

export const initialCalendarState = {
  isYearsView: false,
  isMonthsView: false,
  highlightedYears: [],
  yearsBlock: { isBlockDown: false, isBlockUp: false },
  selectedDate: initialSelectedDate,
};

export const highlightedYearsExample = [
  {
    id: 'first',
    type: YearType.HIGHLIGHTED,
    year: 2020,
    isCurrent: true,
    elementName: 'year' as const,
  },
  {
    id: 'last',
    type: YearType.HIGHLIGHTED,
    year: 2029,
    elementName: 'year' as const,
  },
];
