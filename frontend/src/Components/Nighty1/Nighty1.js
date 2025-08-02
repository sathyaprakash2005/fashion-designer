import React, { useState, useEffect } from 'react'
import './Nighty1.css';
import { Link } from 'react-router-dom'
import what from '../../Assets/images/whatsapp.png'
import ni_1 from '../../Assets/images/night-1.jpg'
import ni_2 from '../../Assets/images/night-2.jpg'
import ni_3 from '../../Assets/images/night-3.jpg'
import ni_4 from '../../Assets/images/night-4.jpg'
import Add from '../Add/Add';
const Nighty1 = () => {
     const [activeCard, setActiveCard] = useState(null);
     const [selectedImage, setSelectedImage] = useState(null);
               const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
               const [showForm, setShowForm] = useState(false);
               const [orderSuccessMsg, setOrderSuccessMsg] = useState('');
      
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
    const handleOrderClick = (img) => {
    setSelectedImage(img);
    setShowForm(true);
    setOrderSuccessMsg('');
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      ...formData,
      image: selectedImage.image,
      caption: selectedImage.caption || 'No caption',
      date: new Date().toLocaleString()
    };

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (res.ok) {
        setOrderSuccessMsg("✅ Order placed successfully!");
        setFormData({ name: '', phone: '', address: '' });

        setTimeout(() => {
          setShowForm(false);
          setOrderSuccessMsg('');
        }, 2000); // hide modal after 2 seconds
      } else {
        setOrderSuccessMsg("❌ Failed to place order.");
      }
    } catch (err) {
      console.error("Order error:", err);
      setOrderSuccessMsg("❌ Error placing order.");
    }
  };
    return(
         <>
            
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
        
              {activeCard && (
                <div className="night-screen" onClick={handleClose}>
                  <div className="night-content">
                    <img
                      src={activeCard.image}
                      alt={activeCard.name}
                      className="ni-img"
                    />
                    <h2 className="night-title">{activeCard.name}</h2>
                    <p className="night-desc"><button onClick={() => handleOrderClick(activeCard)} className='saree1-btn'>Order now</button>{activeCard.desc}</p>
                  </div>
                </div>
              )}
              {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>Order Form</h2>
            <img src={selectedImage.image} alt="selected" className='preview-img' />

            {orderSuccessMsg && <p className="order-success-msg">{orderSuccessMsg}</p>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit Order</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
              <div className='ni-btn'>
      <Link to="/views3"><button>View All</button></Link>
     </div>
            
      </>
    );
};
export default Nighty1;