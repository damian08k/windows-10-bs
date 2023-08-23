import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  FileExplorerState,
  RibbonOptionValues,
  RibbonOptions,
  TopBarIcons,
} from 'types/store/fileExplorerState.type';
import { RootState } from 'types/store/store.type';

const initialRibbonOption: RibbonOptions[] = [
  { option: 'Main tools', isSelected: true },
  { option: 'Sharing', isSelected: false },
  { option: 'View', isSelected: false },
];

const initialExplorerState: FileExplorerState = {
  isExplorerOpen: true,
  topBarVisibleIcons: [],
  ribbonOptions: initialRibbonOption,
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
    changeSelectedRibbonOption(state, action: PayloadAction<RibbonOptionValues>) {
      state.ribbonOptions = state.ribbonOptions.map(ribbonOption => ({
        ...ribbonOption,
        isSelected: ribbonOption.option === action.payload,
      }));
    },
  },
});

export const explorerActions = explorerSlice.actions;

export default explorerSlice.reducer;

export const getSelectedRibbonOption = (state: RootState) =>
  state.explorer.ribbonOptions.find(({ isSelected }) => isSelected) || null;
