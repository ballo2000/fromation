import React from "react";

export default function Navbar() {
  return (
    <header className="flex w-full items-center bg-blue gray-100 pl-2">
      <div className="container m-0 ">
        <div className="relative  -mx-4 flex items-center justify-between">
          <div className=" w-60 max-w-full px-4">
            <img src="/logo.jpeg" alt="logo" className="w-full " />
          </div>
          <div className="flex  items-center justify-around px-4">
            <div>
              <button className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <nav className="absolute right-4 top-full  w-full align-right max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none">
                <ul className="blcok divise-y-5 lg:flex">
                  <li>
                    <a
                      href="/"
                      className="flex py-2  text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Servivces
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
