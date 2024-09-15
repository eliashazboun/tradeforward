import React from "react";
import email from "../images/message.png";

const Person = ({ img, name, description, mailto }) => {
  return (
    <div className="flex flex-col p-4 w-full text-black items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 hover-target">
      <img
        className="object-cover w-full rounded-full h-96  md:h-auto md:w-48"
        src={img}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl w-fit font-bold tracking-tight text-gray-900 hover-underline-animation">
          {name}
        </h5>
        <p class="mb-3 font-normal text-gray-700">{description}</p>
        <a
          href={`mailto:${mailto}`}
          className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors"
        >
          <img src={email} alt="email" className="h-6 w-6" />
          <span>Email {name.split(" ")[0]}</span>
        </a>
      </div>
    </div>
  );
};

export default Person;
