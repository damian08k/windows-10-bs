import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/testUtils/testUtils';

import { App } from './App';
import { MIN_SYSTEM_RESOLUTION } from './constants';
import { CURRENT_VIEW } from './testIds';

const { MOBILE_VIEW, DESKTOP_VIEW } = CURRENT_VIEW;

afterEach(() => {
  global.innerWidth = MIN_SYSTEM_RESOLUTION;
  global.dispatchEvent(new Event('resize'));
});

describe('Rendered view', () => {
  it(`should render MobileView component if resolution is less than ${MIN_SYSTEM_RESOLUTION}`, () => {
    // given
    global.innerWidth = MIN_SYSTEM_RESOLUTION - 500;
    global.dispatchEvent(new Event('resize'));
    // when
    renderWithProviders(<App />);
    // then
    expect(screen.getByTestId(MOBILE_VIEW)).toBeInTheDocument();
    expect(screen.queryByTestId(DESKTOP_VIEW)).not.toBeInTheDocument();
  });

  it(`should render DesktopView if resolution is equal to ${MIN_SYSTEM_RESOLUTION}`, () => {
    // given -> afterEach
    // when
    renderWithProviders(<App />);
    // then
    expect(screen.getByTestId(DESKTOP_VIEW)).toBeInTheDocument();
    expect(screen.queryByTestId(MOBILE_VIEW)).not.toBeInTheDocument();
  });

  it(`should render DesktopView if resolution is bigger than ${MIN_SYSTEM_RESOLUTION}`, () => {
    // given
    global.innerWidth = MIN_SYSTEM_RESOLUTION + 500;
    global.dispatchEvent(new Event('resize'));
    // when
    renderWithProviders(<App />);
    // then
    expect(screen.getByTestId(DESKTOP_VIEW)).toBeInTheDocument();
    expect(screen.queryByTestId(MOBILE_VIEW)).not.toBeInTheDocument();
  });
});
