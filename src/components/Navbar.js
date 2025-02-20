import React from 'react'
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const count = useSelector((initialstate) => initialstate.count)
  return (
    <div>
      <nav>
        <div class="container mt-2">
          <div className='d-flex flex-warp justify-content-center align-items-center'>
            <div className='col-md-2 d-flex flex-warp justify-content-center align-items-center' style={{ fontWeight: "bold", fontSize: '20px' }}>
              COLLECTION
            </div>
            <div className='col-md-5  d-flex flex-warp justify-content-center align-items-center'>
              <ul className='nav'>
                <li className='nav-item'>
                  <NavLink to="/Home" className="nav-link">Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/Products" className="nav-link">Products</NavLink>
                </li>
                {/* <li className='nav-item'>
                <NavLink to="/About" className="nav-link">About</NavLink>
                </li> */}
                {/* <li className='nav-item'>
                <NavLink to="/Conatct" className="nav-link">Conatct</NavLink>
                </li> */}
              </ul>
            </div>
            <div className='col-md-5 d-flex flex-warp justify-content-center align-items-center'>
              <div className='m-1 p-1'>
                <button className='style px-1' > <IoIosLogIn className='m-1' />Login</button>
              </div>
              <div className='m-1 p-1'>
                <button className='style px-1' > <FaUserPlus className='m-1' />Register</button>
              </div>
              <div className='m-1 p-1'>
                <NavLink to='' className='style px-1' > < FaCartShopping className='m-1' />Cart ({count})</NavLink>
              </div>

            </div>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar