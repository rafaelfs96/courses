import {
  NUM_MAX_CHANGED,
  NUM_MIN_CHANGED
} from '../actions/actionType'

const initialState = { min: 7, max: 31 }

export default function numerosReducers(state = initialState, action) {
  switch (action.type) {
    case NUM_MIN_CHANGED:
      return { ...state, min: action.payload }
  
    case NUM_MAX_CHANGED:
      return { ...state, max: action.payload }

    default:
      return state
  }
}