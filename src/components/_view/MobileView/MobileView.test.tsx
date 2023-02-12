import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { MobileView, MobileViewInfoText } from '_view/MobileView/MobileView';
import { MIN_SYSTEM_RESOLUTION } from 'src/constants';

type Props = {
  screenWidth: number;
};

describe('MobileView Component', () => {
  it('should render a not supported resolution message', () => {
    const { getByText } = render(<MobileView />);
    expect(getByText(MobileViewInfoText)).toBeInTheDocument();
  });

  it(`should render only if browser resolution is less than or equal to ${MIN_SYSTEM_RESOLUTION}`, () => {
    const testId = 'mobile-view';
    const screenWidthEqualToMinResolution = MIN_SYSTEM_RESOLUTION;
    const screenWidthMoreThanMinResolution = MIN_SYSTEM_RESOLUTION + 500;
    const screenWidthLessThanMinResolution = MIN_SYSTEM_RESOLUTION - 500;

    const RenderMobileView = ({ screenWidth }: Props) =>
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
