import {MemoryRouter} from "react-router-dom";
import {render, screen} from "@testing-library/react";
import {MainApp} from "../../09-useContext/MainApp.jsx";

describe('Suite of test for <MainApp/> ',()=>{
  test('Must be render <HomePage/> on initial load of App',()=>{
    render(
        <MemoryRouter>
          <MainApp/>
        </MemoryRouter>
    )
    expect(screen.findByText('HomePage')).toBeTruthy();
  })

  test('Must be render <LoginPage/> ',()=>{
    render(
        <MemoryRouter initialEntries={['/login']}>
          <MainApp/>
        </MemoryRouter>
    )
    expect(screen.findByText('LoginPage')).toBeTruthy();
    expect(screen.getByRole('link',{name:'Login'}).className).toContain('bg-emerald-600 text-white')
  })
})