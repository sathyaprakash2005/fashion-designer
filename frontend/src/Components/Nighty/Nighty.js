import React, { useState, useEffect } from 'react'
import './Nighty.css';
import { Link } from 'react-router-dom'
import what from '../../Assets/images/whatsapp.png'
import ni_1 from '../../Assets/images/night-1.jpg'
import ni_2 from '../../Assets/images/night-2.jpg'
import ni_3 from '../../Assets/images/night-3.jpg'
import ni_4 from '../../Assets/images/night-4.jpg'
import Add3 from '../Add3/Add3';
import Navbar1 from '../Navbar1/Navbar1';
const Nighty = () => {
     const [activeCard, setActiveCard] = useState(null);
     const [showUploader, setShowUploader] = useState(false);
      
        useEffect(() => {
          document.body.classList.add('saree-bg');
          return () => {
            document.body.classList.remove('saree-bg');
          };
        }, []);
        const cards = [
            {
              id: 1,
              image: ni_1,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-1',
            },
            {
              id: 2,
              image: ni_2,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-2',
            },
            {
              id: 3,
              image: ni_3,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-3',
            },
            {
              id: 4,
              image: ni_4,  
              name: 'Click the whatsapp icon to buy',
              desc: '',
              customClass: 'ni-style-4',
            },
            ]
    const handleCardClick = (card) => {
      setActiveCard(card);
    };
  
    const handleClose = () => {
      setActiveCard(null);
    };
    return(
         <>
              <Navbar1/>
              <div className="night-wrapper">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`night-card ${card.customClass}`}
                    onClick={() => handleCardClick(card)}
                  >
                    <img src={card.image} alt={card.name} className="night-img" />
                  </div>
                ))}
              </div>
        
               <div className="saree-footer">
                      <button className="add-button" onClick={() => setShowUploader(true)}>
                        Add
                      </button>
                    </div>
                    {showUploader && (
                      <div className="modal-overlay" onClick={() => setShowUploader(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                          <Add3/>
                        </div>
                      </div>
                    )}
                    <div className='ni-btn'>
      <Link to="/view3"><button>View All</button></Link>
     </div>
            
      </>
    );
};
export default Nighty;