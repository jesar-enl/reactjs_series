// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center text-center text-white bg-sky-600 rounded mt-1">
        <div className="container p-6">
          <div className="">
            <p className="flex items-center justify-center">
              <span className="mr-4">Register for free</span>
              <button
                type="button"
                className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign up!
              </button>
            </p>
          </div>
        </div>
        <div className="w-full p-4 text-center">
          © {new Date().getFullYear()} Copyright:
          <a className="text-white" href="#">
            J-SofTech
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
