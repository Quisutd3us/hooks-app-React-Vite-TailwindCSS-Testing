import PropTypes from "prop-types";
import {UserContext} from "./UserContext.jsx";
import {useState} from "react";


export function UserProvider({children}) {
  const [user, setUser] =useState({})
  return (
      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>
  );
}

UserProvider.propTypes ={
  children:PropTypes.object
}



