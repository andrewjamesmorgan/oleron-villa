import InfoBox from '../../InfoBox';

export default function BinsCell({action}) {
  const body = (<>
    <h3>Outdoor bins</h3>
    <p>When you need to get rid of your rubbish, there are 4 different bins that the council collects:</p>
    <p>Blue wheelie bin - Recycling.</p>
    <p>Grey wheelie bin - General waste.</p>
    <p>Green wheelie bin - Garden waste.</p>
    <p>Small black bin - Food waste. Please put your waste in a plastic bag before placing in this bin.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/stay/bins.jpg"
        alt="Blue, Grey, and Green wheelie bins, and a smnall, black bin. All outside."
        action={action}
        body={body}
    />
  );
}