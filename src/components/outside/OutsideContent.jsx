import { useState } from 'react';
import ImageModal from '../ImageModal';
import OutsideGrid from './OutsideGrid';
import OutsideIntro from './OutsideIntro';

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
    </div>
  );
}

