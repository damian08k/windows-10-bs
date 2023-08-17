import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import { waitFor } from '@testing-library/react';

import { FileExplorer } from '_explorer/FileExplorer/FileExplorer';
import { EXPLORER } from 'src/testIds';

import { renderWithProviders } from 'utils/testUtils/testUtils';

describe('Explorer Top Bar', () => {
  describe('Quick Access Bar', () => {
    it('should render icon next to clicked menu element', async () => {
      // given
      const { getByTestId } = renderWithProviders(<FileExplorer />);
      const openContextMenuButton = getByTestId(EXPLORER.TOP_BAR.OPEN_CONTEXT_MENU);
      // when
      fireEvent.click(openContextMenuButton);
      const menuPropertiesOption = getByTestId(EXPLORER.TOP_BAR.CONTEXT_MENU_OPTIONS.PROPERTIES);
      const menuUndoOption = getByTestId(EXPLORER.TOP_BAR.CONTEXT_MENU_OPTIONS.UNDO);

      fireEvent.click(menuPropertiesOption);
      fireEvent.click(menuUndoOption);

      // then
      await waitFor(() => {
        const propertiesSelectedIcon = menuPropertiesOption.querySelector('.optionIcon svg');
        const undoSelectedIcon = menuUndoOption.querySelector('.optionIcon svg');

        expect(propertiesSelectedIcon).toBeInTheDocument();
        expect(undoSelectedIcon).toBeInTheDocument();
      });
    });
    it('should render icon in actions bar if its corresponding item has been clicked in context menu', async () => {
      // given
      const { getByTestId } = renderWithProviders(<FileExplorer />);
      const openContextMenuButton = getByTestId(EXPLORER.TOP_BAR.OPEN_CONTEXT_MENU);
      // when
      fireEvent.click(openContextMenuButton);
      const menuRedoOption = getByTestId(EXPLORER.TOP_BAR.CONTEXT_MENU_OPTIONS.REDO);
      const menuRenameOption = getByTestId(EXPLORER.TOP_BAR.CONTEXT_MENU_OPTIONS.RENAME);

      fireEvent.click(menuRedoOption);
      fireEvent.click(menuRenameOption);
      // then
      await waitFor(() => {
        const actionsArea = getByTestId(EXPLORER.TOP_BAR.ACTIONS_AREA);
        const redoIcon = getByTestId(EXPLORER.TOP_BAR.ICONS.REDO);
        const renameIcon = getByTestId(EXPLORER.TOP_BAR.ICONS.RENAME);

        expect(actionsArea).toContainElement(redoIcon);
        expect(actionsArea).toContainElement(renameIcon);
      });
    });
  });
});
