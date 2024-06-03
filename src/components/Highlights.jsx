import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchIconImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWIthGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWIthGsap("#title", { y: 0, opacity: 1 });
    animateWIthGsap(".link", { opacity: 1, y: 0, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc max-md:px-0"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between max-md:px-6">
          <h1 id="title" className="section-heading max-md:mb-5">
            Get the highlights.
          </h1>

          <div className="flex md:flex-row flex-col md:flex-wrap md:items-end md:gap-5 gap-2">
            <p className="link">
              Watch the film{" "}
              <img src={watchIconImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
