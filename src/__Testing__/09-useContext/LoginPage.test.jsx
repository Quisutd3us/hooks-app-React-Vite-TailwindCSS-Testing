import {fireEvent, render, screen} from "@testing-library/react";
import {LoginPage} from "../../09-useContext/LoginPage.jsx";
import {UserContext} from "../../09-useContext/context/UserContext.jsx";
import {jest} from "@jest/globals";

describe('Suite of test for component <LoginPage/>', () => {
  const onSetUser = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  })
  test('Must be show a null user ', () => {
    const testUser = {};
    render(
        <UserContext.Provider value={{user: testUser}}>
          <LoginPage/>
        </UserContext.Provider>
    );
    expect(screen.getByLabelText('pre').innerHTML).toBe('{}')
  })
  test('onclick button SET USER must be call setUser()', () => {
    
    render(
        <UserContext.Provider value={{user: {}, setUser: onSetUser}}>
          <LoginPage/>
        </UserContext.Provider>
    );

    const setUserButton = screen.getByRole('button');
    fireEvent.click(setUserButton);
    expect(onSetUser).toHaveBeenCalled();
  })
  test('when user exist the reset button must be show and onClick must be call setUser', () => {
    const testUser = {
      id: 1,
      name: 'Test name',
      email: 'dnarino@gmail.com'
    }
    render(
        <UserContext.Provider value={{user: testUser, setUser: onSetUser}}>
          <LoginPage/>
        </UserContext.Provider>
    );

    const delUserButton = screen.getByRole('button');
    fireEvent.click(delUserButton);
    expect(onSetUser).toHaveBeenCalledWith({})
  })
})