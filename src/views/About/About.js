import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AboutImg from './AboutImg.png'

function About() {
  return (
    <div>
      <Navbar />
      <h1>About-US Page</h1>
      <img className='img' src={AboutImg} alt="" />
      <Footer />
    </div>
  );
}

export default About;
