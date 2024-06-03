import React, { useEffect, useRef, useState } from "react";
import { plusImg, telephotoVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import AccessPass from "./AccessPass";

const Telephoto = () => {
  const [end, setEnd] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const video = useRef();

  const timeUpdate = (event) => {
    const { duration, currentTime } = event.target;
    setPaused(event.target.paused);
    if (duration <= currentTime) {
      setEnd(true);
    } else {
      setEnd(false);
    }
  };

  useGSAP(() => {
    animateWIthGsap(".g_tptext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  const replay = () => {
    video.current.currentTime = "0";
    video.current.play();
  };

  const handleButton = () => {
    if (video && video.current) {
      if (end) {
        return (
          <div className="cursor-pointer text-gray" onClick={replay}>
            Replay
          </div>
        );
      } else {
        if (isPaused) {
          return (
            <div
              className="cursor-pointer text-gray"
              onClick={() => video.current.play()}
            >
              Play
            </div>
          );
        } else {
          return (
            <div
              className="cursor-pointer text-gray"
              onClick={() => video.current.pause()}
            >
              Pause
            </div>
          );
        }
      }
    }
  };

  return (
    <section className="h-full common-padding relative max-md:p-0">
      <div className="screen-max-width pb-[240px]">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            120 mm of
            <br />
            pure Pro zoom.
          </h2>
        </div>
        <div className="md:my-20 my-10">
          <video
            playsInline
            id="exploreView"
            className="w-full h-full object-cover max-md:h-[666px]"
            preload="none"
            muted
            autoPlay
            ref={video}
            onTimeUpdate={timeUpdate}
          >
            <source src={telephotoVideo} type="video/mp4" />
          </video>
          <div className="flex justify-center mt-4">{handleButton()}</div>
        </div>
        <div className="hiw-text-container max-md:max-w-[320px] max-md:m-auto">
          <div className="flex justify-center flex-col md:w-[33%]">
            <p className="hiw-text g_fadeIn g_tptext">
              For iPhone 15 Pro Max, we designed a 5x Telephoto camera with{" "}
              <span className="text-white">
                the longest optical zoom of any iPhone ever
              </span>{" "}
              to fit in our compact Pro camera system.
            </p>

            <p className="hiw-text g_fadeIn g_tptext mt-3">
              Now you can{" "}
              <span className="text-white">
                take sharper close‑ups from farther away
              </span>{" "}
              — like a phenomenal photo of your friend or a goal in your kid’s
              soccer match.
            </p>
          </div>

          <div className="flex justify-center flex-col g_fadeIn g_tptext md:w-[33%]">
            <p className="hiw-bigtext">
              5x optical <br />
              zoom
            </p>
            <p className="hiw-text">with the 120 mm lens</p>
          </div>
        </div>
        <AccessPass title="Nerd out on 5x Telephoto" id="telephoto" />
      </div>
    </section>
  );
};

export default Telephoto;
