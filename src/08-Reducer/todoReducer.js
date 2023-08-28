

export const todoReducer = (initialState = [], action)=>{
  switch (action.type) {
    case '[TODO] Add ToDo':
      return [...initialState,action.payload]
    case '[TODO] Delete Todo':
      return initialState.filter(todo => todo.id !== action.payload)
    case '[TODO] Toggle ToDO':
      return initialState.map((todo)=> {
        if(todo.id === action.payload){
          todo.done = !todo.done
        }
        return todo
      })
    default:
      return initialState
  }
}