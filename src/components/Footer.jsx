import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer
      className="py-5 sm:px-10 px-5 "
      style={{ backgroundColor: "rgb(29, 29, 31)" }}
    >
      <div className="screen-max-width">
        <div>
          <p className="text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store</span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you. Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <div className="flex md:flex-row flex-col">
            <p className=" text-gray text-xs mr-6">
              Copyright @ 2024 Apple Inc. All rights reserved.
            </p>
            <div className="flex max-md:flex-wrap max-md:py-2">
              {footerLinks.map((link, i) => (
                <p key={link} className="font-light text-white text-xs">
                  {link}{" "}
                  {i !== footerLinks.length - 1 && (
                    <span className="mx-2 text-gray"> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>
          <p className="font-light text-white text-xs">United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
