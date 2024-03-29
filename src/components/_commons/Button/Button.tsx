import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from 'react';

import { ButtonMode, ButtonState, ButtonVariant } from 'types/components/common/button/button.type';

import { Loader } from '_commons/Loader/Loader';

import { mergeClasses } from 'utils/mergeClasses';

import classes from './Button.module.css';

type Props = {
  variant: ButtonVariant;
  value: string;
  ariaLabel: string;
  onClick?: (evt?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: ReactNode;
  state?: ButtonState;
  mode?: ButtonMode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  testId?: string;
};

export const Button: FC<Props> = ({
  variant,
  value,
  ariaLabel,
  onClick,
  icon,
  type,
  testId,
  disabled = false,
  state = 'normal',
  mode = 'dark',
}) => {
  return (
    <button
      className={mergeClasses(classes.root, classes.button, {
        [classes.primary]: variant === 'primary',
        [classes.secondary]: variant === 'secondary',
        [classes.success]: variant === 'success',
        [classes.error]: variant === 'error',
        [classes.normal]: state === 'normal',
        [classes.outline]: state === 'outline',
        [classes.loading]: state === 'loading',
        [classes.lightMode]: mode === 'light',
        [classes.darkMode]: mode === 'dark',
      })}
      onClick={onClick}
      disabled={state === 'loading' ? true : disabled}
      type={type}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {state !== 'loading' ? (
        <>
          {icon && <span className={classes.icon}>{icon}</span>}
          <span className={classes.value}>{value}</span>
        </>
      ) : (
        <Loader />
      )}
    </button>
  );
};
