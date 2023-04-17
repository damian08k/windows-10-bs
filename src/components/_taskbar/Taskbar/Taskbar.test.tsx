import '@testing-library/jest-dom';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { Taskbar } from '_taskbar/Taskbar/Taskbar';
import { TASKBAR } from 'src/testIds';

import { renderWithProviders } from 'utils/testUtils/testUtils';

describe('Taskbar', () => {
  test('if clicking in TimeAndDate component renders Plans component', async () => {
    // given
    const { getByTestId } = renderWithProviders(<Taskbar />);
    const button = getByTestId(TASKBAR.TIME_AND_DATE);
    // when
    fireEvent.mouseDown(button);
    // then
    await waitFor(() => expect(screen.getByTestId(TASKBAR.PLANS)).toBeInTheDocument());
  });
});
