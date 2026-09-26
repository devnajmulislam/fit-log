import BannerImg from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="p-4 md:p-8 bg-[#0b0c10] container mx-auto">
      {/* Card container */}
      <div className="bg-[#12141d] rounded-2xl border border-gray-800/60 p-6 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden shadow-2xl">
        {/* Left side contents */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          {/* Subtitle / Category Tag */}
          <span className="text-[#a8f000] text-xs md:text-sm font-bold tracking-widest uppercase block">
            Workout Library
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide uppercase leading-none font-sans">
            Train With Intent. <br className="hidden sm:inline" />
            Log Every Set.
          </h1>

          {/* Body Description */}
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* Action Button (using daisyUI button classes) */}
          <div className="pt-2">
            <Link href="/" className="btn bg-[#a8f000] hover:bg-[#92d400] text-black font-extrabold border-none uppercase tracking-wider text-sm px-6 rounded-lg transition-transform hover:scale-105 active:scale-95">
              Browse Workouts
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none">
          <Image
            src={BannerImg}
            alt="Workout Equipment Illustration"
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
