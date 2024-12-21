import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function SolariumCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'Solarium with white walls and terracotta files on the floor. Steps down are visible. View of woods in the background';
  const english = (<>
    <h3>Solarium</h3>
    <p>The solarium/terrace is accessible via steps from the garden or directly from the master bedroom. Given the extra height, this is a great place to catch the sun or grab a morning coffee or late drink. Let the kids run riot in the garden while you enjoy some grown-up time above them.</p>
    <p>There's a patio table with four chairs for some informal dining or there's space for the main outdoor table and sun loungers if you want to bring them up.</p>
  </>);
  
  const frenchAlt = "Solarium avec murs blancs et dossiers en terre cuite au sol. Des marches descendantes sont visibles. Vue des bois en arrière-plan";
  const french = (<>
    <h3>Le solarium</h3>
    <p>Le solarium/balcon est accessible de la chambre du haut ou du jardin par l'escalier extérieur. En hauteur et dégagé, il est équipé d'un 2ème salon de jardin pour profiter du soleil au calme. C'est un plaisir d'y boire son premier café le matin.</p>
    <p>C'est aussi l'endroit parfait où se réfugier quand les enfants jouent avec l'eau. L'accès extérieur permet de monter aisément les transats pour bouquiner au calme.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/oleron_solarium_1600.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}