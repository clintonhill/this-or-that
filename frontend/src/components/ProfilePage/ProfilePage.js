import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './ProfilePage.css';

function ProfilePage() {

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the profile page.
      </div>
    </div>
  )
}

export default ProfilePage;
