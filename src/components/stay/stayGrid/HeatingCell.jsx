import InfoBox from '../../InfoBox';

export default function HeatingCell({action}) {
  const body = (<>
    <h3>Central heating</h3>
    <p>The apartment is heated by a dedicated gas boiler, located in the laundry.</p>
    <p>You have control over the temperature from your own smart thermostat, just rotate the bezel to change the temperature.</p><p>The thermostat is pre-programmed with a schedule that's designed to meet the needs of most people. If you want to change the schedule then you can do it yourself using the thermostat's menu, or it may be easier to ask us to do it remotely.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/stay/thermostat.jpg"
        alt="Nest heating thermostat, next to a TV"
        action={action}
        body={body}
    />
  );
}