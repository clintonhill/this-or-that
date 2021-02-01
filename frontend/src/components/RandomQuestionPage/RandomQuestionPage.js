import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getRandomQuestion } from '../../store/questions';


import './RandomQuestionPage.css';

function RandomQuestionPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [questionId, setQuestionId] = useState();

  useEffect(() => {
    console.log('.........')
    async function fetchQuestion() {
    const returnedId = await dispatch(getRandomQuestion())
    console.log('....')
    if(returnedId) {
      setQuestionId(returnedId)
      history.push(`/questions/${questionId}`);
    }
  }
  fetchQuestion();
  }, [setQuestionId, dispatch, history, questionId])

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the Ask Question Page.
      </div>
    </div>
  )
}

export default RandomQuestionPage;
