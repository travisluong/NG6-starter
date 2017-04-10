export const ADD_TODO = 'ADD_TODO';

export function addTodo(payload) {
  console.log(payload)
  return {
    type: ADD_TODO,
    payload: payload
  }
}
