import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Farm = () => {
  const [eggCollection, setEggCollection] = useState(0);

  useEffect(() => {
    // Fetch egg collection data from backend API
    axios.get('/api/farm')
      .then(response => {
        setEggCollection(response.data.egg_collection);
      })
      .catch(error => {
        console.error('Error fetching egg collection data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Farm</h2>
      <p>Egg Collection: {eggCollection}</p>
    </div>
  );
};

export default Farm;