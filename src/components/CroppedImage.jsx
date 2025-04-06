import React from 'react';

export default function CroppedImage({ imageSrc, alt, action, centerX = 50, centerY = 50 }) {
  // Overrides any styles associated with the class
  const cropStyle = {
    objectPosition: `${centerX}% ${centerY}%`
  };

  return (
    <div className='croppedImage'>
      <img
        src={imageSrc}
        alt={alt}
        className='croppedImage'
        style={cropStyle}
        onClick={action}
      />
    </div>
  );
}