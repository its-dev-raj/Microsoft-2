import React from "react";

function Button({ text }) {
  return (
    <div
      className="border rounded-md px-8 py-3 w-fit bg-blue-400 text-white text-sm font-semi
  "
    >
      {text}
    </div>
  );
}

export default Button;
