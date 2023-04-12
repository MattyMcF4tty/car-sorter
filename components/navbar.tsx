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
    <div className="w-[7rem] h-[100vh] bg-green-500 fixed flex flex-col z-20">
      <img src="GreenLogo.png" alt="" className="w-3/5" />
      <div className="w-full mt-40">
        <button
          className="w-[120%] h-10 bg-green-800 text-white translate-x-[-17%] hover:translate-x-0 duration-200 hover:pr-[45.55px]"
          onClick={listPage}
        >
          List
        </button>
        <button
          className="w-[120%] h-10 bg-green-800 text-white translate-x-[-17%] hover:translate-x-0 duration-200 hover:pr-[45.55px]"
          onClick={mapPage}
        >
          Map
        </button>
      </div>
    </div>
  );
};

export default Navbar;
