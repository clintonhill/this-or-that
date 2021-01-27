import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './IndexPage.css';

function IndexPage() {

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to this /or/ that
      </div>
    </div>
  )
}

export default IndexPage;
