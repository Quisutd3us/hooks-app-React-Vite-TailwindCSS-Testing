import {jest} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";
import TodoItem from "../../../08-Reducer/components/TodoItem.jsx";

describe('Suite of tests for <todoItem/>', () => {
  const todo = {
    description: 'todo description test',
    creationTime: 'Wed Aug 30 2023 17:40:23 GMT-0500',
    id: 6773740893852,
    done: false
  }
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('Must be show TODO not completed', () => {
    render(<TodoItem
        creationTime={todo.creationTime}
        onToggleTodo={onToggleTodoMock}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        done={todo.done}
        id={todo.id}/>)
    const liTest = screen.getByRole('listitem');
    expect(liTest.className).toBe('list-group-item d-flex  justify-content-between align-items-center')

    const pDescription = screen.getByLabelText('todoDescription')
    expect(pDescription.innerHTML).toContain(todo.description)

    const pDate = screen.getByLabelText('todoDate')
    expect(pDate.innerHTML).toContain(todo.creationTime)
  })

  test('Must be show TODO completed', () => {
    todo.done = true
    render(<TodoItem
        creationTime={todo.creationTime}
        onToggleTodo={onToggleTodoMock}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        done={todo.done}
        id={todo.id}/>)
    const liTest = screen.getByRole('listitem');
    expect(liTest.children[0].className).toContain('bg-green-300')

  })
  test('DoubleClick on TODO must be called onToggleTodo function',()=>{
    render(<TodoItem
        creationTime={todo.creationTime}
        onToggleTodo={onToggleTodoMock}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        done={todo.done}
        id={todo.id}/>)
    const divDone = screen.getByRole('listitem').children[0];
    fireEvent.doubleClick(divDone);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  })

  test('Click on Delete button must be called onDeleteTodo() function',()=>{
    render(<TodoItem
        creationTime={todo.creationTime}
        onToggleTodo={onToggleTodoMock}
        description={todo.description}
        onDeleteTodo={onDeleteTodoMock}
        done={todo.done}
        id={todo.id}/>)
    const buttonDelete = screen.getByRole('button',{name:'X'});
    fireEvent.click(buttonDelete);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  })

})
