import InfoBox from '../../InfoBox';

export default function CleaningCell({action}) {
  const body = (<>
    <h3>Cleaning</h3>
    <p>The apartment is cleaned between each tenant, and then, every Tuesday.</p>
    <p>Our cleaner (Anna) typically arrives to clean the apartment in the late morning.</p>
    <p>Clean bedding and towels are provided every week.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-cleaner.jpg"
        alt="Cartoon cleaner mopping the floor"
        action={action}
        body={body}
    />
  );
}