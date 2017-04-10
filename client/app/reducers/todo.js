import { ADD_TODO } from '../actions/todo';

const initialState = {
  list: [{name: 'foobar'}]
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        list: [...state.list, {name: action.payload}],
        newTodo: ''
      })
    default:
      return state
  }
}
