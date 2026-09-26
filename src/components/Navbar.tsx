"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsProvider";

const Navbar = () => {
  const context = useContext(WorkoutsContext);
  const pathname = usePathname();

  // Set count from todays plan and save for later length
  const planCount = context?.todaysPlan?.length || 0;
  const savedCount = context?.saveForLater?.length || 0;

  // Active and inactive button styles
  const activeStyle = "bg-[#1e2b0e] text-[#a3e635] font-semibold";
  const inactiveStyle = "text-gray-300 hover:text-white font-medium";

  return (
    <div className="bg-[#0a0a0c] border-b border-gray-800/80">
      {/* Navbar parent */}
      <div className="navbar container mx-auto py-3 text-white">
        {/* For mobile*/}
        <div className="navbar-start gap-2">
          {/* Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-gray-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow-lg bg-[#141416] border border-gray-800 rounded-xl w-52"
            >
              <li>
                <Link
                  href="/"
                  className={`py-2 ${
                    pathname === "/"
                      ? "text-[#a3e635] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/my-plan"
                  className={`py-2 ${
                    pathname === "/my-plan"
                      ? "text-[#a3e635] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav left*/}
          <Link
            href="/"
            className="flex items-center gap-3 font-extrabold tracking-wider text-xl uppercase text-white"
          >
            <Image
              src={Logo}
              alt="FITLOG Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span>FITLOG</span>
          </Link>
        </div>

        {/* Desktop navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                pathname === "/" ? activeStyle : inactiveStyle
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              className={`px-6 py-2 rounded-full text-sm transition-colors ${
                pathname === "/my-plan" ? activeStyle : inactiveStyle
              }`}
            >
              My Plan
            </Link>
          </div>
        </div>

        {/* Nav right container*/}
        <div className="navbar-end flex items-center gap-6">
          {/* Plan counter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-200 text-sm font-medium">Plan</span>
            <span className="bg-[#a3e635] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {planCount}
            </span>
          </div>

          {/* Saved counter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm font-medium">Saved</span>
            <span className="border border-gray-600/80 text-gray-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {savedCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
