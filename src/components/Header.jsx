import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <div className="bg-blue-500 px-20 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-bold tracking-wider mb-4 text-5xl">
          Cart
        </h1>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="relative w-16 h-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <div className="absolute top-0 left-10 size-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-lg">
            {amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
