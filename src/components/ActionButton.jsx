import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { animateWIthGsap } from "../utils/animations";
import { actionButtons } from "../constants";
import { gradientImg, iphonBackgroundImg } from "../utils";

const ActionButton = () => {
  const [selected, setSelected] = useState(1);

  useGSAP(() => {
    animateWIthGsap(".g_actitle", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    animateWIthGsap(".g_actext", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    animateWIthGsap(".g_acbottom", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative">
      <div className="screen-max-width lg:px-16 md:max-w-[950px] max-md:max-w-[280px] max-md:m-auto">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full md:mb-20 g_ctext g_actitle">
            <h2 className="text-4xl md:text-7xl md:font-semibold font-medium md:ml-10">
              Get in on the <br />
              Action button.
            </h2>
          </div>
        </div>

        <div className="hiw-text-container max-lg:justify-normal my-10">
          <div className="flex justify-center flex-col md:w-[33%]">
            <p className="hiw-text g_fadeIn g_actext mt-16">
              The all‑new Action button is{" "}
              <span className="text-white">
                a fast track to your favorite feature
              </span>
              . Once you set the one you want, just press and hold to launch the
              action.
            </p>
            <div className="pt-20 ml-10 max-md:hidden">
              <ul className="flex flex-col items-start">
                {actionButtons.map((action) => (
                  <li
                    key={action.id}
                    className={`my-1 py-1 px-3 inline-flex cursor-pointer border-2 rounded-full  ${
                      selected === action.id
                        ? "text-white"
                        : "border-transparent hover:text-white hover:bg-gray-300 opacity-50"
                    }`}
                    onClick={() => setSelected(action.id)}
                  >
                    <img className="mr-3" src={action.icon} alt={action.text} />
                    <span>{action.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center flex-col md:w-[33%] max-md:mt-10">
            <div className="relative h-full flex-center md:w-[358px] lg:w-[418px] md:h-[732px] w-full">
              <div className="pin-wrapper max-md:hidden">
                <div className="pin pin-horizontal pin-horizontal-right"></div>
              </div>
              <div
                className="md:absolute max-md:relative w-full h-full overflow-hidden lg:flex-center"
                style={{ zIndex: 0 }}
              >
                <img
                  src={iphonBackgroundImg}
                  alt="frame"
                  className="bg-transparent relative z-10"
                />
                <img
                  src={gradientImg}
                  alt="gradient"
                  className="absolute bg-transparent z-10 bottom-0 top-0"
                />

                <div
                  style={{
                    position: "absolute",
                    top: "7px",
                    left: "59px",
                  }}
                >
                  {actionButtons.map(
                    (action) =>
                      action.id === selected && (
                        <img
                          src={action.image}
                          alt={action.text}
                          key={action.id}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hiw-text-container overflow-hidden">
          <div className="flex justify-center flex-col md:w-[33%]">
            <p className="hiw-text g_fadeIn g_acbottom">
              By default, the{" "}
              <span className="text-white">
                Action button is set to toggle between Ring and Silent modes
              </span>
              . If you choose a different action, you can use Control Center to
              mute or use Focus filters to automatically set your iPhone to
              silent.
            </p>
          </div>
          <div className="flex justify-center flex-col md:w-[33%]">
            <p className="hiw-text g_fadeIn g_acbottom">
              Whatever you’re doing, the Action button is at the ready. Launch
              Camera to catch a spontaneous selfie. Record an instant voice
              memo. You can even{" "}
              <span className="text-white">
                select Shortcut to open an app or run a series of tasks
              </span>{" "}
              like switching on the lights in your living room and playing
              music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButton;
