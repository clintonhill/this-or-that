import { nanoid } from 'nanoid';

import { fetch } from './csrf';

// Action Constants

export const SET_QUESTION = 'questions/setQuestion'
export const SET_LOADED_QUESTIONS = 'questions/setLoadedQuestions'
const SET_QUESTIONS = 'questions/setQuestions';
//Action Creators

const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}

const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  }
}

const setLoadedQuestions = (questions) => {
  return {
    type: SET_LOADED_QUESTIONS,
    payload: questions
  }
}

//Thunk Creators

export const getQuestionById = (questionId) => async (dispatch) => {
  if(!questionId) return null;
  const response = await fetch(`/api/questions/${questionId}`);
  if(response.ok) {
    dispatch(setQuestion(response.data.question))
  }
}

export const getRandomQuestion = () => async dispatch => {
  const response = await fetch('/api/questions/random');
  dispatch(setQuestion(response.data.question))
  return response.data.question.id;
}

export const getQuestionsForPage = (pageNum) => async (dispatch) => {
  if(!pageNum) return null;
  const response = await fetch(`/api/questions/page/${pageNum}`)

  dispatch(setLoadedQuestions(response.data.questions))
  return response;
}

export const getUsersQuestions = userId => async dispatch => {
  const response = await fetch(`/api/questions/user/${userId}`)

  dispatch(setQuestions(response.data.questions));
  return response;
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
    case SET_LOADED_QUESTIONS:
      newState.loadedQuestions = []
      for(let i = 0; i < 16; i++){
        if(action.payload[i])
          newState.loadedQuestions[i] = action.payload[i]
      }
      return newState;
    case SET_QUESTIONS:
      for(let question of action.payload) {
        newState[question.id] = question;
      }
      return newState;
    default:
      return state;
  }
}
