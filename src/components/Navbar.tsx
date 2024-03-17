"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const dropDownList = [
    { text: "Internet", href: "/posts" },
    { text: "Books", href: "/posts" },
    { text: "Open Source", href: "/posts" },
  ];

  return (
    <nav className="pt-16">
      <Container>
        <div className="flex items-center">
          {/* icon menu */}
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* icon menu */}

          {/* logo */}
          <div className="flex w-6/12 items-center justify-center text-lg lg:mr-24 lg:w-2/12 lg:justify-start">
            <Link href="/" className="flex items-center">
              <div className="mr-3 flex h-9 w-9 items-center justify-center  rounded bg-gray-500 text-center shadow-2xl">
                E
              </div>
              Epictetus
            </Link>
          </div>
          {/* logo */}

          {/* navlist */}
          <div
            className={`fixed top-0 h-full w-full bg-gradient-to-b from-gray-600 to-gray-900 p-10 lg:static lg:h-auto lg:w-7/12 lg:bg-none lg:p-0 ${offCanvas ? "left-0" : "-left-full"} transition-all`}
          >
            {/* button close */}
            <button
              className="absolute right-10 top-10 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {/* button close */}

            <ul className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
              <li>
                <Link href="/posts" className="hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Front-end
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Back-end
                </Link>
              </li>
              <li className="relative">
                <a
                  onClick={() => setDropDown(!dropDown)}
                  className="flex cursor-pointer items-center hover:underline"
                >
                  Lainnya
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropDown && (
                  <ul className="absolute mt-3 w-[200px] rounded bg-gray-800">
                    {dropDownList.map(({ text, href }) => (
                      <li className="cursor-pointer border-b border-b-white/5 px-5 py-3 hover:bg-gray-700/50">
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          {/* navlist */}

          {/* search */}
          <div
            className={`absolute left-0 w-full p-10 transition-all lg:static lg:w-3/12 lg:p-0 ${search ? "top-5" : "-top-40"}`}
          >
            <input
              type="text"
              className="w-full rounded-lg bg-gray-700 px-8 py-2 shadow-2xl lg:rounded-full"
              placeholder="Search..."
            />
            {/* button close */}
            <button
              className="absolute right-12 top-12 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {/* button close */}
          </div>
          {/* search */}

          {/* search mobile logo */}
          <div className="w-3/12 text-right lg:hidden">
            <button onClick={() => setSearch(!search)}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          {/* search mobile logo */}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
