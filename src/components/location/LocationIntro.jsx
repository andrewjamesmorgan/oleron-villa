import { useContext } from 'react';
import { UserContext } from '../../App';

export default function LocationIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Situation" : "Location"}</h1>
        <img
          src="../../images/location/oleron-drone.jpg"
          alt={language === "en" ? "Drone image showing a white house at the front, with forrest behind it, and then the ocean behid that"
                                : "Image de drone montrant une maison blanche devant, avec une forêt derrière, puis l'océan derrière."}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>Where to find Oléron Villa</h2> }
        { language === "en" && <p>Oléron Villa is located on the beautiful island of Ile d'Oléron just off France's Atlantic coast - seperated from the mainland by a free bridge.</p> }
        { language === "fr" && <h2>Où se trouve Oléron Villa</h2> }
        { language === "fr" && <p>Oléron Villa se situe sur l'île d'Oléron, côte Atlantique, reliée au continent par un pont (viaduc) gratuit.</p> }
      </div>
    </>
  );
}