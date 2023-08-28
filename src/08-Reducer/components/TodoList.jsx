import PropTypes from 'prop-types';
import TodoItem from "./TodoItem.jsx";

const TodoList = ({todos,onDeleteTodo,onToggleTodo}) => {
  return (
      <ul className="list-group">
        {
          todos.map((todoState)=>(
            <TodoItem
              key={todoState.id}
              {...todoState}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }
      </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo:PropTypes.func.isRequired,
  onToggleTodo:PropTypes.func.isRequired
};

export default TodoList;