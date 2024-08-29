import React from 'react';

export default function CroppedImage({imageSrc, alt, action}) {
  console.log(imageSrc);
  return (
    <div className='croppedImage'>
      <img src={imageSrc} alt={alt} className='croppedImage' 
      onClick={action}
      />
    </div>
  );
}