import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="w-full border-2
   border-white/30 rounded-2xl bg-white/5 backdrop-blur-md p-10"
    >
      {children}
    </div>
  );
};

export default Card;
