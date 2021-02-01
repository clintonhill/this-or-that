import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersQuestions } from '../../store/questions';
import QuestionRow from './QuestionRow';


import './ProfilePage.css';

function ProfilePage() {
  const sessionUser = useSelector(state => state.session.user);
  const questions = useSelector(state => state.questions)
  const dispatch = useDispatch();

  useEffect(() => {
    if(sessionUser)
      dispatch(getUsersQuestions(sessionUser.id))
  }, [dispatch, sessionUser])

  if (!sessionUser) {
    return (
      <div className='container'>
        <div className='main-header'>
          Welcome to the profile page.
      </div>
        <h4>Sorry, only registered users can view their profile.</h4>
        <h6>The good news is that you can log in, or sign up for a free account!</h6>
      </div>
    )
  }
  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the profile page.
      </div>
      <h5>Questions you've asked:</h5>
      {
        questions && Object.values(questions).filter(question => {
          return +question.ownerId === +sessionUser.id;
        }).map(question => (
          <QuestionRow question={question}/>
        ))
      }
      {/* <h5>Questions you've answered:</h5> */}
    </div>
  )
}

export default ProfilePage;
