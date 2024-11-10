import LoungeCell from './insideGrid/LoungeCell';
import KitchenCell from './insideGrid/KitchenCell';
import BathroomCell from './insideGrid/BathroomCell';
import MasterBedroomCell from './insideGrid/MasterBedroomCell';
import GuestBedroomCell from './insideGrid/GuestBedroomCell';
import FrontBedroomCell from './insideGrid/FrontBedroomCell';
import RedBedroomCell from './insideGrid/RedBedroomCell';
import GroundFloorCell from './insideGrid/GroundFloorCell';
import FirstFloorCell from './insideGrid/FirstFloorCell';

export default function InsideGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <LoungeCell action={action} />
      <KitchenCell action={action} />
      <BathroomCell action={action} />
    </div>
    <div className='responsive-grid'>
      <MasterBedroomCell action={action} />
      <GuestBedroomCell action={action} />
      <FrontBedroomCell action={action} />
    </div>
    <div className='responsive-grid'>
      <RedBedroomCell action={action} />
      <GroundFloorCell action={action} />
      <FirstFloorCell action={action} />
    </div>
  </>
  );
}