import React from 'react';
import './Thumbnails.css'; // Make sure to adjust the path according to your project structure

const Thumbnail = () => {
  return (
    <div className="flex-image-section">
      <div 
        className="flex-image-item" 
        style={{ backgroundImage: `url('/path-to-your-image1.jpg')` }}
      >
        <div className="flex-image-overlay">
          <div className="flex-image-title">Image 1 Title</div>
        </div>
      </div>
      <div 
        className="flex-image-item" 
        style={{ backgroundImage: `url('/path-to-your-image2.jpg')` }}
      >
        <div className="flex-image-overlay">
          <div className="flex-image-title">Image 2 Title</div>
        </div>
      </div>
      <div 
        className="flex-image-item" 
        style={{ backgroundImage: `url('/path-to-your-image3.jpg')` }}
      >
        <div className="flex-image-overlay">
          <div className="flex-image-title">Image 3 Title</div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
