import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const AboutPage = () => {
  const {user} = useContext(UserContext)
  return (
      <>
        <h1 className={'display-5 text-gray-800'}>AboutPage</h1>
        <pre className={'mt-4'}>
          {
            JSON.stringify(user,null,3)
          }
        </pre>
      </>
  )
};
