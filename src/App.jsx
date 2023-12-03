import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Male from "./components/Products/male";
import Female from "./components/Products/Female";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    // Check if the animation has already played
    const hasPlayed = localStorage.getItem("hasAnimationPlayed");

    if (!hasPlayed) {
      // If it hasn't played, trigger the animations
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });

      // Mark that the animation has played in local storage
      localStorage.setItem("hasAnimationPlayed", "true");
      setHasAnimationPlayed(true);
    } else {
      // If the animation has already played, refresh AOS
      AOS.refresh();
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner handleOrderPopup={handleOrderPopup} />
        <Male />
        <Female />
        <Subscribe />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </BrowserRouter>
  );
};

export default App;
