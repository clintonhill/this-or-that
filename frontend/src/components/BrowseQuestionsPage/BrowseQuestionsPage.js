import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { getQuestionsForPage } from '../../store/questions'

import './BrowseQuestionsPage.css';
import QuestionRow from './QuestionRow';

function BrowseQuestionsPage() {
  const dispatch = useDispatch();
  const loadedQuestions = useSelector(state => state.questions.loadedQuestions)
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    dispatch(getQuestionsForPage(page));
  }, [page, dispatch])


  return (
    <div className='container'>
      <div className='main-header'>
        Browse Questions
      </div>
      <div>
        {loadedQuestions && loadedQuestions.map((question, idx) => {
          { if(idx < 15) return <QuestionRow question={question}/>}
      })}
      </div>
      <div className='pagination'>
      <button onClick={()=> setPage(prev => prev - 1)} disabled={page <= 1}><FontAwesomeIcon icon={faAngleDoubleLeft} size='lg'/></button>
      <button onClick={()=> setPage(prev => prev + 1)} disabled={!loadedQuestions || loadedQuestions[15] === undefined}><FontAwesomeIcon icon={faAngleDoubleRight} size='lg'/></button>
      </div>
    </div>
  )
}

export default BrowseQuestionsPage;
