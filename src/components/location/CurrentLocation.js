import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CurrentLocation = () => {
    const [longitude, setLongitude] = useState(-84.6060449);
  const [latitude, setLatitude] = useState(34.0351588);
  const [address, setAddress] = useState('');

  useEffect(() => {
    try {          
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log('position',position)
            console.log('lat', position.coords.latitude)
            console.log('long', position.coords.longitude)
        })
    } catch (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
    } 
 
}, []);

  useEffect(() => {
    // Your geocoding API URL, including the API key
    const apiKey = 'AIzaSyC193CoDXcAPH9eQNqMWA3JP7iGnIeYRI8';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    // Make the API request
    axios.get(apiUrl)
      .then(response => {
        // Extract the address from the API response
        const firstResult = response.data.results[0];
        if (firstResult) {
          setAddress(firstResult.formatted_address);
        } else {
          setAddress('No address found');
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [longitude, latitude]);

 

       
        return (
            <div>
            {/* <input
              type="number"
              placeholder="Longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
            <input
              type="number"
              placeholder="Latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            /> */}
            <div>
              Address: {address}
            </div>
          </div>
        );
      }

export default CurrentLocation;
