export type TopBarIcons =
  | 'arrow-undo'
  | 'arrow-redo'
  | 'close'
  | 'properties'
  | 'folder'
  | 'rename'
  | 'icons-position'
  | 'minimalize-ribbon';

export type RibbonOptionValues = 'Main tools' | 'Sharing' | 'View';

export type RibbonOptions = {
  option: RibbonOptionValues;
  isSelected: boolean;
};

export type FileExplorerState = {
  isExplorerOpen: boolean;
  topBarVisibleIcons: TopBarIcons[];
  ribbonOptions: RibbonOptions[];
};
