import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  variant?: 'default' | 'outline' | 'text';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false, color = 'primary', variant = 'default' }) => {
  const className = `button ${variant} ${color}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
};

export default Button;
