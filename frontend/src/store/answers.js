import { fetch } from './csrf';

// Action Constants

const SET_ANSWER = 'answers/setAnswer'

//Action Creators

const setAnswer = (answer) => {
  return {
    type: SET_ANSWER,
    payload: answer
  }
}

//Thunk Creators

export const addAnswer = (data, topicId) => async (dispatch) => {
  //Question
  const { topic: header, details: body} = data.answers;

  const opts = {
    method: 'post',
    body: JSON.stringify({header, body, topicId})
  }
  const response = await fetch('/api/answers', opts)
  dispatch(setAnswer(response.data.question))
  return response;
}

//Reducer

export default function answersReducer(state = {}, action){
  let newState;
  switch(action.type) {
    case SET_ANSWER:
      newState = {...state, ...action.payload}
      return newState;
    default:
      return state;
  }
}
