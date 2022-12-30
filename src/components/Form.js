import "./FormStyles.css";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

 const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_d5d0c3y', 'template_e7feetp', form.current, 'XtalZg50J19exrioM')
     e.target.reset()
  };

  return (
    <div className="form" >
      <h1>Send me an Email</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="left">
            <label>Your Name</label>
            <input type="text" id="name"></input>
            <label>Your Email</label>
            <input type="email" id="email"></input>
            <label>Subject</label>
            <input type="text" is="subject"></input>
            </div>
            <div className="right">
            <label>Message</label>
           <textarea id="message" rows="6" placeholder="Type Your Message here"/>
           <button className="submit">Submit</button>
          
           </div>
        </form>
    </div>
  );
  };
  

export default Form