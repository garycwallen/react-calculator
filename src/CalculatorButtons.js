import { ACTIONS } from './actions/types';

export function OperationButton({ dispatch, operation}) {
  return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
}

export function DigitButton({ dispatch, digit}) {
  return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
}