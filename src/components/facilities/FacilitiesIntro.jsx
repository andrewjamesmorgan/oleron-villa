import { useContext } from 'react';
import { UserContext } from '../../App';

export default function FacilitiesIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Equipements" : "Facilities"}</h1>
        <img
          src="../../images/facilities/oleron_tv_1900.jpg"
          alt={language === "en" ? "Three images showing off features of Ile d'Oleron. The first is a pink flower, the second is a pink fishing hut and a series of colorful flags from lobster/crab pot, the third is a bare footprint on a sandy beach"
                                : "Trois images mettant en valeur les caractéristiques de l'Île d'Oléron. La première est une fleur rose, la seconde est une cabane de pêche rose et une série de drapeaux colorés provenant d'un casier à homard/crabe, la troisième est une empreinte nue sur une plage de sable."}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>Extremely well equipped house with everything you need and a few things that you don't but are great to have!</h2> }
        { language === "en" && <p>Oléron Villa has been equipped as a family home complete with all of the facilities you need such as a washing machine and dishwasher together with the extras that make staying here more fun - bikes, English and French TV, a great sound system and broadband internet throughout the house.</p> }
        { language === "fr" && <h2>Une maison très bien équipée avec tout ce dont vous aurez besoin</h2> }
        { language === "fr" && <p>Oléron Villa est une maison vaste et confortable, équipée avec tout le confort auquel vous pouvez vous attendre dans une maison de haut standing – matériel de cuisine, lave-vaisselle, lave-linge, mais aussi des vélos adulte, la télé câblée française et anglaise, ainsi qu'une connection internet haut-debit couvrant toute la maison.</p> }
      </div>
    </>
  );
}