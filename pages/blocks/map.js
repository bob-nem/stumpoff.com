import GoogleMapReact from 'google-map-react'
import API_KEY from '../../apikey'

const GoogleMaps = ({ latitude, longitude }) => {
  const renderMarkers = (map, maps) => {
   let marker = new maps.Marker({
   position: { lat: 41.9321503477228, lng: -72.557959959218 },
   map,
   title: 'stumpoff.com office'
   });
   return marker;
  };
 
  return (
    <div style={{ height: '100%', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{ key: API_KEY.map }}
       defaultCenter={{ lat: 41.9321503477228, lng: -72.557959959218 }}
       defaultZoom={15}
       yesIWantToUseGoogleMapApiInternals
       onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
     >
     </GoogleMapReact>
    </div>
  );
 };
 
 export default GoogleMaps;