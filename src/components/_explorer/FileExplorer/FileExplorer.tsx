import { ExplorerTopBar } from '_explorer/ExplorerTopBar/ExplorerTopBar';
import { Ribbon } from '_explorer/Ribbon/Ribbon';
import { EXPLORER } from 'src/testIds';

import classes from './FileExplorer.module.css';

export const FileExplorer = () => {
  return (
    <div className={classes.root} data-testid={EXPLORER.FILE_EXPLORER}>
      <ExplorerTopBar />
      <Ribbon />
    </div>
  );
};
