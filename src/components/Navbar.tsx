import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0a0a0c] border-b border-gray-800/80">
      <div className="navbar container mx-auto py-3 min-h-0 text-white">
        {/* Mobile Menu & Logo */}
        <div className="navbar-start gap-2">
          {/* Mobile Dropdown */}
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
                <Link href="/" className="text-[#a3e635] font-semibold py-2">
                  Workouts
                </Link>
              </li>
              <li>
                <Link href="/my-plan" className="text-gray-300 hover:text-white py-2">
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Logo & Name */}
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

        {/* Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="bg-[#1e2b0e] text-[#a3e635] px-6 py-2 rounded-full font-semibold text-sm transition-colors"
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              className="text-gray-300 hover:text-white px-6 py-2 rounded-full font-medium text-sm transition-colors"
            >
              My Plan
            </Link>
          </div>
        </div>

        {/* Right Section: Counters */}
        <div className="navbar-end flex items-center gap-6">
          {/* Plan Counter */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-gray-200 text-sm font-medium">Plan</span>
            <span className="bg-[#a3e635] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Saved Counter */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-gray-300 text-sm font-medium">Saved</span>
            <span className="border border-gray-600/80 text-gray-400 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
