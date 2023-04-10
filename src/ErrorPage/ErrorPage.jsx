import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-700">{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
