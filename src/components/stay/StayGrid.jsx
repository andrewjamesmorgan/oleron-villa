import WifiCell from "./stayGrid/WifiCell";
import CleaningCell from "./stayGrid/CleaningCell";
import HotWaterCell from "./stayGrid/HotWaterCell";
import ParkingCell from "./stayGrid/ParkingCell";
import HeatingCell from "./stayGrid/HeatingCell";
import LaundryCell from "./stayGrid/LaundryCell";
import BinsCell from "./stayGrid/BinsCell";
import DehumidifierCell from "./stayGrid/DehumidifierCell";

export default function StayGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <WifiCell action={action} />
      <HeatingCell action={action} />
      <HotWaterCell action={action} />
      <BinsCell action={action} />
    </div>
    <div className='responsive-grid'>
      <DehumidifierCell action={action} />
      <ParkingCell action={action} />
      <CleaningCell action={action} />
      <LaundryCell action={action} />
    </div>
  </>
  );
}