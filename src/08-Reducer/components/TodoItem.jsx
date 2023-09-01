import PropTypes from 'prop-types';

const TodoItem = ({description, creationTime, id,done, onDeleteTodo,onToggleTodo}) => {

  return (
      <li className="list-group-item d-flex  justify-content-between align-items-center">
        <div
            onDoubleClick={()=>onToggleTodo(id)}
            className={`${done? 'bg-green-300 p-2 m-2 rounded-2xl':'' } flex flex-col gap-2`}>
          <p
              aria-label={'todoDescription'}
              className={'text-2xl'}><strong>Todo: </strong>{description}</p>
          <p
              aria-label={'todoDate'}
              className={'text-gray-500'}><strong>Date: </strong>{creationTime}</p>
        </div>
        <button
            onClick={()=>onDeleteTodo(id)}
            className="btn btn-danger btn-sm">X
        </button>
      </li>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  creationTime: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done:PropTypes.bool,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
};

export default TodoItem;