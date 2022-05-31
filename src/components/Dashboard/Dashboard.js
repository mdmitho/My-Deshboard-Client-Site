import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <div class="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

          <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-white">
              {/* <!-- Sidebar content here --> */}
              <li>
                <NavLink to="/">Sidebar Item 1</NavLink>
              </li>
              <li>
                <NavLink to="/about">Sidebar Item 2</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;