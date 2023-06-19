import React from "react";
import vector from "../../assets/All Images/Vector.png";
import vector1 from "../../assets/All Images/Vector-1.png";

const Blog = () => {
  return (
    <div>
      <div className="relative bg-base-200 h-64 mb-28 flex items-center justify-center">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Blog Details
        </h1>
        <img
          src={vector1}
          alt=""
          className="absolute top-0 right-0 h-24 w-24"
        />
        <img
          src={vector}
          alt=""
          className="absolute bottom-0 left-0 h-24 w-24"
        />
      </div>
      <div className="md:m-10">
        <div className="m-5 border p-5">
          <h1 className="font-bold">When should you use context API?</h1>
          <p className="text-gray-400 font-normal">
            The Context API is a feature provided by React, a popular JavaScript
            library for building user interfaces. It allows data to be passed
            down through the component tree without manually passing props to
            every level of the tree. The Context API is typically used in
            specific scenarios where certain pieces of data need to be made
            available to multiple components in a React application.
          </p>
        </div>
        <div className="m-5 border p-5">
          <h1 className="font-bold">What is a custom hook??</h1>
          <p className="text-gray-400 font-normal">
            A custom hook in React is a reusable piece of logic that is
            extracted into a separate function, following a specific naming
            convention of starting with the word "use", and is used to
            encapsulate stateful or side-effect logic in a functional component.
            Custom hooks allow developers to share logic across different
            components in a React application, making it easier to manage state,
            side effects, and other complex operations in a more modular
            and reusable way.
          </p>
        </div>
        <div className="m-5 border p-5">
          <h1 className="font-bold">What is useRef??</h1>
          <p className="text-gray-400 font-normal">
            In React, useRef is a Hook that provides a way to create a mutable
            reference to a value that persists across component renders. It is
            commonly used to access and manipulate DOM elements directly, store
            values that do not trigger re-renders, or manage other mutable data
            in functional components.
          </p>
        </div>
        <div className="m-5 border p-5">
          <h1 className="font-bold">What is useMemo?</h1>
          <p className="text-gray-400 font-normal">
            useMemo is a Hook in React that allows you to memoize the result of
            a computation and cache it for performance optimization. It helps to
            prevent unnecessary calculations or expensive operations from being
            re-executed during every render of a component, especially when the
            computation involves heavy computations or fetching data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
