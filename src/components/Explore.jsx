import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import { rightImg } from "../utils";
import { iphoneSlides } from "../constants";
import AccessPass from "./AccessPass";

const Explore = () => {
  useGSAP(() => {
    animateWIthGsap("#explore_heading", { y: 0, opacity: 1 });
    animateWIthGsap(".link-explore", { opacity: 1, y: 0, stagger: 0.25 });
  }, []);
  return (
    <section className="common-padding max-md:pb-0 md:bg-zinc">
      <div className="screen-max-width pb-[240px]">
        <div className="flex md:flex-row flex-col w-full md:items-end justify-between md:pb-10 pb-5 max-md:gap-4">
          <h1
            id="explore_heading"
            className="section-heading max-md:max-w-[280px]"
          >
            Keep exploring iPhone.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link link-explore">
              Explore all iPhone{" "}
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <div className="bg-black rounded-3xl md:py-20 pt-20 overflow-hidden">
          <div className="md:max-w-[800px] m-auto ">
            <div className="flex">
              {iphoneSlides.map((iphone) => (
                <div
                  className="flex flex-col flex-1 md:items-center"
                  key={iphone.id}
                >
                  <img
                    className="mb-8 w-max max-md:max-h-[185px]"
                    src={iphone.img}
                    alt={iphone.name}
                  />
                  <div className="flex gap-1 mb-8">
                    {iphone.colors.map((color, id) => (
                      <div
                        className={`w-3 h-3 rounded-full ${color}`}
                        key={id}
                      ></div>
                    ))}
                  </div>
                  <div className="md:text-2xl text-xl font-medium">
                    {iphone.name}
                  </div>
                  <div className="max-md:text-sm mt-6 max-md:pr-10">
                    {iphone.price}
                  </div>
                  <div className="my-10"></div>
                  <div className="flex flex-col w-full relative">
                    <div
                      className="w-full absolute top-0"
                      style={{ backgroundColor: "#424245", height: 1 }}
                    ></div>

                    <div
                      className="grid gap-6 p-10 max-md:pl-0 max-md:pb-0"
                      style={{
                        gridTemplateRows:
                          "minmax(131px, max-content) minmax(189px, max-content) minmax(111px, max-content)",
                      }}
                    >
                      {iphone.content.map((content, id) => (
                        <div
                          className="flex flex-col md:items-center flex-1 h-full"
                          key={id}
                        >
                          <img
                            className="max-md:max-w-[53px]"
                            src={content.img}
                            alt={content.name}
                          />
                          <div
                            className="md:text-2xl text-xl font-medium md:text-center mt-3"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {content.name}
                          </div>
                          <div
                            className="text-[10px] md:text-center mt-2"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {content.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AccessPass title="Compare all iPhone models" id="explore" />
      </div>
    </section>
  );
};

export default Explore;
