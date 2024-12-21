import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function OutdoorEntertainingCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Large outdoor dining table, with 2 families sat around it, eating a meal';
  const english = (<>
    <h3>Outdoor entertaining</h3>
    <p>This is where you want to be spending your quality time!</p>
    <p>The main patio table seats twelve people when extended and has a large parasol so that you can eat out even at the hottest times of day.</p>
    <p>For cooking there's a charcoal barbecue.</p>
    <p>For soaking up some rays you'll find some comfy sun loungers or you can act like you're at the beach and spread some towels out on the sandy garden. Finally the first floor solarium lets you appreciate the sun while raising you above your enthusiastic kids below.</p>
  </>);
  
  const frenchAlt = "Grande table à manger extérieure, avec 2 familles assises autour, prenant un repas";
  const french = (<>
    <h3>Aménagement extérieur</h3>
    <p>C'est ici que vous passerez la plupart de votre temps.</p>
    <p>La table principale du patio peut accueillir douze personnes lorsqu'elle est déployée et dispose d'un grand parasol pour que vous puissiez manger dehors même aux heures les plus chaudes de la journée.</p>
    <p>Un barbecue (charbon de bois) vous attend pour de bonnes grillades.</p>
    <p>Pour les séances bronzage, des transats colorés vous permettront des moments de détentes, ou alors, vous pouvez tout simplement étendre vos serviettes dans le jardin et vous croire à la plage. Si vous voulez vous éloigner un peu des enfants trop bruyants, le solarium vous donne un endroit calme extérieur, isolé du jardin.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron-outdoor-table.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}