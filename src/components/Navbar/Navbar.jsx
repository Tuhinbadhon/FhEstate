import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../Provider/AuthProvider";
//  "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  const navlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/profile">View Profile</Link>
          </li>
          <li>
            <Link to="/updateprofile">Update Profile</Link>
          </li>
          <li>
            <Link to="/Appointment/0">Appointment</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      )}
    </>
  );
  // if(!loading)
  // alert(user.photoURL);
  const photoIcon = (
    <>
      <div className="w-10 rounded-full">
        <lord-icon
          className="w-full h-full"
          src="https://cdn.lordicon.com/szoiozyr.json"
          trigger="loop"
          delay="500"
          colors="primary:#000"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </div>
    </>
  );

  const userDetailsCard = (
    <>
      {/* <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">Hover</div>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>{user.displayName}</a></li>
                <li><a>{user.photoURL}</a></li>
            </ul>
        </div> */}
    </>
  );

  const logOutHandler = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          text: "Successful logout",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
        });
      });
  };

  const showNameOnHover = () => {
    userDetailsCard;
  };

  return (
    <div>
      <ToastContainer />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 
                        z-[10] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-black"
            >
              {navlink}
            </ul>
          </div>
          <div className="flex flex-row w-auto">
            <Link to="/">
              {" "}
              <img
                className="lg:w-12 lg:h-12 w-10 h-10"
                src="/logo1.png"
                alt=""
              />{" "}
            </Link>
            <Link
              to="/"
              className="btn btn-ghost lg:text-lg font-bold max-[450px]:text-2xl bg-gradient-to-r from-green-500 to-[#59C6D2] text-transparent bg-clip-text p-0"
            >
              FH ESTATES
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold  text-black">
            {navlink}
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          {loading ? (
            <span className="loading mx-auto loading-spinner text-warning"></span>
          ) : user ? (
            <>
              {/* loading section  */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onMouseEnter={showNameOnHover}
              >
                {user.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt="User Avatar"
                  />
                ) : (
                  photoIcon
                )}
              </div>
              <Link to="/login">
                <button className="btn btn-neutral" onClick={logOutHandler}>
                  Log Out{" "}
                </button>
              </Link>
            </>
          ) : (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {photoIcon}
              </div>
              <Link to="/login">
                <button className="btn btn-neutral">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
