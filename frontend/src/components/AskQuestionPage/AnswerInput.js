import React, { useState } from 'react';

function AnswerInput( {setAnswers, answer, questionNumber, answers} ) {

  return (
    <>
    <div className='form-field'>
        <label>
          Answer #{questionNumber+1}
        </label>
        <input
          type='text'
          placeholder='Type your answer'
          value={answers[questionNumber].topic}
          onChange={e => {
            setAnswers(oldAnswers => {
              const sliced = oldAnswers.slice();
              sliced[questionNumber].topic = e.target.value;
              return sliced;
            })
          }}
          required
        />
        <textarea
          className='form-field__textarea'
          placeholder='Answer Details'
          value={answers[questionNumber].details}
          onChange={e => {
            setAnswers(oldAnswers => {
              const sliced = oldAnswers.slice();
              sliced[questionNumber].details = e.target.value;
              return sliced;
            })
          }}
          required
        />
    </div>
    </>
  )
}

export default AnswerInput;
