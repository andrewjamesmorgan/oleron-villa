import {APIProvider, Map} from '@vis.gl/react-google-maps';
import LocationPoiMarkers from './LocationPoiMarkers';

const locations = [
  {key: 'oleronVilla', location: { lat: 45.87092056675535, lng: -1.2465387449637106 }},
];

export default function LocationMap() {

  return (
    <div >
      {/* <APIProvider apiKey="AIzaSyCG-djHC8ga5zInsGtoVlDb7tb_y-KUyGQ">
    <div style={{ height: "100vh", width: "100%" }}>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      />
    </div> */}
  {/* </APIProvider> */}
      <APIProvider apiKey={'AIzaSyCG-djHC8ga5zInsGtoVlDb7tb_y-KUyGQ'}>
        <div className='map'>
          <Map
            defaultZoom={10}
            defaultCenter={ { lat: 45.87092056675535, lng: -1.2465387449637106 } }
            mapId='15019cba5d15b2ed'
          >
            <LocationPoiMarkers pois={locations} />
          </Map>
          </div>
      </APIProvider>
    </div>
  );
}

