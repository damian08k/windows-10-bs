import '@testing-library/jest-dom';

import { fireEvent, screen, waitFor } from '@testing-library/dom';

import { initialSelectedDate } from 'store/slices/calendar.slice';

import { CALENDAR } from 'src/testIds';

import { renderWithProviders } from 'utils/testUtils/testUtils';

import { Calendar } from './Calendar';

describe('Calendar', () => {
  describe('Change of calendar view', () => {
    it('should display current month view after first render', () => {
      // given
      const { getByTestId } = renderWithProviders(<Calendar />);
      const currentMonth = new Date().toLocaleString('en', { month: 'long' }).toLowerCase();
      // when
      const displayedView = getByTestId(CALENDAR.VIEW.MONTH);
      const visibleMonth = getByTestId(CALENDAR.HEADER.VISIBLE_MONTH);
      // then
      expect(displayedView).toContainElement(visibleMonth);
      expect(visibleMonth.innerHTML.toLowerCase()).toContain(currentMonth);
    });

    test('if the user clicks on the current view for the first time, the view changes to the years view', () => {
      // given
      const { getByTestId, queryByTestId } = renderWithProviders(<Calendar />);
      const monthsView = getByTestId(CALENDAR.VIEW.MONTH);
      // when
      fireEvent.click(monthsView);
      // then
      const monthsListView = getByTestId(CALENDAR.VIEW.MONTHS_LIST);
      const monthsListViewYear = getByTestId(CALENDAR.HEADER.MONTHS_LIST_VIEW_YEAR);
      const monthViewYear = queryByTestId(CALENDAR.HEADER.MONTH_VIEW_YEAR);

      expect(monthsListView).toContainElement(monthsListViewYear);
      expect(monthsListView).not.toContainElement(monthViewYear);
    });

    test('if the double click on the current view, changes view to the years list view', () => {
      // given
      const { getByTestId, queryByTestId } = renderWithProviders(<Calendar />);
      const monthsView = getByTestId(CALENDAR.VIEW.MONTH);
      // when
      fireEvent.click(monthsView);
      const monthsListView = getByTestId(CALENDAR.VIEW.MONTHS_LIST);
      fireEvent.click(monthsListView);
      // then
      const yearsView = queryByTestId(CALENDAR.VIEW.YEARS);
      expect(yearsView).toBeInTheDocument();
    });

    it('should change view from years to months list, after clicking year', () => {
      // given
      const initialState = {
        calendar: {
          isYearsView: true,
          isMonthsView: false,
          highlightedYears: [],
          yearsBlock: { isBlockDown: false, isBlockUp: false },
          selectedDate: initialSelectedDate,
        },
      };
      const { getByTestId, queryByTestId } = renderWithProviders(<Calendar />, {
        preloadedState: initialState,
      });
      const firstYearInList = getByTestId(CALENDAR.CONTAINERS.YEARS).childNodes[0];
      // when
      fireEvent.click(firstYearInList);
      // then
      expect(getByTestId(CALENDAR.VIEW.MONTHS_LIST)).toBeInTheDocument();
      expect(queryByTestId(CALENDAR.VIEW.YEARS)).not.toBeInTheDocument();
    });

    it('should change view from years to selected month, after clicking year and then month', () => {
      // given
      const initialState = {
        calendar: {
          isYearsView: true,
          isMonthsView: false,
          highlightedYears: [],
          yearsBlock: { isBlockDown: false, isBlockUp: false },
          selectedDate: initialSelectedDate,
        },
      };
      const { getByTestId, queryByTestId } = renderWithProviders(<Calendar />, {
        preloadedState: initialState,
      });
      const firstYearInList = getByTestId(CALENDAR.CONTAINERS.YEARS).childNodes[0];
      // when
      fireEvent.click(firstYearInList);

      const firstMonthInList = getByTestId(CALENDAR.CONTAINERS.MONTH).childNodes[0];
      fireEvent.click(firstMonthInList);
      // then
      expect(getByTestId(CALENDAR.VIEW.MONTH)).toBeInTheDocument();
      expect(queryByTestId(CALENDAR.VIEW.MONTHS_LIST)).not.toBeInTheDocument();
      expect(queryByTestId(CALENDAR.VIEW.YEARS)).not.toBeInTheDocument();
    });
  });
});
