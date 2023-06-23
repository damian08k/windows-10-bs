export type TopBarIcons =
  | 'arrow-undo'
  | 'arrow-redo'
  | 'close'
  | 'properties'
  | 'folder'
  | 'rename';

export type FileExplorerState = {
  isExplorerOpen: boolean;
  topBarVisibleIcons: TopBarIcons[];
};
