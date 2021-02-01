import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnswerInput from './AnswerInput';
import { addQuestion } from '../../store/questions'
import { addAnswers } from '../../store/answers'
import { useHistory } from 'react-router-dom';
import CharacterCounter from './CharacterCounter'

function AskForm() {

  const [question, setQuestion] = useState('');
  const [questionDetails, setQuestionDetails] = useState('');
  const [answers, setAnswers] = useState([{header: '', body: ''}, {header: '', body: ''}]);

  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)

  const addAnswer = () => {
    setAnswers(oldAnswers => [...oldAnswers, { header: '', body: ''}])
  }

  const subAnswer = () => {
    setAnswers(oldAnswers => {
      const sliced = oldAnswers.slice(0, oldAnswers.length - 1);
      return sliced;
    })
  }

  const handleSubmit = async(event)  => {
    event.preventDefault();
    const questionData = {
      question: {
        title: question,
        body: questionDetails,
      },
      answers,
      ownerId: sessionUser.id
    }
    const response = await dispatch(addQuestion(questionData));
    const topicId = response.data.question.id;
    dispatch(addAnswers(questionData, topicId))
    history.push(`/questions/${topicId}`)
  }

  if(!sessionUser) {
    return (
    <>
      <h4>Sorry, only registered users can ask questions.</h4>
      <h6>The good news is that you can log in, or sign up for a free account!</h6>
    </>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {/*error handling*/}
      </ul>
      <div className='form-field'>
        <label>
          Question <span className='required'>required</span>
        </label>
        <input
          className='no-bottom-padding'
          type='text'
          value={question}
          onChange={e=> setQuestion(e.target.value)}
          placeholder='Type your question...'
          required
        />
        <CharacterCounter maxCount={256} currentCount={question.length}/>
      </div>
      <div className='form-field'>
        <label>
          Question Details <span className='required'>required</span>
        </label>
        <textarea
          className='no-bottom-padding'
          value={questionDetails}
          onChange={e => setQuestionDetails(e.target.value)}
          placeholder='Information about your question.'
          required
        />
        <CharacterCounter maxCount={512} currentCount={questionDetails.length}/>
        { answers.map((answer, index) => (
          <AnswerInput key={`answer-${index}`} setAnswers={setAnswers} answer={answer} questionNumber={index} answers={answers}/>
        )) }
        <div className='alter-form-buttons'>
          <input type='button' className='alter-form-button' value='-' onClick={subAnswer} disabled={answers.length <= 2}/>
          <input type='button' className='alter-form-button' value='+' onClick={addAnswer} disabled={answers.length >= 50}/>
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AskForm;
