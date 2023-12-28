import React, { useContext, useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import pic from "./images/random.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backdropFilter: 'blur(200px)',
        WebkitBackdropFilter: 'blur(200px)',
      }}>
      <h2 className="title bg-opacity-70 backdrop-filter backdrop-blur-md p-4">Home</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 className="title bg-opacity-70 backdrop-filter backdrop-blur-md p-4">About Eggs</h3>
        <p>
          Eggs are a common food source and are laid by various species of
          animals, including birds, reptiles, and insects. They are highly
          nutritious and contain a good amount of protein, vitamins, and
          minerals. Eggs are commonly consumed in various forms, such as
          boiled, fried, or used as an ingredient in baking and cooking.
        </p>
        <img
          src="egg.jpg"
          alt="Egg"
          style={{ width: '300px', height: '300px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 className="title bg-opacity-70 backdrop-filter backdrop-blur-md p-4">About Hens</h3>
        <p>
          Hens are female chickens that are specifically raised for egg
          production. They are domesticated birds and are commonly found on
          farms. Hens have a unique ability to lay eggs, which are collected
          for human consumption. They require proper care, feeding, and
          suitable living conditions to ensure their well-being and optimal
          egg production.
        </p>
        <img
          src="hen.jpg"
          alt="Hen"
          style={{ width: '300px', height: '300px' }}
        />
      </div>
    </div>
  );
};

const LoginRedirect = () => {
  return (
    <p>
      You have already registered. Please <a href="/login">log in</a> to your account.
    </p>
  );
};

const RegisterRedirect = () => {
  return (
    <p>
      You do not have an account. Please <a href="/register">register</a> for an account.
    </p>
  );
};

export default Home;
