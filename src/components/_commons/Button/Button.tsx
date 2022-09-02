import { FC, ReactNode } from 'react';

import { ButtonMode, ButtonState, ButtonType } from 'types/components/common/button/button.type';

import mergeClasses from 'utils/mergeClasses';

import classes from './Button.module.css';

type Props = {
  type: ButtonType;
  value: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  state?: ButtonState;
  mode?: ButtonMode;
};

const Button: FC<Props> = ({
  type,
  value,
  onClick,
  icon,
  disabled = false,
  state = 'normal',
  mode = 'dark',
}) => {
  return (
    <button
      className={mergeClasses(classes.root, {
        [classes.primary]: type === 'primary',
        [classes.secondary]: type === 'secondary',
        [classes.success]: type === 'success',
        [classes.error]: type === 'error',
        [classes.normal]: state === 'normal',
        [classes.outline]: state === 'outline',
        [classes.loading]: state === 'loading',
        [classes.lightMode]: mode === 'light',
        [classes.darkMode]: mode === 'dark',
      })}
      onClick={onClick}
      disabled={state === 'loading' ? true : disabled}
    >
      {state !== 'loading' ? (
        <>
          {icon && <span className={classes.icon}>{icon}</span>}
          <span className={classes.value}>{value}</span>
        </>
      ) : (
        <>
          <p>loading...</p>
        </>
      )}
    </button>
  );
};

export default Button;
