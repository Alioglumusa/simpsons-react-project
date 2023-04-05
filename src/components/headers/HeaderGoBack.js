import { Link } from "react-router-dom";
import React from "react";

const HeadersGoBack = () => {
  const logo_url =
    "https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png";
  
    return (
    <header className="bg-purple flex justify-between items-center px-6 ">
    <Link to="/">
      <div>
        👈<span className="text-blue-700 font-black text-sm">Go Back</span>
      </div>
    </Link>
    <Link to="/">
      <div className="w-20 ">
        <img src={logo_url} alt="logo" />
      </div>
    </Link>
    <Link to="/characters/add">
      <button className="text-white border-2 rounded-3xl border-blue-900 px-2">
        ✨ Add
      </button>
    </Link>
  </header>
  );
};

export default HeadersGoBack;