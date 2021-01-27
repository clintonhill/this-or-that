import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AnswerInput from './AnswerInput';
import { addQuestion } from '../../store/questions'

function AskForm() {

  const [question, setQuestion] = useState('');
  const [questionDetails, setQuestionDetails] = useState('');
  const [answers, setAnswers] = useState([{topic: '', details: ''}, {topic: '', details: ''}]);

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)

  const addAnswer = () => {
    setAnswers(oldAnswers => [...oldAnswers, { topic: '', details: ''}])
  }

  const subAnswer = () => {
    setAnswers(oldAnswers => {
      const sliced = oldAnswers.slice(0, oldAnswers.length - 1);
      return sliced;
    })
  }

  const handleSubmit = (event)  => {
    event.preventDefault();
    const questionData = {
      question: {
        title: question,
        body: questionDetails,
      },
      answers,
      ownerId: sessionUser.id
    }
    dispatch(addQuestion(questionData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {/*error handling*/}
      </ul>
      <div className='form-field'>
        <label>
          Question
        </label>
        <input
          type='text'
          value={question}
          onChange={e=> setQuestion(e.target.value)}
          placeholder='Type your question...'
          required
        />
      </div>
      <div className='form-field'>
        <label>
          Question Details
        </label>
        <textarea
          value={questionDetails}
          onChange={e => setQuestionDetails(e.target.value)}
          placeholder='Information about your question.'
          required
        />
        { answers.map((answer, index) => (
          <AnswerInput key={`answer-${index}`} setAnswers={setAnswers} answer={answer} questionNumber={index} answers={answers}/>
        )) }
        <div className='alter-form-buttons'>
          <input type='button' className='alter-form-button' value='-' onClick={subAnswer} disabled={answers.length <= 2}/>
          <input type='button' className='alter-form-button' value='+' onClick={addAnswer} disabled={answers.length >= 10}/>
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AskForm;
