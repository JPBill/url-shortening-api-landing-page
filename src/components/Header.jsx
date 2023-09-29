import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="mx-auto flex h-16 items-center gap-8 px-5 py-6 lg:px-20 lg:py-12 xl:px-36">
        <a className="block text-verydarkblue" href="/">
          <span className="sr-only">Home</span>
          <img src={logo} className="h-8 cursor-pointer" alt="logo Shortly" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex cursor-pointer items-center gap-6 text-sm">
              <li>
                <a
                  className="text-sm font-semibold text-grayishviolet transition-colors hover:text-verydarkblue"
                  href="/"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-grayishviolet transition-colors hover:text-verydarkblue"
                  href="/"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  className="text-sm font-semibold text-grayishviolet transition-colors hover:text-verydarkblue"
                  href="/"
                >
                  Resources
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="hidden px-5 py-2.5 text-sm font-semibold text-grayishviolet transition-colors hover:text-verydarkblue md:block"
                href="/"
              >
                Login
              </a>

              <a
                className="hidden rounded-full bg-cyan px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110 md:block"
                href="/"
              >
                Sign Up
              </a>
            </div>

            {isOpen && (
              <div className="absolute left-5 right-5 top-20 rounded-xl bg-darkviolet py-10 text-center text-white md:relative md:left-0 md:right-0 md:top-0 md:flex md:items-center md:bg-transparent md:py-0 md:text-left md:text-slate-700">
                <nav className="md:hidden">
                  <ul className="flex flex-col items-center justify-center gap-y-5">
                    <li>
                      <button>Features</button>
                    </li>
                    <li>
                      <button>Pricing</button>
                    </li>
                    <li>
                      <button>Resources</button>
                    </li>
                  </ul>
                </nav>
                <div className="my-5 flex items-center">
                  <div className="mx-4 h-[1px] w-full bg-white" />
                </div>
                <ul className="flex flex-col items-center justify-center gap-y-5 md:hidden">
                  <li>
                    <button>Login</button>
                  </li>
                  <li>
                    <button className="w-full cursor-pointer rounded-full bg-cyan px-20 py-2 text-center transition-all hover:brightness-110">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 text-gray-600 hover:text-gray-600/75 block rounded p-2.5 transition md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#9e9e9e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#9e9e9e"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
