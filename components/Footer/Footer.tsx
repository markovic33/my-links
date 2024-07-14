/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 bg-slate-50/40 py-1">
      <div className="flex items-center  space-x-16 overflow-hidden">
        <div className="flex space-x-16 animate-loop-scroll">
          <img src="/fb.png" alt="Facebook logo" className="max-w-none h-8" />
          <img src="/git.png" alt="GitHub logo" className="max-w-none h-8" />
          <img
            src="/instagram11.png"
            alt="Instagram logo"
            className="max-w-none h-6"
          />
          <img
            src="/linkedin1.png"
            alt="LinkedIn logo"
            className="max-w-none h-6"
          />
          <img src="/tiktok.png" alt="Tiktok logo" className="max-w-none h-6" />
          <img src="/yt.png" alt="yt logo" className="max-w-none h-6" />
        </div>

        <div
          className="flex items-center justify-center space-x-16 animate-loop-scroll"
          aria-hidden="true"
        >
          <img src="/fb.png" alt="Facebook logo" className="max-w-none h-6" />
          <img src="/git.png" alt="GitHub logo" className="max-w-none h-6" />
          <img
            src="/Instagram11.png"
            alt="Instagram logo"
            className="max-w-none h-6"
          />
          <img
            src="/linkedin1.png"
            alt="LinkedIn logo"
            className="max-w-none h-6"
          />
          <img src="/tiktok.png" alt="Tiktok logo" className="max-w-none h-8" />
          <img src="/yt.png" alt="yt logo" className="max-w-none h-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
