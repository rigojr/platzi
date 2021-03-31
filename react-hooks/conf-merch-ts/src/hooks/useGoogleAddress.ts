import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address: FormDataEntryValue | null) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    };
    fetchData();
  }, [])
  return map;
}

export default useGoogleAddress;