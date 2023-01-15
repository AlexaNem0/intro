import React from "react";
import Example from "./Form";

const Right = () => {
  return (
    <div>
      <p className="text-white bg-[#6055A5] p-3.5 rounded-lg drop-shadow-lg mb-3 text-center ">
        <span
          className="font-semibold
        "
        >
          Try it free 7 days
        </span>{" "}
        then $20/mo. thereafter
      </p>
      {/* <p className="bg-white">
        First Name Last Name Email Address Password Claim your free trial By
        clicking the button, you are agreeing to our Terms and Services
      </p> */}
      <Example />
    </div>
  );
};

export default Right;
