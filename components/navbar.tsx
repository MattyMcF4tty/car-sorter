import React from "react";
import { NextRouter, useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const listPage = () => {
    router.push("/");
  };
  const mapPage = () => {
    router.push("/map");
  };

  return (
    <div className="w-[7rem] h-[100vh] bg-green-500 fixed flex flex-col">
      <img src="GreenLogo.png" alt="" className="w-1/2" />
      <div className="w-full mt-36">
        <button
          className="w-full h-10 bg-green-800 text-white"
          onClick={listPage}
        >
          List
        </button>
        <button
          className="w-full h-10 bg-green-800 text-white"
          onClick={mapPage}
        >
          Map
        </button>
      </div>
    </div>
  );
};

export default Navbar;
