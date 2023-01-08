import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FC } from 'react';

import { MobileView, MobileViewInfoText } from '_view/MobileView/MobileView';

import { MIN_SYSTEM_RESOLUTION } from '../../constants';

type Props = {
  screenWidth: number;
};

describe('MobileView Component', () => {
  test('Component should render a message', () => {
    const { getByText } = render(<MobileView />);
    expect(getByText(MobileViewInfoText)).toBeInTheDocument();
  });

  test(`Component should render only if browser resolution is less than or equal to ${MIN_SYSTEM_RESOLUTION}`, () => {
    const testId = 'mobile-view';

    const screenWidthEqualToMinResolution = MIN_SYSTEM_RESOLUTION;
    const screenWidthMoreThanMinResolution = MIN_SYSTEM_RESOLUTION + 500;
    const screenWidthLessThanMinResolution = MIN_SYSTEM_RESOLUTION - 500;

    const RenderMobileView: FC<Props> = ({ screenWidth }) =>
      screenWidth <= MIN_SYSTEM_RESOLUTION ? <MobileView /> : null;

    const { rerender, queryByTestId } = render(
      <RenderMobileView screenWidth={screenWidthMoreThanMinResolution} />,
    );

    expect(queryByTestId(testId)).not.toBeInTheDocument();

    rerender(<RenderMobileView screenWidth={screenWidthEqualToMinResolution} />);
    expect(queryByTestId(testId)).toBeInTheDocument();

    rerender(<RenderMobileView screenWidth={screenWidthLessThanMinResolution} />);
    expect(queryByTestId(testId)).toBeInTheDocument();
  });
});
