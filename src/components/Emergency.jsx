import React from "react";
import { plusImg, safetyImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import AccessPass from "./AccessPass";

const Emergency = () => {
  useGSAP(() => {
    animateWIthGsap(".g_etext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative max-md:p-0 g max-md:pb-5">
      <div className="screen-max-width bg-zinc pb-[240px]">
        <div className="relative overflow-hidden">
          <div className="flex flex-col justify-center items-center w-full md:px-20 px-10 md:pt-[120px] pt-20 absolute">
            <div className="w-full mb-20 g_actitle max-md:max-w-[280px] max-md:m-auto">
              <h2 className="text-4xl lg:text-7xl md:font-semibold font-medium md:ml-20">
                In an emergency, <br />
                iPhone has your back.
              </h2>
            </div>
          </div>
          <img
            className="w-full max-md:h-[620px] object-cover object-center"
            src={safetyImg}
            alt="safety"
          />
        </div>
        <div className="md:pt-20 pt-10">
          <div className="hiw-text-container md:mx-20">
            <div className="flex justify-center flex-col md:w-[33%]">
              <p className="hiw-text g_fadeIn g_etext">
                New{" "}
                <span className="text-white">
                  Roadside Assistance via satellite
                </span>{" "}
                can get you help for things like a flat tire or a dead battery,
                even when you’re off the grid.
              </p>
            </div>
            <div className="flex justify-center flex-col md:w-[33%]">
              <p className="hiw-text g_fadeIn g_etext">
                iPhone also has{" "}
                <span className="text-white">
                  Emergency SOS via satellite and Crash Detection
                </span>
                , two vital safety features that have helped save lives.
              </p>
            </div>
          </div>
        </div>
        <AccessPass title="Learn how it all works" id="emergecy" />
      </div>
    </section>
  );
};

export default Emergency;
