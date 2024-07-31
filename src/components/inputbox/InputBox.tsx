import React from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';

interface InputBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  variant?: 'default' | 'outline' | 'text';
}

const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  color = 'primary',
  variant = 'default',
}) => {
  const className = `inputbox ${variant} ${color}`;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
    />
  );
};

InputBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
};

export default InputBox;
