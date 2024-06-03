import React from "react";
import { foundationVideo, frameImg, iphoneIconImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";

const BatteryLife = () => {
  useGSAP(() => {
    animateWIthGsap(".g_bltext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center max-md:max-w-[280px] max-md:m-auto">
          <h2 className="hiw-title max-md:text-left max-md:w-full">
            Battery life that’s
            <br /> positively Pro.
          </h2>

          <p className="hiw-subtitle max-md:text-left">
            Even with so many advanced new features, iPhone 15 Pro still <br />
            gives you amazing all‑day battery life.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14 max-md:max-w-[320px] max-md:m-auto">
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
                className="pointer-events-none w-full"
                playsInline
                preload="none"
                muted
                autoPlay
              >
                <source src={foundationVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div
          className="hiw-text-container max-md:max-w-[280px] md:max-w-[980px] max-md:m-x-auto max-md:mt-10"
          style={{ width: "100%" }}
        >
          <div className="flex justify-center flex-col md:w-[50%] g_fadeIn g_bltext">
            <div
              style={{
                maxWidth: "180px",
              }}
            >
              <p className="hiw-text">Up to</p>
              <p className="hiw-bigtext">29 hrs</p>
              <p className="hiw-text">video playback on iPhone 15 Pro Max</p>
            </div>
            <div
              className="mt-8"
              style={{
                maxWidth: "180px",
              }}
            >
              <p className="hiw-text">Up to</p>
              <p className="hiw-bigtext">23 hrs</p>
              <p className="hiw-text">video playback on iPhone 15 Pro</p>
            </div>
          </div>
          <div className="flex justify-center flex-col md:w-[50%] g_fadeIn g_bltext">
            <p className="hiw-text">
              Add a MagSafe Charger for{" "}
              <span className="text-white">
                fast, efficient wireless charging
              </span>
            </p>

            <div
              className="md:mt-16 mt-8 pt-6 flex "
              style={{
                borderTop: "1px solid rgb(134,134,139)",
              }}
            >
              <div
                className="md:mr-8 mr-4"
                style={{
                  minWidth: 40,
                  minHeight: 40,
                }}
              >
                <img
                  src={iphoneIconImg}
                  alt="icon-iphone"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="hiw-text max-md:text-lg">
                  iPhone 15 Pro Max has up to 9 more hours video playback than
                  iPhone 12 Pro Max
                </p>
                <p className="hiw-text md:mt-6 mt-4 max-md:text-lg">
                  iPhone 15 Pro has up to 6 more hours video playback than
                  iPhone 12 Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatteryLife;
