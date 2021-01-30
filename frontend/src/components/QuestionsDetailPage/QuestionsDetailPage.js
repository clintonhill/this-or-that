import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getQuestionById(questionId))
  }, [dispatch, questionId])

  const isAnswered = answers && answers.find(answer => {
    const votes = answer.Votes;
    for( let vote of Object.values(votes) ) {
      if(vote.ipId === userIPId) return true;
    }
    return false;
  })
  let answerSection;
  if(!isAnswered) {
    answerSection = <UnansweredQuestion answers={answers} />
  } else {
    answerSection = <AnsweredQuestion answers={answers} questionId={questionId} />
  }

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
        {answerSection}
    </div>
  )
}

export default QuestionsDetailPage;
