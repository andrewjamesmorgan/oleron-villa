import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal';
import StayGrid from './StayGrid';
import StayIntro from './StayIntro';

export default function StayContent() {
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);

  useEffect(() => {
    const currentTenantValue = localStorage.getItem('ol-tenant');
    if (currentTenantValue !== 'true') {
      localStorage.setItem('ol-tenant', 'true');
      window.location.reload();
    }
  }, []);

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
      <StayIntro />
      {modalSrc && 
        <ImageModal
          onClose={dismisModal}
          imageSrc={modalSrc}
          altText={modalAlt}
        />
      }
      <StayGrid
        action={imageClicked}
      />
    </div>
  );
}

