import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWIthGsap, animateWIthGsapFromTo } from "../utils/animations";
import { iguanaImg, phoneCameraImg, plusImg } from "../utils";
import CameraCarousel from "./CameraCarousel";
import AccessPass from "./AccessPass";

const CamaraZoom = () => {
  useGSAP(() => {
    animateWIthGsap(".g_ctop", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    animateWIthGsap(".g_cbottom", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    animateWIthGsapFromTo(
      "#iguana-img",
      {
        transform: "matrix(1.3, 0, 0, 1.3, 0, 200)",
      },
      {
        transform: "matrix(1, 0, 0, 1, 0, 0)",
      },
      { scrub: 1, end: "bottom 140%" }
    );

    animateWIthGsap(".g_ibottom", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.25,
    });

    animateWIthGsap(".g_imgbottom", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section
      className="h-full common-padding relative"
      style={{ padding: "0px" }}
    >
      <div className="relative pb-[240px]">
        <div className="screen-max-width max-md:max-w-[240px]">
          <div className="flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full mb-20 g_ctext g_ctop md:px-10">
              <h2 className="text-4xl md:text-7xl md:font-semibold font-medium">
                A camera that captures your wildest imagination.
              </h2>
              <p className="text-gray font-semibold text-xl md:text-2xl mt-8">
                From dramatic framing flexibility to next-generation portraits,
                see what you can do with our most powerful iPhone camera system.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex flex-col">
            <div id="iguana-img" className="flex items-center">
              <img
                className="max-md:left-0 max-md:max-w-[880px]"
                src={iguanaImg}
                alt="iguana"
                style={{ margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
        <div className="screen-max-width">
          <div className="flex flex-col">
            <p className="text-gray md:mt-[-150px] mt-[-100px] z-20 mb-10 max-md:max-w-[240px] max-md:m-auto md:p-5">
              A green iguana, captured by the 48MP Main camera
            </p>
          </div>
          <div className="mt-20 overflow-hidden">
            <div
              className="flex items-center mb-20 md:w-[692px]"
              style={{
                margin: "0 auto",
              }}
            >
              <div className="md:w-6/12 max-md:max-w-[240px] max-md:m-auto">
                <p className="hiw-text g_ctext g_cbottom">
                  With iPhone 15 Pro, you have multiple focal lengths to work
                  with. It’s like having{" "}
                  <span className="text-white">
                    seven pro lenses in your pocket
                  </span>
                  , everywhere you go.
                </p>
              </div>
            </div>
          </div>
          <CameraCarousel />
        </div>

        <div
          className="screen-max-width overflow-hidden max-md:mx-10"
          style={{
            borderBottom: "2px solid rgb(66 66 69/70%)",
          }}
        >
          <div className="flex md:flex-row flex-col md:gap-20 gap-10 md:w-[70%] max-md:max-w-[280px] md:py-[100px] py-[70px] m-auto">
            <div className="flex flex-1 justify-en md:my-10 my-5">
              <div
                style={{ width: 329 }}
                className="g_img g_imgbottom"
                //   id="phone-camera"
              >
                <img src={phoneCameraImg} alt="phone-camera" />
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col justify-center">
                <p className="hiw-text g_ctext g_ibottom">
                  The 48MP Main camera is more advanced than ever, capturing
                  super‑high‑resolution photos with a{" "}
                  <span className="text-white">
                    new level of detail and color
                  </span>
                  .
                </p>
                <p className="hiw-text g_ctext g_ibottom mt-3">
                  You’ll see the improvements in your portraits. And now you no
                  longer have to switch to Portrait mode. If your subject is a
                  person, dog, or cat, iPhone automatically captures depth
                  information. So you can choose to instantly{" "}
                  <span className="text-white">
                    ee your photo as a portrait
                  </span>
                  , with an artful blur effect. Or later in the Photos app.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[100px] max-md:max-w-[280px] max-md:mx-auto">
          <h2 className="text-3xl md:text-4xl md:font-semibold font-medium text-center">
            Shoot magical spatial videos,
            <br />
            then relive them on Apple Vision Pro
          </h2>
        </div>
        <AccessPass title="Zoom in on the cameras" id="camerazoom" />
      </div>
    </section>
  );
};

export default CamaraZoom;
