import { ExplorerTopBar } from '_explorer/ExplorerTopBar/ExplorerTopBar';
import { EXPLORER } from 'src/testIds';

import classes from './FileExplorer.module.css';

export const FileExplorer = () => {
  return (
    <div className={classes.root} data-testid={EXPLORER.FILE_EXPLORER}>
      <ExplorerTopBar />
    </div>
  );
};
