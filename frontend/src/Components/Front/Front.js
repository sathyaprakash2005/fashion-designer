import React from 'react'
import './Front.css'
import { Link } from 'react-router-dom';
import shop from '../../Assets/images/shop.jpg';
import Footer from '../Footer/Footer';

const Front = () => {
  return (
    <div>
    <div className='sat-container'>
      <img src={shop} alt="Fashion Shop" />
      <h1>SRI SHIVA</h1>
      <h2>FASHION DESIGNER</h2>
      <Link to="/login"><button className='fr-btn'>Login</button></Link>
    </div>
    <div className="front-container">
      <h1 className="main-title">Welcome to My Website</h1>
      <p className="tagline">Buy Things</p>
      <p className="tagline">Go Happy 😊</p>
    </div>
    <Footer/>
    </div>

  )
}

export default Front
