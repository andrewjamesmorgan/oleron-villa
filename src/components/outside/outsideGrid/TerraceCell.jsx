import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function TerraceCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'View of a terrace. Garden table and chairs. Sunloungers. Family playing ping pong. Garden and woods in the background.';
  const english = (<>
    <h3>Terrace</h3>
    <p>The terrace is a great sun-trap, catch some rays and then enjoy communal meals around a large patio table. There is plenty of space to leave out the table, barbecue and sun loungers while still leaving room for the kids to play.</p>
    <p>As you sit back, your view is over the garden and the woods beyond.</p>
  </>);
  
  const frenchAlt = "Vue sur une terrasse. Table et chaises de jardin. Chaises longues. Famille jouant au ping-pong. Jardin et bois en arrière-plan.";
  const french = (<>
    <h3>La terrasse</h3>
    <p>Sur la terrasse exposée sud sud-ouest, vous aurez le soleil la plus grande partie de la journée. Vous pourrez y apprécier votre pineau, melon charentais et fruits de mer à l'abri du parasol pendant que le barbecue grille votre poisson. Ensuite, rien ne vaut une petite sieste dans les bains de soleil.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/oleron_outdoor_facilities_1600.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}