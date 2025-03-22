import { useContext } from 'react';
import { UserContext } from '../../App';
import BookNow from '../buttons/BookNow';

export default function OutsideIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='outside-intro' className='banner-image-text'>
        <h1>{language === "fr" ? "En dehors de la maison" : "Outside the house"}</h1>
        <img
          src="../../images/outside/Oleron_Outside_House_1442.jpg"
          alt={language === "en" ? "View of a house with white walls and blue shutters. Fence has pink hollyhock flowers. Sandy path leads into the woods."
                                : "Vue d'une maison aux murs blancs et volets bleus. La clôture a des fleurs de rose trémière roses. Un chemin de sable mène dans les bois."}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>Great outdoor space for entertaining together with easy access to the beach</h2> }
        { language === "en" && <p>Oléron Villa is set in a spacious garden with a large terrace and first floor solarium while still leaving lots of space for the kids to play. The garden backs onto the woods and it's a short walk or cycle through there to get to a great family-friendly beach.</p>}
        { language === "en" && <p>On the practical side, there is loads of space for private parking - room for at least four cars. Park-up and enjoy cycling and walking everywhere.</p>}
        { language === "fr" && <h2>A l'extérieur</h2> }
        { language === "fr" && <p>Oléron Villa est implantée sur un large jardin de sable avec une terrasse de 50m2. Au 1er et accessible par un escalier extérieur, le solarium vous offre un espace supplémentaire au calme.</p>}
        { language === "fr" && <p>A l'arrière du jardin commence la forêt domaniale, et ses dizaines d'opportunités de promenade à pied, en vélo ou tout simplement, une route délicieuse vers la plage.</p>}
        { language === "fr" && <p>D'un point de vue pratique, il y a suffisamment de place pour garer plusieurs voitures, devant la maison, sur le côté ou dans le garage. Notre plus grand plaisir en arrivant est de laisser les clés de la voiture dans le tiroir et faire tous nos déplacements en vélo.</p>}
      </div>
      <BookNow />
    </>
  );
}