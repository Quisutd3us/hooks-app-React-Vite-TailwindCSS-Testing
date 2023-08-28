import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import NavBar from "./NavBar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
  return (
      <UserProvider>
        <div className="container bg-emerald-50 vh-100 ">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1 className={'display-3 text-emerald-800'}>Main App</h1>
            </div>
            <div className="col-xs-12 col-md-6">
              <NavBar/>
            </div>
          </div>
          {/*Display Components using Routes*/}
          <div className="row">
            <div className="col-12 my-6">
              <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/*'} element={<Navigate to={'about'}/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </UserProvider>
  )
};
