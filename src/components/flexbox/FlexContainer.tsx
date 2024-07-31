import React from 'react';
import PropTypes from 'prop-types';
import './FlexContainer.css';

interface FlexContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  className?: string;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  className = '',
}) => {
  const classNames = `flex-container ${className}`;
    return (
    <div
      className={classNames}
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
};

FlexContainer.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  className: PropTypes.string,
};

export default FlexContainer;
