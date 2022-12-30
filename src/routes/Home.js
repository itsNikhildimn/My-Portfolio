import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import"./HomeStyles.css";
const Home = () => {
  return <div>
    <Navbar/>
    <Heroimg/>
    <div className='head'>
      <hr/>
      <p>Some of my leatest work</p>
      <hr/>
    </div>
    <Work />
    <Footer/>
  </div>
};

export default Home