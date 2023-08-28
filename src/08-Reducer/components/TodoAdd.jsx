import PropTypes from 'prop-types';
import {useForm} from "../../Hooks/index.js";

const TodoAdd = ({onNewTodo}) => {
  /*declare initialState*/
  const initialState = {
    id: (new Date().getTime() * (Math.floor(Math.random() * 9))),
    description: '',
    done: false,
    creationTime: new Date().toString()
  }
  /*call CustomHook*/
  const {description, onInputChange, onResetForm} = useForm(initialState)
  /*manage Submit Form*/
  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.length <= 0) return
    const newTodo = {
      id: (new Date().getTime() * (Math.floor(Math.random() * 9))),
      description,
      done: false,
      creationTime: new Date().toString()
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  return (
      <div className={'flex flex-col justify-start gap-3 h-full '}>
        <h1 className={'display-6'}>Add ToDo</h1>
        <form
            onSubmit={handleSubmit}
            className={'flex flex-col justify-start gap-2 h-full'}>
          <div className="form-group ">
            <input
                type={"text"}
                className={"form-control"}
                name={"description"}
                aria-describedby={"todoHelp"}
                placeholder={"Enter a TODO"}
                required={true}
                value={description}
                onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary">Add ToDo</button>
        </form>
      </div>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};

export default TodoAdd;