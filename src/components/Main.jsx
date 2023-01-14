import React from "react";
import Left from "./Left";
import Right from "./Right";

const Main = () => {
  return (
    <div className="flex flex-col justify-between items-center m-auto max-w-6xl gap-4 md:flex-row mt-11 ">
      <Left />
      <Right />
    </div>
  );
};

export default Main;
