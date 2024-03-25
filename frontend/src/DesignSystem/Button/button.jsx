import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';
import Loader from '../utilComponents/loader';
import SolidIcon from '@/_ui/Icon/SolidIcons';
// eslint-disable-next-line import/no-unresolved
import { Slot } from '@radix-ui/react-slot';
// eslint-disable-next-line import/no-unresolved
import { cva } from 'class-variance-authority';
import './button.scss';
import { getDefaultIconFillColor, defaultButtonFillColour, getIconSize, getButtonWidth } from './buttonUtils.js';

const buttonVariants = cva('flex justify-center items-center font-medium', {
  variants: {
    variant: {
      primary: `
        text-text-on-solid bg-button-primary hover:bg-button-primary-hover
        active:bg-button-primary-pressed active:border-border-accent-strong
        disabled:bg-button-primary-disabled border-none
        interactice-focus focus-visible:outline-none	`,
      secondary: `
        text-text-default border-1 border-solid border-border-accent-weak
        bg-button-secondary hover:border-border-accent-strong
        hover:bg-button-secondary-hover active:bg-button-secondary-pressed
        active:border-border-accent-strong 
        disabled:border-border-default 
        disabled:bg-button-secondary-disabled disabled:text-text-disabled  focus-visible:border-border-accent-weak
        interactive-focus-nonsolid  focus-visible:outline-none 	
      `,
      outline: `
        text-text-default border-1 border-solid border-border-default
        bg-button-secondary hover:border-border-default
        hover:bg-button-outline-hover active:bg-button-outline-pressed
        active:border-border-strong 
        disabled:border-border-default 
        disabled:bg-button-outline-disabled disabled:text-text-disabled focus-visible:border-border-default
        interactive-focus-nonsolid focus-visible:interactive-focus-outline 	
      `,
      ghost: `
        border-none text-text-default bg-[#ffffff00] hover:bg-button-outline-hover
        active:bg-button-outline-pressed focus-visible:bg-button-outline
        interactive-focus-nonsolid disabled:text-text-disabled focus-visible:interactive-focus-outline border-none
        	
      `,
      ghostBrand: `
        border-none text-text-accent bg-[#ffffff00] hover:bg-button-secondary-hover
        active:bg-button-secondary-pressed focus-visible:bg-button-outline
        disabled:text-text-disabled focus-visible:interactive-focus-outline border-none interactive-focus-nonsolid
        	
      `,
      dangerPrimary: `
        text-text-on-solid bg-button-danger-primary hover:bg-button-danger-primary-hover
        active:bg-button-danger-primary-pressed disabled:bg-button-danger-primary-disabled
        border-none interactice-focus focus-visible:outline-none	
      `,
      dangerSecondary: `
        text-text-default border-1 border-solid border-border-danger-weak
        bg-button-secondary hover:border-border-danger-strong
        hover:bg-button-danger-secondary-hover
        active:border-border-danger-strong active:bg-button-danger-secondary-pressed
        disabled:text-text-disabled disabled:border-border-default disabled:bg-button-danger-secondary-disabled
        focus-visible:border-border-danger-weak focus-visible:interactive-focus-outline interactive-focus-nonsolid
        	
      `,
      dangerGhost: `
        border-none bg-[#ffffff00] text-text-default hover:bg-button-danger-secondary-hover
        active:bg-button-danger-secondary-pressed disabled:border-border-default
        disabled:bg-button-danger-secondary-disabled
        disabled:text-text-disabled focus-visible:interactive-focus-outline interactive-focus-nonsolid 	
      `,
    },
    size: {
      large: `h-[40px]  gap-[8px]  py-[10px] rounded-[10px] text-lg`,
      default: `h-[32px] gap-[6px]  py-7px] rounded-[8px] text-base`,
      medium: `h-[28px]  gap-[6px]  py-[5px] rounded-[6px] text-base`,
      small: `h-[20px] gap-[4px] px-[8px] py-[2px] rounded-[4px] text-sm`,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

const Button = React.forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      leadingIcon,
      trailingIcon,
      isLoading,
      disabled,
      asChild = false,
      fill = '',
      iconOnly = false, // as normal button and icon have diff styles make sure to pass it as truw when icon only button is used
      ...props
    },
    ref
  ) => {
    const iconFillColor = !defaultButtonFillColour.includes(fill) && fill ? fill : getDefaultIconFillColor(variant);
    const Comp = asChild ? Slot : 'button';
    const leadingIconElement = leadingIcon && (
      <SolidIcon name={leadingIcon} height={getIconSize(size)} width={getIconSize(size)} fill={iconFillColor} />
    );
    const trailingIconElement = trailingIcon && (
      <SolidIcon name={trailingIcon} height={getIconSize(size)} width={getIconSize(size)} fill={iconFillColor} />
    );

    return (
      <Comp
        className={
          cn(buttonVariants({ variant, size, isLoading, className, iconOnly })) + ' ' + getButtonWidth(size, iconOnly)
        }
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {isLoading ? (
          <Loader color={iconFillColor} />
        ) : (
          <>
            {leadingIconElement}
            {props.children}
            {trailingIconElement}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button'; //debugging purposes and helpful in React Developer Tools

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'ghost',
    'ghostBrand',
    'dangerPrimary',
    'dangerSecondary',
    'dangerGhost',
  ]),
  size: PropTypes.oneOf(['large', 'default', 'medium', 'small']),
  isLoading: PropTypes.bool,
  iconOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  asChild: PropTypes.bool,
  fill: PropTypes.string,
  leadingIcon: PropTypes.string,
  trailingIcon: PropTypes.string,
};
Button.defaultProps = {
  className: '',
  variant: 'primary',
  size: 'default',
  isLoading: false,
  disabled: false,
  asChild: false,
  iconOnly: false,
  fill: '',
  leadingIcon: '',
  trailingIcon: '',
};

export { Button, buttonVariants };