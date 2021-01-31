import React from 'react';
import CharacterCounter from './CharacterCounter'

function AnswerInput( {setAnswers, questionNumber, answers} ) {

  return (
    <>
    <div className='form-field'>
        <label>
          Answer #{questionNumber+1} <span className='required'>required</span>
        </label>
        <input
          className='no-bottom-padding'
          type='text'
          placeholder='Type your answer'
          value={answers[questionNumber].header}
          onChange={e => {
            setAnswers(oldAnswers => {
              const sliced = oldAnswers.slice();
              sliced[questionNumber].header = e.target.value;
              return sliced;
            })
          }}
          required
        />
        <CharacterCounter maxCount={256} currentCount={answers[questionNumber].header.length}/>
        <textarea
          className='form-field__textarea no-bottom-padding'
          placeholder='Answer Details'
          value={answers[questionNumber].body}
          onChange={e => {
            setAnswers(oldAnswers => {
              const sliced = oldAnswers.slice();
              sliced[questionNumber].body = e.target.value;
              return sliced;
            })
          }}
        />
        <CharacterCounter maxCount={512} currentCount={answers[questionNumber].body.length}/>
    </div>
    </>
  )
}

export default AnswerInput;
