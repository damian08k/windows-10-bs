import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

import DesktopView from '../../components/view/DesktopView/DesktopView';
import { MIN_SYSTEM_RESOLUTION } from '../../constants';

type Props = {
  screenWidth: number;
};

describe('DesktopView component', () => {
  test(`Component should render only if browser resolution is more than ${MIN_SYSTEM_RESOLUTION}`, () => {
    const testId = 'desktop-view';

    const screenWidthEqualToMinResolution = MIN_SYSTEM_RESOLUTION;
    const screenWidthMoreThanMinResolution = MIN_SYSTEM_RESOLUTION + 500;
    const screenWidthLessThanMinResolution = MIN_SYSTEM_RESOLUTION - 500;

    const RenderDesktopView: FC<Props> = ({ screenWidth }) =>
      screenWidth > MIN_SYSTEM_RESOLUTION ? <DesktopView /> : null;

    const { rerender } = render(
      <RenderDesktopView screenWidth={screenWidthMoreThanMinResolution} />,
    );
    expect(screen.queryByTestId(testId)).toBeInTheDocument();

    rerender(<RenderDesktopView screenWidth={screenWidthEqualToMinResolution} />);
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();

    rerender(<RenderDesktopView screenWidth={screenWidthLessThanMinResolution} />);
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });
});
