import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function BeachCell({action}) {
  const { language } = useContext(UserContext);

  const englishAlt = 'View of a wide-sandy beach, with the ocean. Clear bule, sunny sky';
  const english = (<>
    <h3>Beach</h3>
    <p>Just a few minutes walk or cycle from the house (via a traffic-free path through the woods) and you're at a beautiful beach.</p>
    <p>There's lots of golden sand which gently slopes into the sea - making it perfect for young families. For the more adventurous, the sea here is popular with surfers (and in the summer there's a surf school right where the path hits the beach) and there are other activities such as sailing and land yachts.</p>
    <p>The beach has been awarded the <a href="http://www.pavillonbleu.org/" title="Pavillon Bleu award" target="Pavillon Bleu award" alt="Pavillon Bleu award">Pavillon Bleu</a> accolade in recognition of its cleanliness.</p>    
    <p>We recommend <a href="http://www.ecole-take-off.com/" title="Take Off Surf School" target="_new">Take Off surf school</a> - a small, independent surf school operating from our local beach - they provide regular group lessons during the summer and lessons by appointment during the rest of the year. The instructor speaks English as well as French.</p>
  </>);
  
  const frenchAlt = "Vue sur une large plage de sable fin, avec l'océan. Bleu clair, ciel ensoleillé";
  const french = (<>
    <h3>La plage</h3>
    <p>Reconnue par le label <a href="http://www.pavillonbleu.org/" target="Pavillon Bleu award" alt="Plage Pavillon Bleu" title="Plage Pavillon Bleu">Pavillon Bleu</a>, la plage du Grand Village est exceptionnelle. Sa pente étant faible, la plage se découvre très loin à marée basse, laissant quelques grandes piscines naturelles qui chauffent au soleil et font le plaisir des jeunes enfants. La mer a des vagues permettant la pratique du bodyboard et du surf (avec deux écoles de surf dans le village).</p>
    <p>Vous trouverez peut-être aussi des luisettes, ces petits coquillages plats très fins à apprécier avec un peu de vinaigrette.</p>
    <p>Nous recommandons <a href="http://www.ecole-take-off.com/" title="Ecole de surf ile d'Oléron Take Off" target="_new">Take Off école de surf</a> - une petite école de surf indépendante d'exploitation de notre plage locale - ils offrent des cours collectifs réguliers au cours de l'été et des leçons sur rendez-vous pendant le reste de l'année.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/oleron-beach.jpg"
        alt={language === "fr" ? frenchAlt : englishAlt}
        action={action}
        body={language === "fr" ? french : english}
    />
  );
}