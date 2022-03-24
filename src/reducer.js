import { ADD_ALL_CHARACTERS } from './actionTypes';

// REDUCER 1, FOR THE form SLICE OF STATE
const initialState = { 
  name: [],
  // height: '',
  // mass: '',
  // birthYear: '',
}


function character(state = initialState, action) { // state means the form, not app state
  switch (action.type) {
    case ADD_ALL_CHARACTERS:
        return { 
          ...state, 
          name: action.payload
        }
    default:
      return state
  }
}

export default character

