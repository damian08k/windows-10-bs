import { forwardRef } from 'react';

import { MenuOptionIds } from 'types/components/common/contextMenu/menuOptionIds.type';
import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './ContextMenu.module.css';

// * options prop is 2D array because we need to divide options into "categories"
// * Each array is separate "category", which is separated by a line in the menu

type Props = {
  isOpen: boolean;
  options: MenuOptions[][];
  onClick: (id: MenuOptionIds) => void;
  title?: string;
};

export const ContextMenu = forwardRef<HTMLMenuElement, Props>(
  ({ isOpen, title, options, onClick }, menuRef) => {
    return isOpen ? (
      <menu className={classes.root} ref={menuRef}>
        {title && (
          <li className={classes.menuTitle}>
            <h3 className={classes.title}>{title}</h3>
          </li>
        )}
        {options.map(category =>
          category.map(({ name, icon, isIconVisible, id, testId }, inx) => {
            return (
              <li
                key={name}
                className={mergeClasses(classes.menuOption, {
                  [classes.bottomLine]: inx === category.length - 1,
                })}
              >
                <button className={classes.option} onClick={() => onClick(id)} data-testid={testId}>
                  <span className={classes.optionIcon}>{isIconVisible && icon}</span>
                  <span className={classes.optionName}>{name}</span>
                </button>
              </li>
            );
          }),
        )}
      </menu>
    ) : null;
  },
);

ContextMenu.displayName = 'ContextMenu';
