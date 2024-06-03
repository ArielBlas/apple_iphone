import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import { furtherSlides } from "../constants";

const Further = () => {
  useGSAP(() => {
    animateWIthGsap("#further_heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding max-md:py-10 overflow-hidden">
      <div className="screen-max-width">
        <div className="flex w-full items-end justify-between pb-10">
          <h1 id="further_heading" className="section-heading">
            iPhone
          </h1>
        </div>
        <div className="flex  max-md:flex-wrap ">
          {furtherSlides.map((slide) => (
            <div
              className={
                slide.id == 1
                  ? "pr-20 max-md:w-full max-md:pb-8"
                  : "pr-14 max-md:flex-1"
              }
              key={slide.id}
            >
              <div className="text-[12px] text-gray mb-4">{slide.name}</div>

              {slide.links.map((link, id) => (
                <div
                  className={
                    slide.id == 1
                      ? "md:text-2xl text-xl font-medium mb-2"
                      : "text-sm mb-2"
                  }
                  key={id}
                >
                  {link}
                </div>
              ))}

              {slide.second?.length > 0 && (
                <div className="mt-6">
                  {slide.second?.map((link, id) => (
                    <div className={"text-sm mb-2"} key={id}>
                      {link}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Further;
