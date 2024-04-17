import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate(null);

  const helmetContext = {};

  const updateFormHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(name, photoURL);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        Swal.fire({
          text: "Successfuly Updated",
          icon: "success",
        });

        navigate("/profile");
      })
      .catch((error) => {
        Swal.fire({
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Profile</title>
        </Helmet>
      </HelmetProvider>

      <div className="my-10 p-4">
        <div className="mx-auto w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Fill the form to Update
          </h2>

          <form
            noValidate=""
            action=""
            className="space-y-8"
            onSubmit={updateFormHandler}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="text" className="block text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="text" className="block text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder={user.photoURL}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={user.email}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  disabled
                />
              </div>
            </div>

            <button
              className="btn w-full btn-secondary px-8 py-3 
                        font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
