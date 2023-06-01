

import React, { useState } from 'react';
 import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {

  const [formDetails, setFormDetails] = useState({
         name: '',
         email: '',
         message: '',
       });
    
      const inputChange = (e) => {
         const { name, value } = e.target;
         setFormDetails({
           ...formDetails,
           [name]: value,
         });
       };
      
       const linkedinUrl = 'https://www.linkedin.com/in/zinneerah-rafiq-99b579207/';
       const facebookUrl = 'https://www.facebook.com/zinneerah.rafiq.9';
       const instagramUrl = 'https://www.instagram.com/zinneerahrafiq/';
  return ( 
    <div className="containercenter">
      
      <section id="contact">
      <h2 className='form-heading'>LINKS!!</h2>
        <div className="contentcenter">
        
        <div className="social-icons">
         <div className="icon-column">
          
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
             <FaLinkedin size={50} color="d0947a" className="icon" />
           </a>
         </div>
         <div className="icon-column">
         
           <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
             <FaFacebook size={50} color="d0947a" className="icon" />
           </a>
         </div>
         <div className="icon-column">
         
           <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
             <FaInstagram size={50} color="d0947a" className="icon" />
           </a>
        </div>
       </div>
        </div>
      </section>

      

<section id="contact">
  <h2 className="form-heading">Send me an email</h2>
  <div className="contentcenter">
    <form action="https://formspree.io/f/xzbqqnrd" method="POST">
      <div className="form-column">
        <label htmlFor="name" className="form-label">
          Enter your name
        </label>
        <input
        placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={formDetails.name}
          onChange={inputChange}
        />
        <label htmlFor="name" className="form-label">
          Enter your email
        </label>

        <input
        placeholder="Enter your email"
          type="email"
          name="email"
          id="email"
          className="form-input"
          value={formDetails.email}
          onChange={inputChange}
        />

        <textarea
          name="message"
          className="form-textarea"
          placeholder="Enter your message"
          value={formDetails.message}
          onChange={inputChange}
          rows="10"
          cols="40"
        ></textarea>
         <button type="submit" className="btn form-btn"> 
                Send
              </button>

        <div className="form-row">
        <div className="left">
            <img src="boho.png" alt="Academic Background" />
          </div>

          <div className="right">
            <img src="boho.png" alt="Academic Background" />
          </div>
        </div>
      </div>
    </form>
  </div>
</section>


     

    </div>
  );
};

export default ContactPage;
