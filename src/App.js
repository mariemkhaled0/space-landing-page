import "./App.css";
import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <div className="h-[700px] w-full relative">
        <video
          className="absolute top-0 right-0 z-[-10] h-[700px] w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar className="z-50" />
        <Hero />
        <Services />
        <Banner />
        <Banner2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
