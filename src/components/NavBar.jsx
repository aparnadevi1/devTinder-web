import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  console.log(user);
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          💻Dev Tinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <p className="px-4">Welcome ,{user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mx-5"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to="/profile">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
