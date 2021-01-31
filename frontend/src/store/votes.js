import { fetch } from './csrf';

// Action Constants

export const SET_VOTE = 'votes/setOneVote'

//Action Creators

const setOneVote = (vote) => {
  return {
    type: SET_VOTE,
    payload: vote
  }
}

//Thunk Creators

export const addVote = (answerId, userId = null) => async (dispatch) => {
  const opts = {
    method: 'post',
    body: JSON.stringify({answerId, userId})
  }
  const response = await fetch('/api/votes', opts)
  dispatch(setOneVote(response.data.vote))
  return response;
}

//Reducer

export default function votesReducer(state = {}, action) {
  let newState = {...state};
  switch(action.type) {
    case SET_VOTE:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
