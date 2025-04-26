import WifiCell from "./stayGrid/WifiCell";

export default function StayGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <WifiCell action={action} />
    </div>
  </>
  );
}