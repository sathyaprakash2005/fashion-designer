import React, { useEffect, useState, useRef } from 'react';
import './Views2.css';
import Footer1 from '../Footer1/Footer1';

const Views2 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [showForm, setShowForm] = useState(false);
  const [orderSuccessMsg, setOrderSuccessMsg] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/images2')
      .then(res => res.json())
      .then(data => {
        const imageList = Array.isArray(data) ? data : data.images || [];
        setImages(imageList);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching images:", err);
        setLoading(false);
      });
  }, []);

  const scroll = (direction) => {
    const itemWidth = containerRef.current.querySelector('.scroll-item').offsetWidth + 20;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;

    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
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

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className='saree-word'>
        <h1>SAREE'S COLLECTION</h1>
      </div>

      <div className="scroll-gallery-wrapper">
        <button className="scroll-button left" onClick={() => scroll('left')}>&#8592;</button>

        <div className="scroll-container" ref={containerRef}>
          {images.map((img, index) => (
            <div key={index} className="scroll-item">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front" onClick={() => handleOrderClick(img)}>
                    <img src={img.image} alt={`img-${index}`} />
                  </div>
                  <div className="flip-card-back">
                    <p>{img.caption || 'ORDER NOW'}</p>
                    <button onClick={() => handleOrderClick(img)}>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll('right')}>&#8594;</button>
      </div>

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

      <Footer1 />
    </>
  );
};

export default Views2;
