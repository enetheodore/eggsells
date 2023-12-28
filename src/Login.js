import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import pic from "./images/login.jpg";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [isRegistrationMode, setIsRegistrationMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleModeToggle = () => {
    setIsRegistrationMode(!isRegistrationMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      username,
      password,
      category: isRegistrationMode ? category : 'management',
    };

    try {
      const response = await axios.post('http://localhost:8000/api/auth/login/', requestData);
      setUser(response.data);

      const { category } = response.data;
      if (category === 'management') {
        navigate('/management');
      } else if (category === 'store') {
        navigate('/store');
      } else if (category === 'farm') {
        navigate('/farm');
      } else {
        navigate('/home');
      }
    } catch (error) {
      if (isRegistrationMode) {
        setError('Failed to register. Please try again.');
      } else {
        setError('Failed to log in. Please check your credentials.');
      }
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
      <h3 className="title bg-opacity-70 backdrop-filter backdrop-blur-md p-4">
        {isRegistrationMode ? 'Register' : 'Login'}
      </h3>
      {error && <p>{error}</p>}
      <form className="w-80 bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {isRegistrationMode && (
          <div>
            <label>Category:</label>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="management">Management</option>
              <option value="store">Store</option>
              <option value="farm">Farm</option>
            </select>
          </div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {isRegistrationMode ? 'Register' : 'Login'}
        </button>
      </form>
      <div className="mt-4">
        <span className="mr-2">
          {isRegistrationMode ? 'Already have an account?' : "Don't have an account?"}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleModeToggle}
        >
          {isRegistrationMode ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
};

export default Login;