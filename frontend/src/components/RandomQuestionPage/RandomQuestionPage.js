import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './RandomQuestionPage.css';

function RandomQuestionPage() {

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the Ask Question Page.
      </div>
    </div>
  )
}

export default RandomQuestionPage;
