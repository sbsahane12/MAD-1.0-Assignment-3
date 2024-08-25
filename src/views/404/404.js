import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './404.css';

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <h1>Page Not Found</h1>
      <div className="container">

        <a className='error' href="/">Go to Home</a>
      </div>
      <img className='img' src={require('./404Img.png')} alt="" />
      <Footer />
    </div>
  )
}

export default PageNotFound
