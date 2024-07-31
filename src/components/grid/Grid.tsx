import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
}

const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = '16px' }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gap,
  };

  return <div style={gridStyle}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  gap: PropTypes.string,
};

export default Grid;
