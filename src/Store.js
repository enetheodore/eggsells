import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Store = () => {
  const [availableEggs, setAvailableEggs] = useState(0);
  const [moneyCollected, setMoneyCollected] = useState(0);

  useEffect(() => {
    // Fetch store data from backend API
    axios.get('/api/store')
      .then(response => {
        setAvailableEggs(response.data.available_eggs);
        setMoneyCollected(response.data.money_collected);
      })
      .catch(error => {
        console.error('Error fetching store data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Store</h2>
      <p>Available Eggs: {availableEggs}</p>
      <p>Money Collected: {moneyCollected}</p>
    </div>
  );
};

export default Store;