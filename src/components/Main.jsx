import React from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div className=" flex flex-col justify-between items-center m-auto h-screen max-w-6xl gap-4 md:flex-row  ">
      <Left />
      <Right />
    </div>
  );
};

export default Main;
