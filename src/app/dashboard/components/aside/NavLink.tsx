"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => {
  const router = usePathname();
  const isActive = router === href;
  return (
    <div
      className={`flex items-center space-x-6 pl-10 py-1 border-l-2 ${
        isActive
          ? " text-white  border-white bg-white/10"
          : "text-white/60 border-transparent"
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavLink;
