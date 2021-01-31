import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../store/questions'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

import './QuestionsDetailPage.css';

function QuestionsDetailPage() {
  const { questionId } = useParams();
  const dispatch = useDispatch ();
  let question = useSelector(state => state.questions[questionId])
  const answers = useSelector(state => state.answers[questionId]);
  const userIPId = useSelector(state => state.session.ipId)
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    dispatch(getQuestionById(questionId))
  }, [dispatch, questionId])

  useEffect(() => {
    if(answers && answers.find(answer => {
      const votes = answer.Votes;
      for( let vote of Object.values(votes) ) {
        if(vote.ipId === userIPId) return true;
      }
      return false;
    })) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
  },[answers, userIPId])

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
        {isAnswered && <AnsweredQuestion answers={answers} />}
        {!isAnswered && <UnansweredQuestion answers={answers} />}
    </div>
  )
}

export default QuestionsDetailPage;
