import '@testing-library/jest-dom';

import { fireEvent, screen, waitFor } from '@testing-library/react';

import { Taskbar } from '_taskbar/Taskbar/Taskbar';

import { renderWithProviders } from 'utils/testUtils/testUtils';

describe('Taskbar', () => {
  test('if clicking in TimeAndDate component renders Plans component', async () => {
    const { getByTestId } = renderWithProviders(<Taskbar />);

    const button = getByTestId('timeAndDate');

    fireEvent.mouseDown(button);

    await waitFor(() => expect(screen.getByTestId('plans')).toBeInTheDocument());
  });
});
