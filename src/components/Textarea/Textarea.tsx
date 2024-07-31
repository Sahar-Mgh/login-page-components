import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

interface TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  variant?: 'default' | 'outline' | 'text';
  rows?: number;
  cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  color = 'primary',
  variant = 'default',
  rows = 4,
  cols = 50,
}) => {
  const className = `textarea ${variant} ${color}`;

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      rows={rows}
      cols={cols}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default Textarea;
