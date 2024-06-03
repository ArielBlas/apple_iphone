import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useState } from "react";
import { animateWIthGsap } from "../utils/animations";

import UpIcon from "../../public/assets/images/arrow-up.svg?react";
import DownIcon from "../../public/assets/images/arrow-down.svg?react";
import { airpodsImg, macImg, watchImg } from "../utils";

const Dropdown = (props) => {
  const { open, onClick, title, children, id } = props;

  useGSAP(() => {
    gsap.to(".expanded", { height: "auto", duration: 0.5 });
    gsap.to(".closed", {
      height: 0,
      duration: 0.5,
    });
  }, [open]);

  return (
    <div
      className="w-full"
      style={{ borderBottom: id !== 2 ? "1px solid rgb(66, 66, 69)" : "" }}
    >
      <div
        className="flex items-center cursor-pointer md:py-8 py-5"
        onClick={onClick}
      >
        <div className="flex-1">
          <div className="md:text-3xl text-2xl font-medium md:whitespace-pre-line">
            {title}
          </div>
        </div>

        {open ? (
          <UpIcon width={20} height={20} />
        ) : (
          <DownIcon width={20} height={20} />
        )}
      </div>
      <div
        className={`accordion ${open ? "expanded" : "closed"}`}
        id={"accordin-" + id}
      >
        <div className="md:pb-6">{children}</div>
      </div>
    </div>
  );
};

const Significant = () => {
  const [open, setOpen] = useState([true, false, false]);
  const [prevId, setPrevId] = useState(0);
  const [imageId, setImageId] = useState(0);

  useGSAP(() => {
    animateWIthGsap("#s_heading", { y: 0, opacity: 1 });

    gsap.fromTo(
      ".fade-out",
      {
        opacity: 1,
        duration: 1,
        display: "block",
      },
      {
        opacity: 0,
        display: "none",
      }
    );

    gsap.fromTo(
      ".fade-in",
      {
        opacity: 0,
        display: "none",
      },
      {
        opacity: 1,
        duration: 1,
        display: "block",
      }
    );
  }, [imageId]);

  const handleClick = (id) => {
    setPrevId(imageId);
    setImageId(id);
    if (open[id] !== true) {
      setOpen((prev) => {
        return prev.map((e, idx) => (idx === id ? !e : false));
      });
    }
  };

  return (
    <section className="common-padding bg-zinc">
      <div className="screen-max-width">
        <h1 id="s_heading" className="section-heading pb-10">
          Significant others.
        </h1>

        <div className="flex items-center bg-black rounded-3xl overflow-hidden">
          <div className="md:p-16 p-10 max-md:w-full">
            <div className="flex flex-col justify-center md:w-[350px] md:h-[550px] h-[676px] w-full">
              <Dropdown
                title={"iPhone and\n Apple Watch"}
                onClick={() => handleClick(0)}
                open={open[0]}
                id={0}
              >
                <div className="text-gray">
                  Misplaced your iPhone? The latest Apple Watch models can show
                  you its approximate distance and direction.21 To set up a
                  group photo on your iPhone, join the group and use Apple Watch
                  as a viewfinder to snap the shot. And when you take a call on
                  your Apple Watch, just tap your iPhone to continue the
                  conversation there.
                </div>

                <div className="md:hidden my-10">
                  <img
                    className="max-md:max-w-[192px] mx-auto"
                    src={watchImg}
                    alt="watch"
                  />
                </div>
              </Dropdown>
              <Dropdown
                title="iPhone and Mac"
                onClick={() => handleClick(1)}
                open={open[1]}
                id={1}
              >
                <div className="text-gray">
                  You can answer calls or messages from your iPhone directly on
                  your Mac. Copy images, video, or text from your iPhone, then
                  paste into another app on your nearby Mac. And with iCloud,
                  you can access your favorite files from either your iPhone or
                  Mac.
                </div>
                <div className="md:hidden my-10">
                  <img
                    className="max-md:max-w-[283px] mx-auto"
                    src={macImg}
                    alt="mac"
                  />
                </div>
              </Dropdown>
              <Dropdown
                title="iPhone and AirPods"
                onClick={() => handleClick(2)}
                open={open[2]}
                id={2}
              >
                <div className="text-gray">
                  Set up AirPods on iPhone with just a tap. You’ll love Adaptive
                  Audio, which automatically tailors the noise control to
                  provide the best listening experience across different
                  environments and interactions throughout the day.
                </div>
                <div className="md:hidden my-10">
                  <img
                    className="max-md:max-w-[196px] mx-auto"
                    src={airpodsImg}
                    alt="airpods"
                  />
                </div>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center relative max-md:hidden">
            <img
              className={`absolute-center ${
                imageId == 0 ? "fade-in" : prevId == 0 ? "fade-out" : "hidden"
              }`}
              src={watchImg}
              alt="watch"
            />
            <img
              className={`absolute-center  ${
                imageId == 1 ? "fade-in" : prevId == 1 ? "fade-out" : "hidden"
              }`}
              src={macImg}
              alt="mac"
              style={{ minWidth: 900 }}
            />
            <img
              className={`absolute-center  ${
                imageId == 2 ? "fade-in" : prevId == 2 ? "fade-out" : "hidden"
              }`}
              src={airpodsImg}
              alt="airpods"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Significant;
