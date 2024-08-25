import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HomeImg from './HomeImg.png'
function Home() {
  return (
    <div>
      <Navbar />
        <h1>Home Page</h1>
        <img className='img' src={HomeImg} alt="" />
      <Footer />
    </div>
  );
}

export default Home;
