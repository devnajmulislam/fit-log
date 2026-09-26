const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-gray-800/80">
      {/* footer container */}
      <div className="container mx-auto py-4 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* footer left */}
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#a3e635] fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm12 0a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zM3 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm18 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zM7 11h10v2H7z" />
          </svg>
          <span className="font-extrabold text-xl uppercase text-white">
            FITLOG
          </span>
        </div>

        {/* footer right */}
        <div className="text-sm text-gray-400 text-center sm:text-right">
          © 2026 FitLog - Workout Library. Train hard, log honest.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
