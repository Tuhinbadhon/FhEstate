import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
          <h1 className="text-lg font-medium lg:text-3xl lg:font-bold text-center">
            Frequently Asked Questions
          </h1>
          <div className="relative mt-6 mb-12 border border-fuchsia-600 rounded-3xl">
            <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search Any FAQ Tags..."
              className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
            />
          </div>
          <div
            className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 
                    sm:divide-x sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300
                     lg:text-2xl text-lg font-medium"
          >
            <div className="flex flex-col w-full divide-y dark:divide-gray-300">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Billing
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Support
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Account
              </a>
            </div>
            <div className="flex flex-col w-full divide-y dark:divide-gray-300">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Features
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Contact us
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                My orders
              </a>
            </div>
            <div className="hidden w-full divide-y sm:flex-col sm:flex dark:divide-gray-300">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Enterprise
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Privacy
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:scale-125 hover:text-fuchsia-500 flex items-center justify-center p-4 sm:py-8 lg:py-12"
              >
                Developers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
