import { Link, NavLink, Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <header>
        <nav className="lg:w-screen-lg container mx-auto flex justify-between p-4">
          <Link className="w-full" to="/">
            <img src="/logo.svg" alt="React Query" width="200" />
          </Link>
          <div className="flex space-x-4">
            <NavLink
              className="rounded-md bg-teal-800 px-4 py-2 font-semibold text-gray-100"
              to="/"
            >
              Basic
            </NavLink>
            <NavLink
              className="rounded-md bg-teal-800 px-4 py-2 font-semibold text-gray-100"
              to="/paginated"
            >
              Paginated
            </NavLink>
            <NavLink
              className="rounded-md bg-teal-800 px-4 py-2 font-semibold text-gray-100"
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
