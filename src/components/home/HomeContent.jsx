import { useState, useEffect } from 'react';
import HomeIntro from './/HomeIntro';
import ImageModal from '../ImageModal';
import HomeGrid from './HomeGrid';
import BookNow from '../buttons/BookNow';
import Reviews from '../Reviews';

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

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        dismisModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
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
      <BookNow />
      <Reviews />
    </div>
  );
}