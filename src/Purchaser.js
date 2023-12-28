import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Management = () => {
  const [farmData, setFarmData] = useState({});
  const [storeData, setStoreData] = useState({});

  useEffect(() => {
    // Fetch farm and store data from backend API
    axios.get('/api/management')
      .then(response => {
        setFarmData(response.data.farm);
        setStoreData(response.data.store);
      })
      .catch(error => {
        console.error('Error fetching management data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Management</h2>
      <p>Egg Collection: {farmData.egg_collection}</p>
      <p>Available Eggs: {storeData.available_eggs}</p>
      <p>Money Collected: {storeData.money_collected}</p>
    </div>
  );
};

export default Management;