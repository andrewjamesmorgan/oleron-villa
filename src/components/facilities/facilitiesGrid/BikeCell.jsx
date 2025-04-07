import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function BikeCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'A family of four cycling down a path through the woods';
  const english = (<>
    <h3>Cycling</h3>
    <p>One of the first things that I like to do when I arrive is to park the car and then lock away the keys for the duration. With the exception of big shopping trips, there's no need to get behind the wheel while you're staying here. The island has a great network of cycle paths (and unlike other places these are dedicated paths rather than a thin painted line along the side of busy roads). Here's a <a href="oleron_docs/carte-cycling-oleron.pdf" title="map of the major cycle paths on Ile d'Oléron" target="_blank">map of the major cycle paths on Ile d'Oléron</a> but there are lots of other, smaller paths as well. One of the paths runs right in front of Oléron Villa.</p>
    <p>In the garage, you'll find a selection of bike that you're free to use during your stay. Note that these aren't serviced between stays, and so we can gurantee their condition. Contact us for details.</p>
    <p>If you need additional bikes then there are a number of rental companies on the island.</p>
  </>);
  
  const frenchAlt = "Une famille de quatre personnes faisant du vélo sur un chemin à travers les bois";
  const french = (<>
    <h3>Velos</h3>
    <p>Une des premières choses que j'aime faire en arrivant est de garer la voiture et de ranger les clés pour toute la durée du séjour. À l'exception des grosses courses, il n'est pas nécessaire de prendre le volant pendant votre séjour ici. L'île dispose d'un excellent réseau de pistes cyclables (et contrairement à d'autres endroits, il s'agit de pistes dédiées, et non d'une simple ligne peinte le long de routes fréquentées). Voici une <a href="oleron_docs/carte-cycling-oleron.pdf" title="carte des principales pistes cyclables de l'île d'Oléron" target="_blank">carte des principales pistes cyclables de l'île d'Oléron</a>, mais il existe de nombreux autres petits chemins également. L'une de ces pistes passe juste devant Oléron Villa.</p>
    <p>Dans le garage, vous trouverez une sélection de vélos que vous êtes libre d'utiliser pendant votre séjour. Notez que ces vélos ne sont pas entretenus entre les séjours, et nous ne pouvons donc pas garantir leur état. Contactez-nous pour plus de détails.</p>
    <p>Si vous avez besoin de vélos supplémentaires, il existe plusieurs entreprises de location sur l'île.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron-cycling.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={70}
        centerY={50}
    />
  );
}