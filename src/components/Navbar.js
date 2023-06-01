import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div className='main'>
      <div className='layout'>
        <div className='navbar'>
          <div className='menu'>
            <NavLink exact to='/' activeClassName='active' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/skills' activeClassName='active' className='nav-link'>
              Skills
            </NavLink>
            <NavLink to='/about' activeClassName='active' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/contact' activeClassName='active' className='nav-link'>
              Contact
            </NavLink>
          </div>
        </div>
        <div className='content'>
          <div className='body'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
