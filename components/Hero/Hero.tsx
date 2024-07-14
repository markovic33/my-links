import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="p-4  mt-6 lg:mt-24">
      <div className="max-w-xs lg:max-w-md ">
        <h1 className="text-2xl lg:text-6xl font-bold">
          Your one link <br /> for everything
        </h1>
        <h2 className="text-gray-100/50 text-lg lg:text-xl mt-6">
          Share your links, social profiles, contact info and more on one page
        </h2>
      </div>
      <form className="min-w-full px-6 lg:px-0 flex items-center justify-center mt-5 shadow-xl">
        <span className="bg-white py-4 px-2 rounded-l-lg font-medium">
          MyLinks.to/@
        </span>
        <input type="text" className=" py-4" placeholder="username" />
        <button
          type="submit"
          className="bg-black w-full rounded-r-lg font-medium text-white py-4 px-6"
        >
          <Link href="/sign-up">Join</Link>
        </button>
      </form>
    </div>
  );
};

export default Hero;
