import React from "react";
import { plusImg, valuesImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import AccessPass from "./AccessPass";

const StandsFor = () => {
  useGSAP(() => {
    animateWIthGsap(".g_sftext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative max-md:py-5 max-md:px-0">
      <div className="screen-max-width bg-zinc pb-[240px]">
        <div className="md:px-20 px-10 md:pt-[120px] pt-20 overflow-hidden">
          <div className="flex flex-col justify-center items-center max-md:max-w-[280px] max-md:m-auto">
            <div
              className="w-full md:mb-20 mb-10"
              style={{
                borderBottom: "1px solid #424245",
              }}
            >
              <div className="flex w-full justify-start pb-10">
                <img src={valuesImg} alt="values" />
              </div>
              <div className="w-full md:mb-20 mb-10 g_actitle">
                <h2 className="text-4xl lg:text-7xl md:font-semibold font-medium">
                  Designed to <br />
                  make a difference.
                </h2>
              </div>
            </div>
          </div>

          <div className="hiw-text-container max-md:max-w-[280px] max-md:m-auto">
            <div className="flex justify-center flex-col flex-1">
              <p className="hiw-text g_fadeIn g_sftext">
                <span className="text-white">
                  What matters to you matters to Apple, too.
                </span>{" "}
                From privacy protections that give you more control over your
                data. To using more recycled materials that minimize
                environmental impact. To creating built‑in features that make
                iPhone accessible to all.
              </p>
            </div>
            <div className="flex-1 ">
              <div className="flex justify-center flex-col  g_fadeIn g_sftext ">
                <p className="hiw-text  g_sftext">
                  The internal structural frame of iPhone 15 Pro has
                </p>
                <p className="hiw-bigtext ">
                  100% recycled <br /> aluminum{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <AccessPass title="What iPhone stands for" id="stadsfor" />
      </div>
    </section>
  );
};

export default StandsFor;
