import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="md:p-8 bg-[#0b0c10] container mx-auto flex items-center justify-center">
      {/*Container */}
      <div className="w-full bg-[#12141d] rounded-2xl border border-gray-800/60 p-8 md:p-16 lg:p-20 text-center space-y-6 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#a8f000]/5 blur-3xl rounded-full pointer-events-none" />

        {/* Tag */}
        <span className="text-[#a8f000] text-xs md:text-sm font-bold uppercase tracking-wider block">
          404 - Page Not Found
        </span>

        {/* Numerical Indicator */}
        <div className="text-7xl sm:text-8xl lg:text-9xl font-black text-white/10 select-none tracking-tight">
          404
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase font-sans -mt-10 sm:-mt-14">
          Off Target.
          <br />
          This Set Doesn&apos;t Exist.
        </h1>

        {/* Body description */}
        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md mx-auto">
          The page you are looking for might have been moved, deleted, or never
          logged into the system.
        </p>

        {/* Return Action Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-[#a8f000] hover:bg-[#92d400] text-black font-extrabold uppercase text-sm px-8 py-3.5 rounded-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#a8f000]/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
