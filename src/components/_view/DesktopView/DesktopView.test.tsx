import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';

import { EXPLORER, SYSTEM_WINDOW, TASKBAR } from 'src/testIds';

import { renderWithProviders } from 'utils/testUtils/testUtils';

import { DesktopView } from './DesktopView';

jest.mock('framer-motion');

describe('DesktopView', () => {
  describe('Explorer', () => {
    it('should display file explorer, if explorer switcher was clicked', () => {
      // given
      const { getByTestId } = renderWithProviders(<DesktopView />, {
        preloadedState: {
          explorer: {
            isExplorerOpen: false,
          },
        },
      });
      const explorerSwitcher = getByTestId(TASKBAR.FILE_EXPLORER_SWITCHER);
      // when
      fireEvent.click(explorerSwitcher);
      // then
      const fileExplorer = getByTestId(EXPLORER.FILE_EXPLORER);
      expect(fileExplorer).toBeInTheDocument();
    });

    test('if the file explorer is not displayed when the user closes it', () => {
      // given
      const { getByTestId, queryByTestId } = renderWithProviders(<DesktopView />, {
        preloadedState: {
          explorer: {
            isExplorerOpen: true,
          },
        },
      });
      expect(getByTestId(EXPLORER.FILE_EXPLORER)).toBeInTheDocument();

      const closeFileExplorerButton = getByTestId(SYSTEM_WINDOW.ACTIONS.CLOSE);
      // when
      fireEvent.click(closeFileExplorerButton);
      // then
      expect(queryByTestId(EXPLORER.FILE_EXPLORER)).not.toBeInTheDocument();
    });
  });
});
