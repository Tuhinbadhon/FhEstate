import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useState } from "react";
import app from "../firebase.config";
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
// eslint-disable-next-line no-unused-vars
const googleProvider = new GoogleAuthProvider();

const Firebase = () => {
  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    // eslint-disable-next-line no-undef
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <h1 className=" text-4xl font-bold text-center ">Firebase+React</h1>
        <div className="flex gap-2 mt-6  items-center justify-center   ">
          <button
            onClick={handleGoogleSignIn}
            className=" border px-4 py-2 rounded-xl bg-orange-100"
          >
            Google Sign In
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="border px-4 py-2 rounded-xl bg-purple-100 "
          >
            Google Sign In
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 ">
          {user && (
            <div className="">
              <h4 className="">
                User: <span className="">{user.displayName}</span>
              </h4>
              <h4 className="mt-3">
                Email: <span className="">{user.email}</span>
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Firebase;
