import React from "react";

const Button = ({ text, onClick, style, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`px-2 py-2  border rounded  transition-colors  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
