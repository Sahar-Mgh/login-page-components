import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  padding = '1rem',
  margin = '0',
  backgroundColor = 'transparent',
  borderRadius = '0',
  className = '',
}) => {
  const style = {
    padding,
    margin,
    backgroundColor,
    borderRadius,
  };

  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
  margin: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
};

export default Container;
