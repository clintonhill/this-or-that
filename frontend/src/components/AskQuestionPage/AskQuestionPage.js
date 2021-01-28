import React from 'react';


import './AskQuestionPage.css';
import AskForm from './AskForm';

function AskQuestionPage() {

  return (
    <div className='container'>
      <div className='main-header'>
        Welcome to the Ask Question Page.
      </div>
      <AskForm />
    </div>
  )
}

export default AskQuestionPage;
