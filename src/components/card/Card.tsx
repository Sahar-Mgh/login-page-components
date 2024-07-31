import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, footer, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  footer: PropTypes.node,
  onClick: PropTypes.func,
};

export default Card;
