import WifiCell from "./stayGrid/WifiCell";
import RefuseCell from "./stayGrid/RefuseCell";

export default function StayGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <WifiCell action={action} />
      <RefuseCell action={action} />
    </div>
  </>
  );
}