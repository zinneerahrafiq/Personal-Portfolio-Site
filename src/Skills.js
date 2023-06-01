import React from 'react';
import './App.css';

import FlippingCard from './components/FlippingCard';

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className="content">
        <section id="skills">
          <h2 className='skillsh2'>Skills</h2>
          <ul>
            <li>Web Application Development using MERN stack</li>
            <li>Mobile Application Development using Flutter</li>
            <li>Java Programming</li>
            <li>Python Programming basics</li>
            <li>Data analytics using Knime</li>
            
            
          </ul>
          <section id="card-work" className="card-work-container" >
        <h2 className='skillsh2'>Work Examples</h2>
        </section>
          
        </section>
      
        <section id="cards" className='skills-container'>
          <p>
            Click on the cards below to flip them and view the name and link of the project
          </p>
        <section id="card-work" className="card-work-container" >

          <FlippingCard
          cardName="Mental Health Website"
        backContent="An online platform to help people struggling with mental health connect with therapists with access to games and a chatbot to vent out their feelings"
        frontImage="mentalhealth.png"
        link="https://github.com/jazil10/MentalEase"
          ></FlippingCard>
        
        <FlippingCard
          
          cardName="Railway Reservation System"
        backContent="A railway booking system specially made to automate the task of booking tickets for trains. users are allowed to book tickets, cancel tickets, and view all trains. "
        frontImage="railway.png"
        link="https://github.com/zinneerahrafiq/DBMS-Railway-Management-System-Project.git"
          ></FlippingCard>
       
       <FlippingCard
          
          cardName='Games Database'
        backContent=" a database to make searching and sorting easy. made with data structures
         "
        frontImage="games.png"
        link="https://github.com/jazil10/DSPROJECT.git"
        
          ></FlippingCard>
      
        </section>
        </section>

        
      </div>
    </div>
  );
};

export default Skills;
