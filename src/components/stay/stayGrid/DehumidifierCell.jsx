
import InfoBox from '../../InfoBox';

export default function DehumidifierCell({action}) {

  const body = (<>
    <h3>Dehumidifier</h3>
    <p>The apartment can get very humid when the doors and windows are closed, especially in winter.</p>
    <p>To help with this, there is a dehumidifier on both floors. They run when the humidity goes above a set level.</p>
    <p>If one of the water tankk fills up, then please empty it.</p>
    <p>If you find the noise distracting, then please feel free to turn them off using the button on top. It would be good if you could turn them back on when you leave the apartment.</p>
    <p>Please don't unplug them or turn them off at the socket.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/stay/dehumidifier.jpg"
        alt="White dehumidifier with controls on the top and a water tank at the bottom"
        action={action}
        body={body}
    />
  );
}