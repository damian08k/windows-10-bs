import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FileExplorerState } from 'types/store/fileExplorerState.type';

const initialExplorerState: FileExplorerState = {
  isExplorerOpen: false,
};

const explorerSlice = createSlice({
  name: 'fileExplorer',
  initialState: initialExplorerState,
  reducers: {
    toggleExplorerVisibility(state, action: PayloadAction<boolean>) {
      state.isExplorerOpen = action.payload;
    },
  },
});

export const explorerActions = explorerSlice.actions;
export default explorerSlice.reducer;
