import { nanoid } from 'nanoid';

import { fetch } from './csrf';

// Action Constants

const SET_QUESTION = 'questions/setQuestion'

//Action Creators

const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}

//Thunk Creators

export const addQuestion = data => async (dispatch) => {
  //Question
  const { title, body} = data.question;
  const { ownerId } = data;
  const slug = 'sdfsdfsdfsd';

  const opts = {
    method: 'post',
    body: JSON.stringify({title, body, ownerId, slug})
  }
  const response = await fetch('/api/questions', opts)
  dispatch(setQuestion(response.data.question))
  return response;
}

//Reducer

//Add case FOR Set Question
export default function questionsReducer(state = {}, action){
  let newState;
  switch(action.type) {
    case SET_QUESTION:
      newState = {...state, ...action.payload}
      return newState;
    default:
      return state;
  }
}
