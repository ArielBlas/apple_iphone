import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWIthGsap } from "../utils/animations";
import { plusImg } from "../utils";
import AccessPass from "./AccessPass";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWIthGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding max-md:py-0">
      <div className="screen-max-width pb-[240px]">
        <div className="overflow-hidden">
          <div id="chip" className="flex-center w-full my-20">
            <img
              className="md:w-[180px] md:h-[180px] w-[100px] h-[100px]"
              src={chipImg}
              alt="chip"
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-md:max-w-[280px] m-auto">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming
          </h2>

          <p className="hiw-subtitle">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14 max-md:max-w-[320px] m-auto">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex justify-center flex-col md:w-[33%]">
            <p className="hiw-text g_fadeIn ">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn mt-2">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>

          <div className="flex justify-center flex-col g_fadeIn md:w-[33%]">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>

        <AccessPass title="Go deeper on A17 Pro" id="howitworks" />
      </div>
    </section>
  );
};

export default HowItWorks;