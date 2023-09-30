import React from "react";

const NavBarCMS = () => {
  return (
    <header className="antialiased mb-8">
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            {/* <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              burger
            </button> */}
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 rounded-lg cursor-pointer lg:hidden focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a href="/cms/dashboard" className="flex mr-4">
              {/* <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt="FlowBite Logo"
                /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                CMS One Retail
              </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBarCMS;
