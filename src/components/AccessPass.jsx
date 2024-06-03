import { useGSAP } from "@gsap/react";
import { plusImg } from "../utils";
import { animateWIthGsap, animateWIthGsapFromTo } from "../utils/animations";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const AccessPass = (props) => {
  const [active, setActive] = useState(false);
  const { title, id } = props;

  useGSAP(() => {
    let name = "#access-pass-" + id;

    animateWIthGsapFromTo(
      name,
      {
        className: "access-pass inactive",
      },
      {
        className: "access-pass active",
        onComplete: () => setActive(true),
        onReverseComplete: () => setActive(false),
      },
      {
        start: "top center",
        endTrigger: "#end-" + id,
        end: () => "top center+=" + 60,
      }
    );
  }, []);

  useGSAP(() => {
    let name = "#access-pass-" + id;

    if (active) {
      let ac = gsap.timeline({
        repeat: 0,
      });
      ac.set(name + ".active .access-pass__background", {
        opacity: 0,
        width: "0px",
        height: "0px",
      });
      ac.set(name + ".active .app-base__text", {
        opacity: 0,
      });
      ac.to(name + ".active", {
        "--aap-hint-scale": "1.5",
        duration: 0.4,
      });
      ac.to(name + ".active .access-pass__background", {
        opacity: 1,
        width: "60px",
        height: "60px",
        duration: 0.4,
      });
      ac.to(name + ".active", {
        "--aap-hint-scale": "0",
      });
      ac.to(name + ".active .app-base__icon", {
        transform: "scale(1)",
        duration: 0.1,
      });
      ac.to(name + ".active .access-pass__background", {
        width: "auto",
        duration: 0.2,
        opacity: 1,
      });
      ac.to(name + ".active .app-base__text", {
        opacity: 1,
      });
    } else {
      let ic = gsap.timeline({
        repeat: 0,
      });
      ic.to(name + ".inactive", {
        "--aap-hint-scale": "0",
      });
      ic.to(name + ".inactive .app-base__text", {
        opacity: 0,
      });
      ic.to(name + ".inactive .app-base__icon", {
        transform: "scale(0)",
        duration: 0.1,
      });
      ic.to(name + ".inactive .access-pass__background", {
        width: "60px",
        height: "60px",
        duration: 0.1,
      });
      ic.to(name + ".inactive .access-pass__background", {
        opacity: 0,
        width: "0px",
        height: "0px",
      });
    }
  }, [active]);

  return (
    <>
      <div className="access-pass__container">
        <div className="access-pass" id={"access-pass-" + id}>
          <div className="access-pass__background">
            <div className="access-pass__link">
              <div className="flex h-full justify-center items-center mx-3">
                <div className="app-base__text text-semibold md:text-lg text-sm px-3">
                  {title}
                </div>
                <div className="app-base__icon btn-sm flex text-4xl">
                  <img
                    src={plusImg}
                    alt="plus"
                    style={{ width: 35, height: 35 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={"end-" + id}></div>
    </>
  );
};

export default AccessPass;
