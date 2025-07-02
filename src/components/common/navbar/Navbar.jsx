"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navLinks from "@/data/navbar";
import OwlDarkModeToggle from "@/components/utils/darkmodenavbar/OwlDarkModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close menu on mobile nav link click
  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="z-[1000] fixed top-4 left-1/2 w-[90%] h-15 w-[60%] bg-white border-gray-200 rounded-full shadow-lg transition-all duration-700 -translate-x-1/2 border sm:top-7 lg:w-[70%] xl:w-[70%]">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between px-4 py-2">
          {/* Logo guyzz any chnages make here*/}
          {/**/}

          <div className="flex items-center">
            <Link href="/" className="pl-2">
              <Image
                src="/svg/AVASA.svg"
                alt="logo"
                width={38}
                height={40}
                className="w-[40px] h-[43px] h-[58.5px] sm:w-[54px]"
                priority
              />
            </Link>
          </div>

          {/* Dark mode toggle symbol */}

          {/*name in header guyzzzzz*/}
          <span className="absolute left-17.5 w-45 text-black text-base text-lg sm:left-22 md:text-xl">
            Avasa Foundation
          </span>

          {/* Desktop Menu  links heere for reference of mapping go to data file and check*/}

          <div className="absolute right-30 hidden items-center gap-6 font-medium md:flex">
            {navLinks.middle.map((link) => (
              <div key={link.id} className="relative group">
                <Link href={link.url}>
                  <p className="relative text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-pink-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left text-medium">
                    {link.label}
                  </p>
                </Link>

                {link.dialog && (
                  <div className="z-50 absolute top-full left-0 hidden flex-col mt-1 w-40 bg-white rounded-lg shadow-md border group-hover:flex">
                    {link.dialog.map((el) => (
                      <Link href={el.path} key={el.id}>
                        <p className="px-4 py-2 text-black hover:bg-gray-100">
                          {el.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donate button make changes if you want  */}
          <div className="hidden items-center md:flex">
            <button className="relative px-4 py-2 text-white font-bold text-sm bg-gradient-to-r from-pink-500 to-pink-700 rounded-full border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-full [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]">
              Donate
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div
                className={`flex flex-col justify-between w-[28px] h-[28px] relative right-3 top-[-7px] transition-transform duration-[330ms] ease-out cursor-pointer ${
                  isMenuOpen ? "rotate-[-45deg]" : ""
                }`}
              >
                <div
                  className={`w-1/2 h-[3px] bg-pink-400 rounded-[3px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-right ${
                    isMenuOpen ? "rotate-[-90deg] translate-x-[-0.5px]" : ""
                  }`}
                ></div>
                <div className="w-full h-[3px] bg-pink-400 rounded-[3px]"></div>
                <div
                  className={`self-end w-1/2 h-[3px] bg-pink-400 rounded-[3px] transition-transform duration-[330ms] ease-[cubic-bezier(0.54,-0.81,0.57,0.57)] origin-left ${
                    isMenuOpen ? "rotate-[-90deg] translate-x-[-1.5px]" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="z-50 absolute top-full mt-3 px-4 py-4 w-full bg-white rounded-xl shadow-lg border md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.middle.map((link) => (
                <div key={link.id}>
                  <Link href={link.url} onClick={handleMobileNavClick}>
                    <p className="text-black font-medium">{link.label}</p>
                  </Link>
                  {link.dialog && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dialog.map((el) => (
                        <Link
                          href={el.path}
                          key={el.id}
                          onClick={handleMobileNavClick}
                        >
                          <p className="text-gray-600 text-sm hover:text-black">
                            {el.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                className="relative px-4 py-2 text-white font-bold text-sm bg-gradient-to-r from-pink-500 to-pink-700 rounded-full border-2 border-pink-300 shadow-lg transition-all duration-[6000ms] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:shadow-[0_0_100px_rgba(236,72,153,0.6)] hover:shadow-[0_0_150px_rgba(236,72,153,0.4)] hover:scale-110 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-800 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-pink-400 before:animate-ping before:transition-all before:duration-[6000ms] before:delay-[2000ms] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-pink-300 after:animate-ping after:transition-all after:duration-[6000ms] after:delay-[4000ms] [&>*:nth-child(3)]:absolute [&>*:nth-child(3)]:inset-0 [&>*:nth-child(3)]:rounded-full [&>*:nth-child(3)]:border-2 [&>*:nth-child(3)]:border-pink-200 [&>*:nth-child(3)]:animate-ping [&>*:nth-child(3)]:transition-all [&>*:nth-child(3)]:duration-[6000ms] [&>*:nth-child(3)]:delay-[6000ms]"
                onClick={handleMobileNavClick}
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
