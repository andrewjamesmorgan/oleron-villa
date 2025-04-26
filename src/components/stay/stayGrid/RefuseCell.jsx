import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function RefuseCell({ action }) {
  const { language } = useContext(UserContext);

  const body = (
    <>
      <h3>{language === "fr" ? "Poubelles" : "Bins"}</h3>
      <p>
        {language === "fr"
          ? "Horaire de collecte des déchets et du recyclage."
          : "Schedule for rubbish & recycling collection."}
      </p>
      <p>
        {language === "fr"
          ? (
            <>
              <p><strong>Ordures ménagères</strong> vont dans la poubelle avec un <strong>couvercle vert</strong>, et vous devez sortir cette poubelle dans la rue le <strong>lundi soir</strong>.</p>
              <p>Le recyclage (<strong>papier, plastique et métal</strong>) va dans la poubelle avec un <strong>couvercle jaune</strong>, et vous devez sortir cette poubelle dans la rue le <strong>jeudi soir</strong>.</p>
              <p><strong>Verre</strong> va dans les bacs de recyclage publics (il y en a un sur la Rue de Trillou).</p>
            </>
          )
          : (
            <>
              <p><strong>Rubbish</strong> goes in the wheelie bin with a <strong>green lid</strong>, and you should put that bin out onto the street on <strong>Monday</strong> evening.</p>
              <p>Recycling (<strong>paper, plastic, and metal</strong>) goes in the bin with a <strong>yellow lid</strong>, and you should put that bin out onto the street on <strong>Thursday evening</strong>.</p>
              <p><strong>Glass</strong> goes in the public recycling bins (there's one on Rue de Trillou).</p>
            </>
          )}
      </p>
    </>
  );

  return (
    <InfoBox
      imageSrc="../../images/stay/refuse-schedule.png"
      alt={language === "fr" ? "Horaire déchets" : "Rubbish and recycling schedule"}
      action={action}
      body={body}
      centerX={50}
      centerY={60}
    />
  );
}