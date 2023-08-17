export type TopBarIcons =
  | 'arrow-undo'
  | 'arrow-redo'
  | 'close'
  | 'properties'
  | 'folder'
  | 'rename'
  | 'icons-position'
  | 'minimalize-ribbon';

export type FileExplorerState = {
  isExplorerOpen: boolean;
  topBarVisibleIcons: TopBarIcons[];
};
