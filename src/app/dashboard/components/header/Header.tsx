import React from "react";
import { HamburgerIcon } from "./icons";

interface HeaderProps {
  name: string;
  email: string;
}

export const Header: React.FC<HeaderProps> = ({ name, email }) => {
  return (
    <nav className="h-16 flex flex-row justify-between items-center p-2 bg-white shadow-sm">
      <div>
        <h2 className="text-xl font-bold text-blue-800 ">Bijoux & Déco</h2>
      </div>
      <div className="flex flex-row items-center">
        <div className="mr-2.5">
          <div>{/* <img src="" alt="" /> */}</div>
          <h3 className="text-md text-black font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <div className="w-6 h-6 lg:hidden block min-w-fit">
          <HamburgerIcon/>
        </div>
      </div>
    </nav>
  );
};
