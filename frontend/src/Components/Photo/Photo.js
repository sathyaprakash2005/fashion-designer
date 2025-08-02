import React from 'react'
import './Photo.css'
import { Link } from 'react-router-dom';
import shop from '../../Assets/images/shop.jpg';


const Photo = () => {
  return (
    <>
    <div className="hero">
            <div className="hero-content">
              <h1>Find <br /> Yourself <br /> Here</h1>
              <Link to="/home" className="watch-button">VIEW NOW</Link>
            </div>
            <div className="hero-image">
              <img src={shop} alt="Fashion Shop" />
            </div>
          </div>

          </>
  )
}

export default Photo
