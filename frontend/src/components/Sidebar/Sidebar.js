import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(){
  return (
    <div className='sidenav-container'>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="#">Profile</NavLink>
        </li>
        <li>
          <NavLink exact to="#">Ask a Question</NavLink>
        </li>
        <li>
          <NavLink exact to="/questions">Browse Questions</NavLink>
        </li>
        <li>
          <NavLink exact to="#">Random Question</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
