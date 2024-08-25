import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactImg from './ContactImg.png'
function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact-US Page</h1>
      <img className='img' src={ContactImg} alt="" />
      <Footer />
    </div>
  );
}

export default Contact;
