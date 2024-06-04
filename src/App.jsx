import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import CamaraZoom from "./components/CamaraZoom";
import Telephoto from "./components/Telephoto";
import ActionButton from "./components/ActionButton";
import Connectivity from "./components/Connectivity";
import BatteryLife from "./components/BatteryLife";
import Emergency from "./components/Emergency";
import StandsFor from "./components/StandsFor";
import IOS17 from "./components/IOS17";
import Significant from "./components/Significant";
import Shop from "./components/Shop";
import Explore from "./components/Explore";
import Further from "./components/Further";

import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <CamaraZoom />
      <Telephoto />
      <ActionButton />
      <Connectivity />
      <BatteryLife />
      <Emergency />
      <StandsFor />
      <IOS17 />
      <Significant />
      <Shop />
      <Explore />
      <Further />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
