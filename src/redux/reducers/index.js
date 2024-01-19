import { DISPLAY_DOCTORS } from "../actions";

// set initial state
const initializeAppState = {
  doctors: []
}

export function appReducer(state = initializeAppState, action){
  switch(action.type){
    case DISPLAY_DOCTORS:
      return {
        ...state,
        doctors: action.doctors
      }

    default:
      return state;
  }
}