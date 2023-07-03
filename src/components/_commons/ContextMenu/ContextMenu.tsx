import { MenuOptions } from 'types/components/common/contextMenu/menuOptions.type';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './ContextMenu.module.css';

// * options is 2D array because we need to divide options into "categories"
// * Each array is separate "category", which is separated by a line in the menu

type Props = {
  title?: string;
  options: MenuOptions[][];
};

export const ContextMenu = ({ title, options }: Props) => {
  return (
    <menu className={classes.root}>
      {title && (
        <li className={classes.menuTitle}>
          <h3 className={classes.title}>{title}</h3>
        </li>
      )}
      {options.map(category =>
        category.map(({ name, icon, isIconVisible }, inx) => {
          return (
            <li
              key={name}
              className={mergeClasses(classes.menuOption, {
                [classes.bottomLine]: inx === category.length - 1,
              })}
            >
              <button className={classes.option}>
                {isIconVisible && icon}
                <span className={classes.optionName}>{name}</span>
              </button>
            </li>
          );
        }),
      )}
    </menu>
  );
};
