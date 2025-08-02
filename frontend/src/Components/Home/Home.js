import React, { useState, useEffect } from 'react';
import './Home.css';
import saree from '../../Assets/images/saree.png';
import eye from '../../Assets/images/eye.png';
import { Link } from 'react-router-dom';
import design from '../../Assets/images/Design.png';
import chudi from '../../Assets/images/chudi.png';
import front from '../../Assets/images/front.png';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.add('home-bg');
    return () => {
      document.body.classList.remove('home-bg');
    };
  }, []);

  return (
    <div className='page-bg'>
      <div className='head-cart'>
        <h1>SRISHIVA DESIGNER COLLECTION'S</h1>
      </div>

      <div className='home-cart'>
        <h1>Designer collections</h1>
      </div>

      <div className='saree-cart'>
        <h1></h1>
        <img src={saree} alt='' />
      </div>

      <div className='menu'>
        <div className={`toggle ${isActive ? 'active' : ''}`} 
        onMouseEnter={() => setIsActive(true)}
  onMouseLeave={() => setIsActive(true)}
  >
          <img src={eye} alt='Toggle eye icon' className='eye-icon' />
        </div>

        <ul className={`circular-menu ${isActive ? 'show' : ''}`}>
          <li className="li1">
            <Link to="/embrodery1">Embroidery</Link>
            <img src={design} alt='' />
          </li>
          <li className="li2">
            <Link to="/chudi1">Chudi</Link>
            <img src={chudi} alt='' />
          </li>
          <li className="li3">
            <Link to="/saree1">Saree</Link>
            <img src={front} alt='' />
          </li>
          <li className="li4">
            <Link to="/nighty1">Nighty</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
