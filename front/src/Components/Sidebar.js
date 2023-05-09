// Sidebar.js
import React from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import '../Pages/CSS/Sidebar.css'
import Dashboard from './Dashboard';
import SalesGraph from './SalesGraph';
import UsersTable from './UsersTable';
import OrdersTable from './OrdersTable';
import AddProduct from './AddProduct';
function Sidebar() {
  const location = useLocation();
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className={`sidebar-menu-item ${location.pathname === 'sales' ? 'active' : ''}`}>
          <Link to="sales">Sales</Link>
        </li>
        <li className={`sidebar-menu-item ${location.pathname === 'users' ? 'active' : ''}`}>
          <Link to="users">Users</Link>
        </li>
        <li className={`sidebar-menu-item ${location.pathname === 'orders' ? 'active' : ''}`}>
          <Link to="orders">Orders</Link>
        </li>
        <li className={`sidebar-menu-item ${location.pathname === 'Add_Product' ? 'active' : ''}`}>
          <Link to="addProduct">ADD_Product</Link>
        </li>
        
      </ul>
      <Routes>
        
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
              <Route path="sales" element={<SalesGraph />}> </Route>
              <Route path="users" element={<UsersTable />}> </Route>
              <Route path="orders" element={<OrdersTable />}> </Route>
              <Route path="addProduct" element={<AddProduct />}> </Route>

          </Route>
      </Routes>
        <Outlet></Outlet>
    </div>
  );
}

export default Sidebar;



        