import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import pic from "./images/register.jpg";

import StorePage from './Store';
import FarmPage from './Farm';
import ManagementPage from './Management';

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const history = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        password,
        category,
      });

      alert('Registration successful. Please login.');

      // Redirect to the login page
      history.push('/login');

      setUser(response.data);

      // Redirect to the respective page based on the selected category
      if (category === 'purchaser') {
        history.push('/store');
      } else if (category === 'farmer') {
        history.push('/farm');
      } else if (category === 'manager') {
        history.push('/management');
      }
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4 h-screen w-screen overflow-x-hidden"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(200px)',
        WebkitBackdropFilter: 'blur(200px)',
      }}
    >
      <h2 className="title bg-opacity-70 backdrop-filter backdrop-blur-md p-4">
        Register
      </h2>
      <form
        className="w-80 bg-white p-6 rounded shadow"
        onSubmit={handleSubmit}
        style={{ width: '400px', maxWidth: '90%' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label>Username:</label>
          <input
            className="w-full border border-gray-300 rounded mb-3 p-2"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            className="w-full border border-gray-300 rounded mb-3 p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Category:</label>
          <select
            className="w-full border border-gray-300 rounded mb-3 p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="purchaser">Store</option>
            <option value="farmer">Farm</option>
            <option value="manager">Management</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;