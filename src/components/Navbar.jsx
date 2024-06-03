import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

import AppleIcon from "../../public/assets/images/apple.svg?react";
import SearchIcon from "../../public/assets/images/search.svg?react";
import BagIcon from "../../public/assets/images/bag.svg?react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.set("#nav-bg", {
      position: "fixed",
      top: 0,
      y: -56,
      zIndex: 999,
      display: "none",
    });
    gsap.to("#nav-bg", {
      display: "block",
      y: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: "#nav-bg",
        toggleActions: "restart reverse restart reverse",
        start: "top -500",
        end: "max",
      },
    });
  }, []);
  return (
    <>
      <header className="bg-black w-full max-auto overflow-hidden" id="navbar">
        <div className="m-auto md:px-5 px-4 flex justify-between flex-col max-w-[1024px]">
          <nav className="flex w-full screen-max-width items-center h-[48px]">
            <AppleIcon
              width="14"
              height="18"
              className="nav-color hover:fill-white"
            />

            <div className="flex flex-1 justify-center gap-2 max-md:hidden">
              {navLists.map((nav) => (
                <div
                  key={nav}
                  className="text-xs cursor-pointer nav-color hover:text-white font-light transition-all px-[0.8vmax]"
                >
                  {nav}
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-[2.5vmax] max-md:justify-end max-md:flex-1">
              <SearchIcon
                width="14"
                height="18"
                className="nav-color hover:fill-white"
              />

              <BagIcon
                width="14"
                height="18"
                className="nav-color hover:fill-white"
              />
            </div>
          </nav>
        </div>
      </header>
      <header
        className="w-full max-auto overflow-hidden"
        style={{
          borderBottom: "1px solid gray",
          backgroundColor: "rgba(22, 22, 23, 0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
        }}
        id="nav-bg"
      >
        <div className="m-auto sm:px-5 px-4 flex justify-between flex-col max-w-[1024px]">
          <nav className="flex w-full screen-max-width justify-between items-center md:h-[56px] h-[48px]">
            <div className="text-xl">iPhone 15 Pro</div>
            <div className="flex items-center">
              <div className="flex items-center max-md:hidden">
                <div className="pr-5 text-xs cursor-pointer text-gray  font-light transition-all">
                  {"Overview"}
                </div>
                <div className="pr-5 text-xs cursor-pointer nav-color hover:text-blue font-light transition-all">
                  {"Switch from Android to iPhone"}
                </div>
                <div className="pr-5 text-xs cursor-pointer nav-color hover:text-blue font-light transition-all">
                  {"Tech Specs"}
                </div>
              </div>
              <a href="#highlights" className="btn-md text-xs">
                Buy
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
