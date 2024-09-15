import React from "react";

const Checklist = ({ items }) => {
  return (
    <div>
      <ul className="border-t border-gray-300 py-8 space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 px-8">
            <span className="bg-blue-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="text-gray-600 ">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
