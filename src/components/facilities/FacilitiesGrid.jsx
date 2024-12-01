import DiningCell from "./facilitiesGrid/DiningCell";
import OutdoorEntertainingCell from "./facilitiesGrid/OutdoorEntertainingCell";
import KitchenCell from "./facilitiesGrid/KitchenCell";
import WifiCell from "./facilitiesGrid/WifiCell";

export default function FacilitiesGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <DiningCell action={action} />
      <OutdoorEntertainingCell action={action} />
      <KitchenCell action={action} />
    </div>
    <div className='responsive-grid'>
      <WifiCell action={action} />
    </div>
  </>
  );
}