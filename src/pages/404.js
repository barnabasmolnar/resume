import React from "react";
import { Svg404 } from "../images/Svg404";

const Page404 = () => (
  <div className="flex items-center justify-center w-screen h-screen">
    <div className="block text-center">
      <Svg404 className="block w-64 h-64" />
      <h1 className="text-3xl font-bold tracking-wider text-indigo-700 uppercase">
        Page not found
      </h1>
    </div>
  </div>
);

export default Page404;
