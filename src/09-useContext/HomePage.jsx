import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
      <>
        <h1 className={'display-5 text-gray-800 my-8'}>HomePage <small aria-label={'small'}>{user?.name}</small></h1>
        <pre
            aria-label={'pre'}>
          {
            JSON.stringify(user, null, 3)
          }
        </pre>
      </>
  )
};
