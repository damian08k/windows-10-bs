import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';

import { EXPLORER, TASKBAR } from 'src/testIds';

import { renderWithProviders } from 'utils/testUtils/testUtils';

import { DesktopView } from './DesktopView';

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
  });
});
