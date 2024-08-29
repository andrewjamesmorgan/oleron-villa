import { useState } from 'react';
import HomeIntro from '../components/home/HomeIntro';
import ImageModal from '../components/ImageModal';
import HomeGrid from '../components/HomeGrid';

export default function Home() {
  const [modalSrc, setModalSrc] = useState(null);
  const [setModalAlt] = useState(null);

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
          altText="Oleron Garden"
        />
      }
      <HomeGrid
        action={imageClicked}
      />
    </div>
  );
}