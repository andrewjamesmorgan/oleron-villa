import InfoBox from '../../InfoBox';

export default function WifiCell({action}) {
  const body = (<>
    <h3>Internet</h3>
    <p>The apartment has fast internet - wired and wireless (WiFi).</p>
    <p>The WiFi network is <b>ThievesGLink</b> and the password is <b>link2Lechain</b>.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-wifi.jpg"
        alt="Wifi symbols"
        action={action}
        body={body}
        centerX = {50}
        centerY = {60}
    />
  );
}