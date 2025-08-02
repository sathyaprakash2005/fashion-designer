import React, { useState, useEffect } from 'react'
import './Saree1.css'

import { Link } from 'react-router-dom'
import what from '../../Assets/images/whatsapp.png'
import saree_1 from '../../Assets/images/saree-1.jpg'
import saree_2 from '../../Assets/images/saree-2.jpg'
import saree_3 from '../../Assets/images/saree-3.jpg'
import saree_4 from '../../Assets/images/saree-4.jpg'
import saree_5 from '../../Assets/images/saree-5.jpg'
import saree_6 from '../../Assets/images/saree-6.jpg'
import saree_7 from '../../Assets/images/saree-7.jpg'
import saree_8 from '../../Assets/images/saree-8.jpg'
import saree_9 from '../../Assets/images/saree-9.jpg'
import saree_10 from '../../Assets/images/saree-10.jpg'
import saree_11 from '../../Assets/images/saree-11.jpg'
import saree_12 from '../../Assets/images/saree-12.jpg'
import saree_13 from '../../Assets/images/saree-13.jpg'
import saree_14 from '../../Assets/images/saree-14.jpg'
import saree_15 from '../../Assets/images/saree-15.jpg'
import saree_16 from '../../Assets/images/saree-16.jpg'
import saree_17 from '../../Assets/images/saree-17.jpg'
import saree_18 from '../../Assets/images/saree-18.jpg'
import saree_19 from '../../Assets/images/saree-19.jpg'
import saree_20 from '../../Assets/images/saree-20.jpg'
import saree_21 from '../../Assets/images/saree-21.jpg'
import saree_22 from '../../Assets/images/saree-22.jpg'
import saree_23 from '../../Assets/images/saree-23.jpg'
import saree_24 from '../../Assets/images/saree-24.jpg'
import saree_25 from '../../Assets/images/saree-25.jpg'
import saree_26 from '../../Assets/images/saree-26.jpg'
import saree_27 from '../../Assets/images/saree-27.jpg'

const Saree1 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [setCards] = useState([]);
   const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
    const [showForm, setShowForm] = useState(false);
    const [orderSuccessMsg, setOrderSuccessMsg] = useState('');

  
   useEffect(() => {
  document.body.classList.add('saree-bg');
  fetch('http://localhost:5000/sarees')
    .then(res => res.json())
    .then(data => {
      const formattedCards = data.map((item, index) => ({
        id: index + 1,
        image: item.imageUrl, // full image path from server
        name: 'Click here to order',
        desc: '',
        customClass: `cart-style-${index + 1}`
      }));
      setCards(formattedCards);
    });

      return () => {
        document.body.classList.remove('saree-bg');
      };
    }, []);
    const cards = [
        {
          id: 1,
          image: saree_1,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-1',
        },
        {
          id: 2,
          image: saree_2,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-2',
        },
        {
          id: 3,
          image: saree_3,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-3',
        },
        {
          id: 4,
          image: saree_4,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-4',
        },
        {
          id: 5,
          image: saree_5,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-5',
        },
        {
          id: 6,
          image: saree_6,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-6',
        },
        {
          id: 7,
          image: saree_7,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-7',
        },
        {
          id: 8,
          image: saree_8,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-8',
        },
        {
          id: 9,
          image: saree_9,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-9',
        },
        {
          id: 10,
          image: saree_10,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-10',
        },
        {
          id: 11,
          image: saree_11,  
          name: 'Click here to order ',
          desc: '',
          customClass: 'cart-style-11',
        },
        {
          id: 12,
          image: saree_12,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-12',
        },
        {
          id: 13,
          image: saree_13,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-13',
        },
        {
          id: 14,
          image: saree_14,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-14',
        },
        {
          id: 15,
          image: saree_15,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-15',
        },
        {
          id: 16,
          image: saree_16,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-16',
        },
        {
          id: 17,
          image: saree_17,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-17',
        },
        {
          id: 18,
          image: saree_18,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-18',
        },
        {
          id: 19,
          image: saree_19,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-19',
        },
        {
          id: 20,
          image: saree_20,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-20',
        },
        {
          id: 21,
          image: saree_21,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-21',
        },
        {
          id: 22,
          image: saree_22,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-22',
        },
        {
          id: 23,
          image: saree_23,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-23',
        },
        {
          id: 24,
          image: saree_24,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-24',
        },
        {
          id: 25,
          image: saree_25,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-25',
        },
        {
          id: 26,
          image: saree_26,  
          name: 'Click here to order',
          desc: '',
          customClass: 'cart-style-26',
        },
        {
          id: 27,
          image: saree_27,  
          name: 'click here to order',
          desc: '',
          customClass: 'cart-style-27',
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

  
  return (
    <>
    
      <div className="saree-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`saree-card ${card.customClass}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.image} alt={card.name} className="sare-img" />
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="saree-screen" onClick={handleClose}>
          <div className="saree-content">
            <img
              src={activeCard.image}
              alt={activeCard.name}
              className="sar-img"
            />
            <h2 className="saree-title">{activeCard.name}</h2>
            <p className="saree-desc"><button onClick={() => handleOrderClick(activeCard)} className='saree1-btn'>Order now</button>{activeCard.desc}</p>
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
      <div className='view-btn'>
        <Link to="/views"><button>View All</button></Link>      
        </div>
    </>
  )
}

export default Saree1
