import React from 'react';

export default function CroppedImage({ imageSrc, alt, action, centerX = 50, centerY = 50 }) {
  // Overrides just the specified attributes over the css styles associated with the class
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