import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import { RootState } from 'types/store/store.type';

import { FileExplorer } from '_explorer/FileExplorer/FileExplorer';
import { Taskbar } from '_taskbar/Taskbar/Taskbar';
import { CURRENT_VIEW } from 'src/testIds';

import { fileExplorerAnimation } from './animations/fileExplorerAnimation';

import classes from './DesktopView.module.css';

export const DesktopView = () => {
  const { isExplorerOpen } = useSelector((state: RootState) => state.explorer);

  return (
    <div className={classes.root} data-testid={CURRENT_VIEW.DESKTOP_VIEW}>
      {isExplorerOpen && (
        <motion.div className={classes.fileExplorerWindow} {...fileExplorerAnimation}>
          <FileExplorer />
        </motion.div>
      )}
      <Taskbar />
    </div>
  );
};
