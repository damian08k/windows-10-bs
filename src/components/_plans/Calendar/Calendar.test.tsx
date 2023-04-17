import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';

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
  });
});
