import React from "react";
import NavLink from "./NavLink";
import { CommandeIcon, GalleryIcon, HomeIcon } from "./icons";

export const Aside = () => {
  return (
    <>
      <aside className="w-1/6 bg-blue-600 rounded-r-3xl hidden lg:flex lg:flex-col">
        <h3 className="text-2xl font-semibold text-white/90 text-center mt-4 mb-12">
          Bienvenue
        </h3>

        <div className="h-fit w-full space-y-4">
          <NavLink href="/dashboard/home" icon={<HomeIcon />} label="Home" />
          <NavLink
            href="Gallery1.html"
            icon={<GalleryIcon />}
            label="Gallery"
          />
          <NavLink
            href="/dashboard/commande"
            icon={<CommandeIcon />}
            label="Commande"
          />
        </div>

        <div className="flex space-x-2.5 items-center justify-center h-16 mt-auto text-white/90">
          <div className="w-5 h-5">
            <svg
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.65 22.66C19.185 28.06 16.41 30.265 10.335 30.265H10.14C3.435 30.265 0.75 27.58 0.75 20.875V11.11C0.75 4.405 3.435 1.72 10.14 1.72H10.335C16.365 1.72 19.14 3.895 19.635 9.205M10.5 16H27.57M24.225 21.025L29.25 16L24.225 10.975"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <button>Logout</button>
          </div>
        </div>
      </aside>
    </>
  );
};
