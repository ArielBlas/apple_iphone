import { useGSAP } from "@gsap/react";
import { animateWIthGsap } from "../utils/animations";
import { rightImg } from "../utils";
import ShopCarousel from "./ShopCarousel";

const Shop = () => {
  useGSAP(() => {
    animateWIthGsap("#shop_heading", { y: 0, opacity: 1 });
    animateWIthGsap(".link-shop", { opacity: 1, y: 0, stagger: 0.25 });
  }, []);

  return (
    <section className="common-padding bg-zinc overflow-hidden max-md:pt-0">
      <div className="screen-max-width">
        <div className="flex md:flex-row flex-col w-full md:items-end justify-between md:pb-10 pb-5 max-md:gap-4">
          <h1 id="shop_heading" className="section-heading">
            Ways to shop and save at Apple.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link link-shop">
              Shop iPhone <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <ShopCarousel />
      </div>
    </section>
  );
};

export default Shop;
