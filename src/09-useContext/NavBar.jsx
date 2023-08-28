import {NavLink} from "react-router-dom";

function NavBar() {
  return (
      <div className={'flex justify-center items-center h-100'}>
        <ul className="flex justify-center ">
          <li className="mr-6">
            <NavLink
                className={({isActive}) => ` ${isActive ? 'bg-emerald-600 text-white p-2' : "text-emerald-600"} `}
                to="/">Home</NavLink>
          </li>
          <li className="mr-6">
            <NavLink
                className={({isActive}) => ` ${isActive ? 'bg-emerald-600 text-white p-2' : "text-emerald-600"} `}
                to="login">Login</NavLink>
          </li>
          <li className="mr-6">
            <NavLink
                className={({isActive}) => ` ${isActive ? 'bg-emerald-600 text-white p-2' : "text-emerald-600"} `}
                to="about">About US</NavLink>
          </li>
        </ul>
      </div>
  );
}

export default NavBar;