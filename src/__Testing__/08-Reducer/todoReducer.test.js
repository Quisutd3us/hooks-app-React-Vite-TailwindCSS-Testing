import {todoReducer} from "../../08-Reducer/todoReducer.js";

describe('Suite of test for toReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false
    }
  ]

  test('Must be return the initial State', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  })

  test('Must be add a Todo',()=>{
    const newAction = {
      type: '[TODO] Add ToDo',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false
      }
    }
    const newState = todoReducer(initialState,newAction);
    expect(newState.length).toBe(2)
    expect(newState).toContain(newAction.payload)
  })

  test('Must be delete a TODO' ,()=>{
    const newAction = {
      type: '[TODO] Delete Todo',
      payload: 1
    }
    const newState =todoReducer(initialState,newAction);
    expect(newState.length).toBe(0);
  })

  test('Must be Toggle a TODO',()=>{
    const newAction = {
      type: '[TODO] Toggle ToDO',
      payload: 1
    }
    const newState = todoReducer(initialState,newAction);
    expect(newState[0].done).toBeTruthy();
  })
})