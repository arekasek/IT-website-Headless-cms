import React from "react";
import header from "@/globalData/header.json";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom id="header">
      <div className="w-full sticky bg-gray-100 z-10 p-5 text-center flex justify-between md:justify-evenly items-center shadow-md top-0">
        <div className="flex h-10 w-20">
          <img
            src={header.logo.url}
            alt={header.logo.alt}
            width={header.logo.width}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex gap-2">
          {header.navLinks.map((link, index) => {
            return (
              <div key={index}>
                <Link
                  className="hover:underline text-xl font-light mx-0 text-gray-500 sm:mx-5"
                  href={link.link}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-sm bg-white overflow-hidden search-bar">
              <div className="grid place-items-center h-full w-12 text-gray-300">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search for anything"
              />
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
}
