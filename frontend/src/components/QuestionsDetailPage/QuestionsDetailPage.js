import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../store/questions'
import PollQuestion from './PollQuestion'

import './QuestionsDetailPage.css';

function QuestionsDetailPage() {
  const { questionId } = useParams();
  const dispatch = useDispatch ();
  let question = useSelector(state => state.questions[questionId])
  const answers = useSelector(state => state.answers[questionId]);
  console.log('***', answers)
  useEffect(() => {
    dispatch(getQuestionById(questionId))
  }, [dispatch, questionId])

  return (
    <div className='container'>
      <div className='question-box'>
        <div className='main-header'>
          Question:
        </div>
        <div className='question-header'>
          {question && question.title}
        </div>
        <div className='question-detail'>
          {question && question.body}
        </div>
      </div>
      <div className='main-header'>
        Answers:
      </div>
      <div className='answer-box'>
        {answers && answers.map(answer => (
          <PollQuestion answer={answer}/>
        ))}
      </div>
    </div>
  )
}

export default QuestionsDetailPage;
