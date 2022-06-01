import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
      <div>
        <div class="drawer drawer-mobile fixed">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">
            {/* <!-- Page content here --> */}
            <h1 className="text-3xl font-bold text-center text-primary ">
              Welcome to your Dashboard
            </h1>
            <div className="container mx-auto">
              <Outlet />
            </div>
          </div>
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
                    <NavLink to="/dashboard/analytics">Analytics</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/crm">CRM</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/helpdesk">Helpdesk</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/Sales">Sales</NavLink>
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