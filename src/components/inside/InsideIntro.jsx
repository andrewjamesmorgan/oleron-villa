import { useContext } from 'react';
import { UserContext } from '../../App';

export default function InsideIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Dans la maison - WIP" : "Inside the house - WIP"}</h1>
        <img
          src="../../images/outside/oleron-landscapes_1900.png"
          alt={language === "en" ? "Three images showing off features of Ile d'Oleron. The first is a pink flower, the second is a pink fishing hut and a series of colorful flags from lobster/crab pot, the third is a bare footprint on a sandy beach"
                                : "Trois images mettant en valeur les caractéristiques de l'Île d'Oléron. La première est une fleur rose, la seconde est une cabane de pêche rose et une série de drapeaux colorés provenant d'un casier à homard/crabe, la troisième est une empreinte nue sur une plage de sable."}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>TODO</h2> }
        { language === "fr" && <h2>TODO</h2> }
      </div>
    </>
  );
}