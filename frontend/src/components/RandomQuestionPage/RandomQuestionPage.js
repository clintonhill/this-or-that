import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRandomQuestion } from '../../store/questions';


import './RandomQuestionPage.css';

function RandomQuestionPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function fetchQuestion() {
    const returnedId = await dispatch(getRandomQuestion())
    if(returnedId) {
      history.push(`/questions/${returnedId}`);
    }
  }
  fetchQuestion();
  }, [dispatch, history])

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the Ask Question Page.
      </div>
    </div>
  )
}

export default RandomQuestionPage;
