import { nanoid } from 'nanoid';

import { fetch } from './csrf';

// Action Constants

export const SET_QUESTION = 'questions/setQuestion'

//Action Creators

const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}

//Thunk Creators

export const getQuestionById = (questionId) => async (dispatch) => {
  const response = await fetch(`/api/questions/${questionId}`);
  if(response.ok) {
    console.log(response.data.question)
    dispatch(setQuestion(response.data.question))
  }
}

export const addQuestion = data => async (dispatch) => {
  //Question
  const { title, body} = data.question;
  const { ownerId } = data;
  const slug = nanoid();

  const opts = {
    method: 'post',
    body: JSON.stringify({title, body, ownerId, slug})
  }
  const response = await fetch('/api/questions', opts)
  dispatch(setQuestion(response.data.question))
  return response;
}

//Reducer

export default function questionsReducer(state = {}, action){
  let newState = {...state};
  switch(action.type) {
    case SET_QUESTION:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
