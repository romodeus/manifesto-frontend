import React from "react";

const Header = () => {
  return (
    <div className="pt-20">
      <div className="flex justify-center">
        <div className="col tracking-[.12em] text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2">
          MANIFESTO
        </div>
      </div>
      <p className="text-center text-xl font-bold text-[#2C2C2C] tracking-wider">
        Make your <span className="text-[#BD279C]">URL</span> easier to
        remember.
      </p>
    </div>
  );
};

export default Header;
