import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

interface GridItemProps {
  children: React.ReactNode;
  columnSpan?: number;
}

const GridItem: React.FC<GridItemProps> = ({ children, columnSpan = 1 }) => {
  const itemStyle = {
    gridColumn: `span ${columnSpan}`,
  };

  return <div style={itemStyle}>{children}</div>;
};

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  columnSpan: PropTypes.number,
};

export default GridItem;
