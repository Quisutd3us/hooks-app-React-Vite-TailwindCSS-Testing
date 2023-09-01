import {render, screen} from "@testing-library/react";
import {UserContext} from "../../09-useContext/context/UserContext.jsx";
import {HomePage} from "../../09-useContext/HomePage.jsx";


describe('suite of test for <HomePage/>', () => {

  test('Must be show the component without user', () => {
    render(
        <UserContext.Provider value={{user: null}}>
          <HomePage/>
        </UserContext.Provider>
    );
    expect(screen.getByLabelText('pre').innerHTML).toBe('null')
  })

  test('Must be render the component with a user', () => {
    const testUser={
      id:123,
      name:'David Salinas',
      email:'dnarino@gmail.com'
    }
    render(
        <UserContext.Provider value={{user: testUser}}>
          <HomePage/>
        </UserContext.Provider>
    );
    expect(screen.getByLabelText('small').innerHTML).toBe(testUser.name)
    expect(screen.getByLabelText('pre').innerHTML).toEqual(JSON.stringify(testUser,null,3))
  })
})
