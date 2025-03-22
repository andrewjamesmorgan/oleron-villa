import { useState } from 'react';
import ImageModal from '../ImageModal';
import FacilitiesGrid from './FacilitiesGrid';
import FacilitiesIntro from './FacilitiesIntro';
import BookNow from '../buttons/BookNow';

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
    </div>
  );
}

