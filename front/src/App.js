import './App.css';
import {Routes , Route} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import LoginAdmin from './Pages/LoginAdmin';
import LoginUser from './Pages/LoginUser';
import Dashboard from './Components/Dashboard';
import SalesGraph from './Components/SalesGraph';
import UsersTable from './Components/UsersTable';
import OrdersTable from './Components/OrdersTable';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductDisplay from './Components/ProductDisplay';
import AddProduct from './Components/AddProduct';



function App() {

return (
    <div className='App'>
      <Navbar></Navbar> 
<div className='App-Container'>
      
      <Routes>
      
        <Route path='/' element={<ProductDisplay></ProductDisplay>}></Route> 
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}>
          <Route path='LoginAdmin' element={<LoginAdmin></LoginAdmin>}></Route>
          <Route path='LoginUser' element={<LoginUser></LoginUser>}></Route>
        </Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/dashboard/addProduct' element={<AddProduct />}></Route>
              
        
      </Routes>
  </div>    

 
      <Footer></Footer>
      </div>
  );
}

export default App;
