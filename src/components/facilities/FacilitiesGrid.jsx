import DiningCell from "./facilitiesGrid/DiningCell";
import OutdoorEntertainingCell from "./facilitiesGrid/OutdoorEntertainingCell";
import KitchenCell from "./facilitiesGrid/KitchenCell";
import WifiCell from "./facilitiesGrid/WifiCell";
import AVCell from "./facilitiesGrid/AVCell";
import BikeCell from "./facilitiesGrid/BikeCell";
import CleaningCell from "./facilitiesGrid/CleaningCell";
import SleepingCell from "./facilitiesGrid/SleepingCell";
import BathroomCell from "./facilitiesGrid/BathroomCell";

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
      <AVCell action={action} />
      <BikeCell action={action} />
    </div>    
    <div className='responsive-grid'>
      <CleaningCell action={action} />
      <SleepingCell action={action} />
      <BathroomCell action={action} />
    </div>
  </>
  );
}