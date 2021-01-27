import React, { useState } from 'react';
import AnswerInput from './AnswerInput';

function AskForm() {

  //TODO: Make controlled inputs
  const [answers, setAnswers] = useState([{topic: '', details: ''}, {topic: '', details: ''}]);

  const addAnswer = () => {
    setAnswers(oldAnswers => [...oldAnswers, { topic: '', details: ''}])
  }

  const subAnswer = () => {
    console.log('--old', answers)
    setAnswers(oldAnswers => {
      const sliced = oldAnswers.slice(0, oldAnswers.length - 1);
      return sliced;
    })
    console.log('--new', answers)
  }

  return (
    <form>
      <ul>
        {/*error handling*/}
      </ul>
      <div className='form-field'>
        <label>
          Question
        </label>
        <input
          type='text'
          placeholder='Your question...'
          required
        />
      </div>
      <div className='form-field'>
        <label>
          Question Details
        </label>
        <textarea
          placeholder='Information about your question.'
          required
        />
        { answers.map((answer, index) => (
          <AnswerInput key={`answer-${index}`} setAnswers={setAnswers} answer={answer} questionNumber={index} answers={answers}/>
        )) }
        <input type='button' value='+' onClick={addAnswer} disabled={answers.length >= 10}/>
        <input type='button' value='-' onClick={subAnswer} disabled={answers.length <= 2}/>
      </div>

    </form>
  )
}

export default AskForm;
