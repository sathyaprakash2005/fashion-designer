import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './View2.css'; // Optional if you have styles
import Navbar1 from '../Navbar1/Navbar1';

const View2 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/images2')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched images:", data); // You can check this
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching images:", err);
        setLoading(false);
      });
  }, []);
  const handleDelete = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/delete2/${id}`);
          alert(res.data.message);
          // Remove deleted image from state
          setImages(prev => prev.filter(img => img._id !== id));
          setSelectedId(null); // reset
        } catch (err) {
          console.error("Delete failed:", err);
          alert("Failed to delete image");
        }
      };
  

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <Navbar1/>
    <div className="image-gallery">
      {images.map((img, index) => (
        <div
          key={img._id}
          className="image-card"
          onClick={() => setSelectedId(img._id)}
        >
          <img src={img.image} alt={`img-${index}`} />
          
          {/* Show delete button only if image is selected */}
          {selectedId === img._id && (
            <button className="delete-btn" onClick={() => handleDelete(img._id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default View2;
