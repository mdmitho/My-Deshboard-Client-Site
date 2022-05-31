import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';

const Home = () => {
    return (
      <div>
        <h1>Welcome to your Dashboard</h1>
       <NavLink to='dashboard' >Dashboard</NavLink>
      </div>
    );
};

export default Home;