const LoadingPage = () => {
  return (
    <div className="p-4 md:p-8 bg-[#0b0c10] container mx-auto flex items-center justify-center">
      {/* Loading container */}
      <div className="w-full max-w-lg bg-[#12141d] rounded-2xl border border-gray-800/60 p-8 md:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#a8f000]/5 blur-3xl rounded-full pointer-events-none" />

        {/* Animated spinner */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="w-16 h-16 border-4 border-gray-800 border-t-[#a8f000] rounded-full animate-spin" />
          
          {/* Inner pulsing dot */}
          <div className="absolute w-4 h-4 bg-[#a8f000] rounded-full animate-ping opacity-75" />
        </div>

        {/* Text area */}
        <div className="space-y-2">
          <span className="text-[#a8f000] text-xs md:text-sm font-bold uppercase  block">
            FitLog Loading
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase font-sans ">
            Preparing Your Workout...
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-xs mx-auto">
            Setting up the plates and loading data.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoadingPage;