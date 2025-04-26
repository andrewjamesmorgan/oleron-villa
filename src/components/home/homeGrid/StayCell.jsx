import InfoBox from '../../InfoBox';

export default function StayCell({action}) {

  const body = (<>
    <h3>Information for your stay</h3>
    <p>This page is to provide our tenants with information that may be useful during your stay.</p>
    <p>This information is only available to our tenants.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/stay/tenant-information.jpg"
        alt=""
        action={action}
        route="/stay"
        body={body}
    />
  );
}