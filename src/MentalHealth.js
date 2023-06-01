import React from 'react';
import './App.css';

import FlippingCard from './components/FlippingCard';

const MentalHealth = () => {

  return (
    <div className='homecontainer'>
      
      <FlippingCard
        frontContent="Click to flip"
        backContent="Mental Health Website Github"
        frontImage="mentalhealth.png"
        link="https://example.com"
      />
    <section id="home">
    
    </section>
    </div>
      
  //   );
  // return (
  //   <div className="content">
  //     <FlippingCard
  //       frontContent="Click to flip"
  //       backContent="Mental Health Website Github"
  //       frontImage="mentalhealth.png"
  //       link="https://example.com"
  //     />
  //   </div>
  );
};

export default MentalHealth;



