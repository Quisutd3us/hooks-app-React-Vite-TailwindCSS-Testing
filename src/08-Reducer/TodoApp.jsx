import {useEffect, useReducer, useState} from "react";
import {todoReducer} from "./todoReducer.js";
import TodoList from "./components/TodoList.jsx";
import TodoAdd from "./components/TodoAdd.jsx";


const initialState = []
/*persistence on localstorage*/
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
  /*create use reducer for CRUD todo*/
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)
  /*create useState for count Todo was doing*/
  const [totalOk,setTotalOk] =useState(0)
  /*function add new todo to todos*/
  const onNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: todo
    }
    dispatchTodo(action)
  }

  /*function that delete a todo*/
  const onDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: id
    }
    dispatchTodo(action)
  }

  /*function that toggle ToDo*/
  const onToggleTodo = (id)=>{

    const action = {
      type: '[TODO] Toggle ToDO',
      payload: id
    }
    dispatchTodo(action)
  }

  /*persistence on localstorage*/
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    const totalOk = todos.filter(todo => todo.done ===true)
    setTotalOk(totalOk.length)
  }, [todos])

  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-12">
            <h1 className={'display-3 my-5'}>Todo APP {'useReducer'}</h1>
          </div>
        </div>
        {/* Info Section */}
        <div className="row my-7">
          <div className="col-12">
            <div className="row">
              <div className="col-sm-6 col-3">
                <div className="alert alert-primary  w-full" role="alert">
                  <span className="text-xl text-black text-center">Total :{todos.length}</span>
                </div>
              </div>
              <div className="col-sm-6 col-3">
                <div className="alert alert-primary  w-full" role="alert">
                  <span className="text-xl text-black text-center">DO :{totalOk}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Info Section */}
        <div className="row">
          <div className="col-sm-12 col-md-7 my-8">
            {/* TodoList */}
            <TodoList
                todos={todos}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
            {/* /TodoList */}
          </div>
          <div className="col-sm-12 col-md-5">
            {/* TodoAdd */}
            <TodoAdd
                onNewTodo={onNewTodo}
            />
            {/* TodoAdd */}
          </div>
        </div>

      </div>
  );
};
