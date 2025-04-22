import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal';
import FacilitiesGrid from './FacilitiesGrid';
import FacilitiesIntro from './FacilitiesIntro';
import BookNow from '../buttons/BookNow';
import Reviews from '../Reviews';

export default function FacilitiesContent() {
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
      <FacilitiesIntro />
      { modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <FacilitiesGrid
        action={imageClicked}
      />
      <BookNow />
      <Reviews />
    </div>
  );
}

