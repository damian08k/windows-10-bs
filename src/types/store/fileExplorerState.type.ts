export type TopBarIcons =
  | 'arrow-undo'
  | 'arrow-redo'
  | 'close'
  | 'properties'
  | 'folder'
  | 'rename'
  | 'icons-position'
  | 'minimalize-ribbon';

export type RibbonOptions = {
  option: string;
  isSelected: boolean;
};

export type FileExplorerState = {
  isExplorerOpen: boolean;
  topBarVisibleIcons: TopBarIcons[];
  ribbonOptions: RibbonOptions[];
};
