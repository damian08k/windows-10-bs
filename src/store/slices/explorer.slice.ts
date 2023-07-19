import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FileExplorerState, TopBarIcons } from 'types/store/fileExplorerState.type';

const initialExplorerState: FileExplorerState = {
  isExplorerOpen: true,
  topBarVisibleIcons: [],
};

const explorerSlice = createSlice({
  name: 'fileExplorer',
  initialState: initialExplorerState,
  reducers: {
    toggleExplorerVisibility(state, action: PayloadAction<boolean>) {
      state.isExplorerOpen = action.payload;
    },
    toggleTopBarVisibleIcons(state, action: PayloadAction<TopBarIcons>) {
      if (state.topBarVisibleIcons.includes(action.payload)) {
        return {
          ...state,
          topBarVisibleIcons: state.topBarVisibleIcons.filter(id => id !== action.payload),
        };
      }

      state.topBarVisibleIcons.push(action.payload);
    },
  },
});

export const explorerActions = explorerSlice.actions;

export default explorerSlice.reducer;
