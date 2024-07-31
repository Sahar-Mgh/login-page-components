import React from 'react';
import PropTypes from 'prop-types';
import './FlexItem.css';

interface FlexItemProps {
  children: React.ReactNode;
  grow?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  className?: string;
}

const FlexItem: React.FC<FlexItemProps> = ({
  children,
  grow = 0,
  shrink = 1,
  basis = 'auto',
  alignSelf = 'auto',
  className = '',
}) => {
  const classNames = `flex-item ${className}`;
  return (
    <div
      className={classNames}
      style={{
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        alignSelf: alignSelf,
      }}
    >
      {children}
    </div>
  );
};

FlexItem.propTypes = {
  children: PropTypes.node.isRequired,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
  className: PropTypes.string,
};

export default FlexItem;
