import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../../firebase.config";

defineElement(lottie.loadAnimation);

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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

  const photoIcon = (
    <>
      <div className="w-10 rounded-full">
        <lord-icon
          className="w-full h-full"
          src="https://cdn.lordicon.com/kthelypq.json"
          trigger="loop"
          delay="500"
          colors="primary:#000"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </div>
    </>
  );

  const logOutHandler = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          text: "Successfully logout",
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
    setShowUserDetails(true);
  };

  const hideNameOnHover = () => {
    setShowUserDetails(false);
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
              <div
                className="btn btn-ghost tooltip tooltip-bottom btn-circle avatar"
                onMouseEnter={showNameOnHover}
                onMouseLeave={hideNameOnHover}
                data-tip={user.displayName}
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
              <button className="btn btn-neutral" onClick={logOutHandler}>
                Log Out{" "}
              </button>
            </>
          ) : (
            <>
              <div className="btn btn-ghost btn-circle avatar">{photoIcon}</div>
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
