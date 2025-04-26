
import InfoBox from '../../InfoBox';

export default function HotWaterCell({action}) {

  const body = (<>
    <h3>Hot water</h3>
    <p>The hot water for the kitchen and bathroom is heated on demand, and so it won't run out.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/bathroom/maidenhead-bathroom.jpg"
        alt="Bathroom with white walls and blue and white tiles on the wall. Shower, toilet and wash baisin. Window reflected in a mirror."
        action={action}
        body={body}
    />
  );
}