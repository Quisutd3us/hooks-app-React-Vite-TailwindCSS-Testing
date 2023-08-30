import {fireEvent, render, screen} from "@testing-library/react";
import MultipleCustomHooks from "../../03-useFetch/MultipleCustomHooks.jsx";
import {expect, jest} from "@jest/globals";
import {useFetch} from "../../Hooks/useFetch.js";
import {UseCounter} from "../../Hooks/UseCounter.js";

jest.mock('../../Hooks/useFetch.js');
jest.mock('../../Hooks/UseCounter.js');

describe('Suit of tests for component <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn()
  UseCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
      }
  )

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Must Be show default Component', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true
    })

    render(<MultipleCustomHooks/>);
    expect(screen.getByText('Rick & Morty Characters..'))
    expect(screen.getByText('Loading..'))
    const button = screen.getByRole('button', {name: 'Next Character'})
    expect(button.innerHTML).toBe('Next Character')
  })

  test('Must be show info of a character of Rick and Morty', () => {
    useFetch.mockReturnValue({
      data: {id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male'},
      isLoading: false
    })
    render(<MultipleCustomHooks/>);
    expect(screen.getByText('Rick Sanchez'))
    expect(screen.getByText('Alive'))
    expect(screen.getByText('Human'))
    expect(screen.getByText('Male'))
  })
  test('The function increment() must be called when Next Character button is clicked', () => {
    useFetch.mockReturnValue({
      data: {id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', gender: 'Male'},
      isLoading: false
    })
    render(<MultipleCustomHooks/>);
    const nextButton = screen.getByRole('button', {name: 'Next Character'})
    fireEvent.click(nextButton)
    expect(mockIncrement).toHaveBeenCalled();
  })
})