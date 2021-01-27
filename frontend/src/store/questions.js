import nanoid from 'nanoid';

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
  const { title, detail: body } = data.question;
  const slug = nanoid.nanoid();
}

//Reducer

//Add case FOR Set Question
export default function questionsReducer(state = {}, action){
  let newState;
  switch(action.type) {
    default:
      return state;
  }
}
