import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { shopSlides } from "../constants";
import { plusImg, arrowLeftImg, arrowRightImg } from "../utils";
import { useGSAP } from "@gsap/react";

import PlusIcon from "../../public/assets/images/plus.svg?react";

const ShopCarousel = () => {
  const [width, setWidth] = useState(350);
  const [shopId, setShopId] = useState(1);
  const [arrows, setArrows] = useState({
    left: true,
    right: false,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(document.getElementById("slider-container"));
  });

  useGSAP(() => {
    const slider = document.getElementById("slider-shop");
    const slwidth = slider.clientWidth;

    console.log("shopId", (slwidth + 26) * (shopId - 1));

    let calc = (slwidth + 26) * (shopId - 1);
    let valid = false;

    if (slwidth < 760) {
      let middle = (width - slwidth) / 2;
      calc = slwidth - middle + 26 * shopId;
      valid = true;
    }

    console.log("calc 2", calc);

    console.log(slwidth, width);

    gsap.to("#slider-shop", {
      x: -calc,
      xPercent: valid && -100 * (shopId - 2),
      duration: 2,
      ease: "power2.inOut",
    });
  }, [shopId]);

  const { left, right } = arrows;

  const handleSlider = (name) => {
    switch (name) {
      case "prev":
        if (shopId > 1) {
          setShopId((prev) => prev - 1);
          if (shopId <= 2) {
            setArrows((prev) => ({ ...prev, left: true }));
          } else {
            setArrows((prev) => ({ ...prev, right: false }));
          }
        }
        break;

      case "next":
        if (shopId < shopSlides.length) {
          setShopId((prev) => prev + 1);

          setArrows((prev) => ({ ...prev, left: false }));

          if (shopId >= shopSlides.length - 1) {
            setArrows((prev) => ({ ...prev, right: true }));
          } else {
            setArrows((prev) => ({ ...prev, right: false }));
          }
        }
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div
        className="flex items-center mt-8 md:pb-16 pb-12"
        id="slider-container"
        style={{ gap: 26 }}
      >
        {shopSlides.map((item) => (
          <div key={item.id} id="slider-shop">
            <div
              className="flex flex-col rounded-3xl w-[350px] h-[340px] p-8"
              style={{ background: "#242426" }}
            >
              <div className="mb-4">
                <div style={{ height: 38 }}>
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
              <div
                className="md:text-2xl text-xl font-medium"
                style={{
                  whiteSpace: "pre-line",
                }}
              >
                {item.title}
              </div>
              <div className="mt-2 text-md">{item.description}</div>

              <div className="flex h-full justify-end">
                <div className="flex items-end">
                  <div className="rounded-3xl bg-white cursor-pointer flex text-4xl">
                    <PlusIcon width="35" height="35" className="fill-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
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
    </>
  );
};

export default ShopCarousel;
