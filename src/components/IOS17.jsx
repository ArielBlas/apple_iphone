import React from "react";
import {
  ios17ContactPosterImg,
  ios17LiveStickersImg,
  ios17NamedropImg,
  plusImg,
} from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import AccessPass from "./AccessPass";

const IOS17 = () => {
  useGSAP(() => {
    animateWIthGsap(".g_i17text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="h-full common-padding relative max-md:pt-5 max-md:px-0">
      <div className="screen-max-width bg-zinc pb-[240px]">
        <div className="md:px-20 px-5 md:pt-[120px] pt-20 overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full mb-10">
              <div className="w-full md:mb-20 mb-5 g_actitle  max-md:max-w-[280px] max-md:m-auto">
                <h2 className="text-4xl lg:text-7xl md:font-semibold font-medium text-gray  ">
                  iOS 17.
                </h2>
                <h2 className="text-4xl lg:text-7xl md:font-semibold font-medium">
                  Style it out. <br /> Swap it over. <br /> Sticker it up.
                </h2>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <img
                src={ios17ContactPosterImg}
                alt="ios17-contact-poster"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex-1">
              <img
                src={ios17NamedropImg}
                alt="ios17-namedrop"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex-1">
              <img
                src={ios17LiveStickersImg}
                alt="ios17-live-stickers"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-6 mt-10">
            <div className="flex-1">
              <div className="hiw-text-container">
                <div className="flex justify-center flex-col flex-1">
                  <p className="hiw-text g_fadeIn g_i17text">
                    <span className="text-white">Contact Poster.</span> Create
                    your own poster that contacts will see when you call. Pick a
                    favorite pic or Memoji, pair it with a favorite font, and
                    there you have it — your very own calling card.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="hiw-text-container">
                <div className="flex justify-center flex-col flex-1">
                  <p className="hiw-text g_fadeIn g_i17text">
                    <span className="text-white">NameDrop.</span> Want to swap
                    contact info with someone? Just bring your iPhone close to
                    theirs. You can both choose what you want to share, and the
                    information transfers instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="hiw-text-container">
                <div className="flex justify-center flex-col flex-1">
                  <p className="hiw-text g_fadeIn g_i17text">
                    <span className="text-white">Live Stickers.</span> Touch and
                    hold an object in a photo to lift it from the background and
                    create a sticker. Add effects like Puffy and Shiny. Or
                    create animated stickers from Live Photos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AccessPass title="Find out more about iOS17" id="ios17" />
      </div>
    </section>
  );
};

export default IOS17;
