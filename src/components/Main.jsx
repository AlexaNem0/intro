import React from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div className=" flex flex-col justify-evenly items-center m-auto md:h-screen max-w-6xl gap-5 lg:flex-row  lg:gap-8 ">
      <Left />
      <Right />
    </div>
  );
};

export default Main;
