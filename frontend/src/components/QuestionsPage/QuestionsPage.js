import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './QuestionsPage.css';

function QuestionsPage({questionDetails}) {

  const {question, answer} = questionDetails;
  return (
    <>
    <div className='question-box'>
      <div className='main-header'>
        Question:
      </div>
      <div className='question-header'>
        {question.title}
      </div>
      <div className='question-detail'>
        {question.body}
      </div>
    </div>
    <div className='answer-box'>
      <div className='main-header'>
        Answer:
      </div>
      <div className='answer-header'>
        You chose {answer.chose}
      </div>
    </div>
    </>
  )
}

export default QuestionsPage;
