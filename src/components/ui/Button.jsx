import React from "react";

const Button = ({isSubmitting, type, onClick, children}) => {
  return (
    <button
      className={`sm rounded-md border-2 border-blue-800 px-2 py-1 text-sm text-white ${
        isSubmitting ? "bg-red-600" : "bg-green-600"
      }`}
      type={type}
      onClick={onClick}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
};

export default Button;
