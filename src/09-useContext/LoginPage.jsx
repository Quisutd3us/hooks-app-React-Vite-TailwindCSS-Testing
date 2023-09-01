import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {
  const {user,setUser} = useContext(UserContext)
  return (
      <>
        <h1 className={'display-5 text-gray-800'}>LoginPage</h1>
        <pre
            aria-label={'pre'}
            className={'mt-4'}>
          {
            JSON.stringify(user,null,3)
          }
        </pre>
        {
          Object.keys(user).length===0?
              <button
                  onClick={()=> setUser(
                      {
                        id:123,
                        name:'David Salinas',
                        email:'dnarino@gmail.com'
                      }
                  ) }
                  className={'btn bg-emerald-600 text-white mt-5 hover:bg-emerald-900 '}
              >Set User</button>
              :
              <button
                  onClick={()=> setUser({})}
                  className={'btn bg-emerald-600 text-white mt-5 hover:bg-emerald-900 '}
              >Del User</button>

        }

      </>
  )
};
