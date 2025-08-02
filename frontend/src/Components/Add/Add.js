import React, { useState } from 'react';
import camera from '../../Assets/images/camera.png';
import './Add.css';

const Add = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setSelectedImage(null);
        setIsUploaded(true); 
        setSuccessMessage("✅ Image uploaded successfully!");
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      alert("❌ Upload failed.");
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="add-container">
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      {!isUploaded && (
        <>
          <input
            type="file"
            accept="image/*"
            id="upload-btn"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

          <label htmlFor="upload-btn" className="add-image-btn">
            <img src={camera} alt='' />
            <p>Add Image</p>
          </label>

          {selectedImage && (
            <div className="upload-image" onClick={handleRemoveImage}>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="preview-img"
              />
              <p className="remove-note">Click to remove</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpload();
                }}
                className="upload-btn"
              >
                Upload Image
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Add;
