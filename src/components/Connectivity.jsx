import React from "react";
import { plusImg, usbcImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import AccessPass from "./AccessPass";

const Connectivity = () => {
  useGSAP(() => {
    animateWIthGsap(".g_coimg", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
    animateWIthGsap(".g_cotext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative max-md:p-0">
      <div className="relative pb-[240px]">
        <div className="screen-max-width md:px-16 md:max-w-[950px] max-md:max-w-[280px] max-w:m-auto">
          <div className="flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full md:mb-20 g_actitle">
              <h2 className="text-4xl lg:text-7xl md:font-semibold font-medium md:ml-10">
                Gigablast <br />
                your gigabits
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="mt-20 w-full max-md:w-[200px] flex md:justify-center justify-end g_fadeIn g_coimg max-md:mx-[170px]">
            <img
              className="md:w-full md:max-w-[1054px] max-w-[652px] md:h-[932px] h-[578px]"
              src={usbcImg}
              alt="usbc"
            />
          </div>
          <div className="screen-max-width md:px-16 md:mt-10 mt-20 max-md:max-w-[280px] max-w:m-auto md:max-w-[950px]">
            <div className="hiw-text-container">
              <div className="flex justify-center flex-col md:w-[33%]">
                <p className="hiw-text g_fadeIn g_cotext">
                  iPhone 15 Pro is the first iPhone to support USB 3,5 for a{" "}
                  <span className="text-white">
                    huge leap in data transfer speeds
                  </span>{" "}
                  and faster pro workflows than ever before.
                </p>

                <p className="hiw-text g_fadeIn g_cotext mt-8">
                  The new USB‑C connector lets you{" "}
                  <span className="text-white">
                    charge your Mac or iPad with the same cable you use to
                    charge iPhone 15 Pro
                  </span>
                  . Bye‑bye, cable clutter.
                </p>
              </div>
              <div className="flex justify-center flex-col md:w-[33%] g_fadeIn g_cotext">
                <p className="hiw-text">Up to</p>
                <p className="hiw-bigtext">20x-fasteer</p>
                <p className="hiw-text">file transfers</p>

                <p className="hiw-text mt-8">
                  And with all‑new Wi‑Fi 6E6 you'll get{" "}
                  <span className="text-white">
                    two times faster wireless speeds
                  </span>
                  . So you can upload, download, and transfer files in a flash.
                </p>
              </div>
            </div>
          </div>
        </div>
        <AccessPass title="Explore Connectivity" id="connectivity" />
      </div>
    </section>
  );
};

export default Connectivity;
