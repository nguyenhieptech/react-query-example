import { Link, NavLink, Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <header>
        <nav className="container flex justify-between p-4 mx-auto lg:w-screen-lg">
          <Link className="w-full" to="/">
            <img src="/logo.svg" alt="React Query" width="200" />
          </Link>
          <div className="flex space-x-4">
            <NavLink
              className="bg-teal-800 px-4 py-2 text-gray-100 font-semibold rounded-md"
              to="/"
            >
              Basic
            </NavLink>
            <NavLink
              className="bg-teal-800 px-4 py-2 text-gray-100 font-semibold rounded-md"
              to="/paginated"
            >
              Paginated
            </NavLink>
            <NavLink
              className="bg-teal-800 px-4 py-2 text-gray-100 font-semibold rounded-md"
              to="/infinite"
            >
              Infinite
            </NavLink>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
