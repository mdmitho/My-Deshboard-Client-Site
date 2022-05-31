import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <div class="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

          <div class="drawer-side ">
            <label for="my-drawer-2" class="drawer-overlay y"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-white">
              {/* <!-- Sidebar content here --> */}
              <div class="collapse  collapse-arrow ">
                <input type="checkbox" class="peer" />
                <div class=" collapse-title rounded-lg bg-secondary text-base-100 peer-checked:bg-primary peer-checked:text-white">
                  Dashboard
                </div>
                <div class="collapse-content bg-primary text-base-100 peer-checked:bg-primary peer-checked:text-base-100-content">
                  <li>
                    <NavLink to="/">
                     Analytics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/crm">CRM</NavLink>
                  </li>
                  <li>
                    <NavLink to="/helpdesk">Helpdesk</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Sales">Sales</NavLink>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;