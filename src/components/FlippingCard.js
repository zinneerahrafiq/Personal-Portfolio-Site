import React, { useState } from 'react';
import '../styles/FlippingCard.css';

const FlippingCard = ({ frontImage,cardName, backContent, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    window.location.href = link;
  };

  return (
    <div
      className={`cardflip ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Front Image" />
          
        </div>
        <div className="card-back">
            <h2>{cardName}</h2>
          <p>{backContent}</p>
          <button onClick={handleLinkClick} className='gitbutton'>Visit Github Link</button>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
