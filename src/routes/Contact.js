import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
import Abouticon from '../components/Abouticon';
const Contact = () => {
 
         return (
         <div>
    <Navbar/>
    <Heroimg2 heading="CONTACT." text="Get in touch with me via social media or email" icon=<Abouticon/> />
   
   <Form/>
    <Footer/>
  </div>
  );
};

export default Contact