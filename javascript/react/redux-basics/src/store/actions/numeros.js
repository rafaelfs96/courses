import {
  NUM_MAX_CHANGED,
  NUM_MIN_CHANGED
} from './actionType'

export const setMin = newNum => {
  return {
    type: NUM_MIN_CHANGED,
    payload: newNum
  }
}

export const setMax = newNum => {
  return {
    type: NUM_MAX_CHANGED,
    payload: newNum
  }
}