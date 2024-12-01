import TerraceCell from "./outsideGrid/TerraceCell";
import SolariumCell from "./outsideGrid/SolariumCell";
import GardenCell from "./outsideGrid/GardenCell";
import ParkingCell from "./outsideGrid/ParkingCell";
import WoodsCell from "./outsideGrid/WoodsCell";
import BeachCell from "./outsideGrid/BeachCell";

export default function InsideGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <TerraceCell action={action} />
      <SolariumCell action={action} />
      <GardenCell action={action} />
    </div>
    <div className='responsive-grid'>
    <ParkingCell action={action} />
    <WoodsCell action={action} />
    <BeachCell action={action} />
    </div>
    <div className='responsive-grid'>
    </div>
  </>
  );
}