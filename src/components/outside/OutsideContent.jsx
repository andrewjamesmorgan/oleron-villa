import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal';
import OutsideGrid from './OutsideGrid';
import OutsideIntro from './OutsideIntro';
import BookNow from '../buttons/BookNow';
import Reviews from '../Reviews';

export default function OutsideContent() {
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
      <OutsideIntro />
      { modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <OutsideGrid
        action={imageClicked}
      />
      <BookNow />
      <Reviews />
    </div>
  );
}

