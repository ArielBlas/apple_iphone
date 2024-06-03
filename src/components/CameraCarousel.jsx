import React, { useState, useEffect } from "react";
import { cameraSlider } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { arrowLeftImg, arrowRightImg } from "../utils";

const CameraCarousel = () => {
  const [width, setWidth] = useState(100);
  const [image, setImage] = useState({
    imageId: 0,
  });
  const [arrows, setArrows] = useState({
    left: true,
    right: false,
  });

  const { imageId } = image;
  const { left, right } = arrows;

  const item = cameraSlider.find((e) => e.id == imageId + 1);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(document.getElementById("camera-container"));
  });

  useGSAP(() => {
    const sliderCamera = document.getElementById("slider-camera");
    const slwidth = sliderCamera.clientWidth;

    gsap.to("#slider-camera", {
      x: -(slwidth - (width - slwidth) / 2 + 10 * imageId),
      xPercent: -100 * (imageId - 1),
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      ".slider-camera",
      {
        opacity: 1,
        duration: 1,
      },
      {
        opacity: 0.3,
      }
    );

    gsap.fromTo(
      ".current",
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [width, imageId]);

  const handleSlider = (name) => {
    switch (name) {
      case "prev":
        if (imageId > 0) {
          setImage((prev) => ({ ...prev, imageId: prev.imageId - 1 }));
          setArrows((prev) => ({ ...prev, right: false }));
        } else {
          setArrows((prev) => ({ ...prev, left: true }));
        }
        break;

      case "next":
        if (imageId < cameraSlider.length - 1) {
          setImage((prev) => ({ ...prev, imageId: imageId + 1 }));
          setArrows((prev) => ({ ...prev, left: false }));
        } else {
          setArrows((prev) => ({ ...prev, right: true }));
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div
        className="flex items-center pt-20 overflow-hidden"
        id="camera-container"
        style={{ gap: 10 }}
      >
        {cameraSlider.map((list, i) => (
          <div
            key={list.id}
            id="slider-camera"
            className={` ${imageId === i ? "current" : "slider-camera"}`}
          >
            <div className="relative md:w-[653px] md:h-[490px] w-[274px] h-[365px]">
              <div className="w-full h-full flex-center bg-black">
                <img
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                  src={list.image}
                  alt={list.text}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:items-center justify-end my-10 px-10">
        <div
          className="flex w-full justify-center absolute"
          style={{ left: 0, right: 0 }}
        >
          <div className="items-center">
            {item.time} <span className="text-gray">{item.text}</span>
          </div>
        </div>
        <div className="flex items-center justify-end max-md:mt-10">
          <button
            className={`control-btn cursor-pointer p-[0px!important] ${
              left ? "opacity-[0.5]" : ""
            }`}
            onClick={() => handleSlider("prev")}
            disabled={left}
          >
            <img src={arrowLeftImg} alt="arrow-left" width={36} height={36} />
          </button>
          <button
            className={`control-btn cursor-pointer p-[0px!important] ${
              right ? "opacity-[0.5]" : ""
            }`}
            onClick={() => handleSlider("next")}
            disabled={right}
          >
            <img src={arrowRightImg} alt="arrow-right" width={36} height={36} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CameraCarousel;
