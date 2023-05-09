import React, { useState }  from 'react';
import Sidebar from './Sidebar';
import ProductDisplay from './ProductDisplay';

function Dashboard() {
 


  return (
    <div className="admin-dashboard">
    
      <ProductDisplay />
      <Sidebar  /> 
      
    </div>
  );
}

export default Dashboard;
