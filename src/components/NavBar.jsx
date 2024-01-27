import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Go to home page</Link>
        </li>
        <li>
          // Update this Link to match your new route path
          <Link to="/countries">Go to countries</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
