import React, { FC } from 'react';

import { Container, IconLeft, IconRight } from './styles';

interface PropTypes {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  variant?: 'contained' | 'outlined' | 'text' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconRight?: boolean;
  iconLeft?: boolean;
  disabled?: boolean;
  width?: string;
  height?: string;
  onClick?: (e: any) => any;
}

const Button: FC<PropTypes> = ({
  children,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  icon = null,
  disabled = false,
  ariaLabel = '',
  iconLeft = false,
  iconRight = false,
  width = 'auto',
  height = 'auto',
  size = 'md',
  onClick,
}) => (
  <Container
    type={type}
    color={color}
    variant={variant}
    disabled={disabled}
    aria-label={ariaLabel}
    width={width}
    height={height}
    onClick={onClick}
    size={size}
  >
    {iconLeft && <IconLeft>{icon}</IconLeft>}
    {children}
    {iconRight && <IconRight>{icon}</IconRight>}
  </Container>
);

export default Button;
