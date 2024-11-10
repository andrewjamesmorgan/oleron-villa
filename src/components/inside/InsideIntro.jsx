import { useContext } from 'react';
import { UserContext } from '../../App';

export default function InsideIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "Dans la maison" : "Inside the house"}</h1>
        <img
          src="../../images/inside/Oleron_Lounge_1900.jpg"
          alt={language === "en" ? "Three images showing off features of Ile d'Oleron. The first is a pink flower, the second is a pink fishing hut and a series of colorful flags from lobster/crab pot, the third is a bare footprint on a sandy beach"
                                : "Trois images mettant en valeur les caractéristiques de l'Île d'Oléron. La première est une fleur rose, la seconde est une cabane de pêche rose et une série de drapeaux colorés provenant d'un casier à homard/crabe, la troisième est une empreinte nue sur une plage de sable."}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>The space in Oléron Villa is very generous and can comfortably house one or more families</h2> }
        { language === "fr" && <h2>Oléron Villa est une maison spacieuse pouvant aisément accueillir une ou plusieurs familles</h2> }
        { language === "en" && <p>Oléron Villa is very well proportioned house - not a (all too common) "cram as many beds into as small a space as possible" rental property. This is a house that we designed to be comfortable for our family to spend holidays in - with the extra space to hosts friends at the same time. We believe that this also makes it a very appealing place for other families to rent and spend time in.</p> }
        { language === "en" && <p>There are four generously sized bedrooms - two with en-suite bathrooms - and the master bedroom leads onto an open-air solarium, no better place to enjoy your first coffee of the morning or last glass of wine of the night!</p> }
        { language === "en" && <p>The main living area is a huge open-plan room with more than enough space for a comfortable lounge, dining area and kitchen.</p> }
        { language === "en" && <p>Take a look at the sections below for details of the different rooms.</p> }
        { language === "fr" && <p>Oléron Villa est une grande maison bien proportionnée, où les résidents ont de la place pour passer des vacances ensemble, sans pour autant se marcher les uns sur les autres.</p> }
        { language === "fr" && <p>Lors de la conception des plans, nous avons voulu créer une maison grande et confortable pour notre famille, avec de la place pour des visiteurs occasionnels. Nous espérons que vous apprécierez cette espace.</p> }
        { language === "fr" && <p>La maison a 4 chambres spacieuses, 2 d'entre elles avec leur propre salle d'eau. La chambre principale donne accès au solarium – un bonheur d'y prendre son café le matin.</p> }
        { language === "fr" && <p>La zone de vie principale est un grand salon moderne ouvert sur une cuisine aménagée, et équipé d'un home cinéma, 2 canapés, 2 fauteuils, et une grande table.</p> }
        { language === "fr" && <p>Pour plus d'informations, jetez un œil ci-dessous.</p> }
      </div>
    </>
  );
}