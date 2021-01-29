import { fetch } from './csrf';
import { SET_QUESTION } from './questions'

// Action Constants

const SET_ANSWERS = 'answers/setAnswers'

//Action Creators

const setAnswers = (answers) => {
  return {
    type: SET_ANSWERS,
    payload: answers
  }
}

//Thunk Creators

export const addAnswers = (data, topicId) => async (dispatch) => {
  const opts = {
    method: 'post',
    body: JSON.stringify({answers: data.answers, topicId})
  }
  const response = await fetch('/api/answers', opts)
  debugger;
  dispatch(setAnswers(response.data.answerResponse))
  return response;
}

//Reducer

export default function answersReducer(state = {}, action) {
  let newState = {...state};
  switch(action.type) {
    case SET_ANSWERS:
      //Iterate over answers array. Set Key of answerId to the answer on newState. So it points to that answer.
      //This is state normalization
      for(let answer of action.payload) {
        newState[answer.id] = answer;
      }
      return newState;
    case SET_QUESTION:
      newState[action.payload.id] = action.payload.Answers;
      return newState;
    default:
      return state;
  }
}
