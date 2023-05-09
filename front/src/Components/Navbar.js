import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slice/authSlice';
import img from '../Pages/CSS/shopimage.jpg'
import '../Pages/CSS/Navbar.css'
import axios from 'axios';
import userSlice from '../Redux/Slice/userSlice';
import { fetchProducts } from '../Redux/Slice/productSlice';
import { toast } from 'react-toastify';
import SortButton from './SortButton';

function Navbar() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)
  const navigate = useNavigate()

  const exit = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate('/login')
  }

  useEffect(() => {
    if(!user) {
      navigate('/')
    } else if(user.role === 'admin') {
      axios.get('http://localhost:8080/api/cosm/admin/login')
        .then(res => {
          const { data: { products } } = res
          dispatch(fetchProducts(products))
        })
        .catch(err => {
          console.log(err)
          toast.error('Failed to fetch products.')
        })
    } else {
      axios.get('http://localhost:8080/api/cosm/user/login')
        .then(res => {
          const { data: { user } } = res
          dispatch(userSlice(user))
        })
        .catch(err => {
          console.log(err)
          toast.error('Failed to fetch user details.')
        })
    }
  }, [user])

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to='/'>
          <img src={img} alt="My Store" />
        </NavLink>
      </div>
      <ul className="navbar__links">
        <div className="navbar__search">
          <input type="text" placeholder="Search products"  />
          <i className="fa fa-search"></i>
        </div>
        <li>
          <NavLink to='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About Us</NavLink>
        </li>
        {user ? (
          <>
            <li>
              {user.role === 'admin' ? (
                <NavLink to='/admin/dashboard'>Dashboard</NavLink>
              ) : (
                <NavLink to='/dashboard'>Dashboard</NavLink>
              )}
            </li>
            <li>
             <button className="navbar__logout-btn" onClick={exit}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register' className="navbar__register-btn">Register</NavLink>
            </li>
          </>
        )}
      </ul>
      {user && user.role === 'user' && (
        <div className="navbar__user-options">
          <span>Sort By:</span>
          <select>
            <option value="family">Family</option>
            <option value="price">Price</option>
            <option value="title">Title</option>
          </select>
          <SortButton></SortButton>
         
        </div>
      )}
    </nav>
  );
}

export default Navbar;
 


/* import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slice/authSlice';
import img from '../Pages/CSS/shopimage.jpg'
import '../Pages/CSS/Navbar.css'
function Navbar() {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const navigate=useNavigate()
  const exit=(e)=>{
    e.preventDefault()
      dispatch(logout())
      navigate('/login')
  }
  useEffect(()=>{
    if(!user)
    navigate('/login')
  },[user])
    
        return (
            <nav className="navbar">
              <div className="navbar__logo">
                <NavLink to='/'>
                  <img src={img} alt="My Store" />
                </NavLink>
              </div>
              <ul className="navbar__links">
              <div className="navbar__search">
                <input type="text" placeholder="Search products" />
                <i className="fa fa-search"></i>
              </div>
                <li>
                  <NavLink to='/shop'>Shop</NavLink>
                </li>
                <li>
                  <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About Us</NavLink>
                </li>
                {user ? (
                  <>
                    <li>
                      <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                      <button className="navbar__logout-btn" onClick={exit}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                      <NavLink to='/register' className="navbar__register-btn">Register</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          );
        }
        


export default Navbar
 */

