import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function GardenCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'White house set in a garden with lawn and trees. Table and chairs visible on the terrace';
  const english = (<>
    <h3>Garden</h3>
    <p>Just to remind you how close you are to the beach, part of the garden is still made of sand - great fun for the kids to play in. There are a number of plants to provide some interest - including a fig tree and some tomato plants (help yourself if you're there when they're in fruit).</p>
    <p>The garden backs directly onto the woods - the only thing that separates the house from the sea.</p>
  </>);
  
  const frenchAlt = "Maison blanche située dans un jardin avec pelouse et arbres. Table et chaises visibles sur la terrasse";
  const french = (<>
    <h3>Le jardin</h3>
    <p>Oui, c'est un jardin de sable : la dune démarre ici. Les enfants adorent cet espace où ils s'entrainent aux jeux de plage. Les jours de vent d'ouest, on y entend la mer.</p>
    <p>Si votre séjour coïncide avec la saison des figues, vous pourrez vous régaler!</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/oleron_garden_1600.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
        centerX={30}
        centerY={60}
    />
  );
}