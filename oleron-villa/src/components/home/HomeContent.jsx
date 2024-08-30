import { useState } from 'react';
import HomeIntro from './/HomeIntro';
import ImageModal from '../ImageModal';
import HomeGrid from './HomeGrid';

export default function Home() {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  function imageClicked(src, alt) {
    setModalSrc(src);
    setModalAlt(alt);
  }

  function dismisModal() {
    setModalSrc(null);
    setModalAlt(null);
  }
  
  return (
    <div className='space-above'>
      <HomeIntro />
      { modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <HomeGrid
        action={imageClicked}
      />
    </div>
  );
}