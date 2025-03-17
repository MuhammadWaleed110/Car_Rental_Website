import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import StartYourJourney from "./Components/StartYourJourney";
import AboutSection from "./Components/AboutSection";
import Services from "./Components/Services";
import CarListing from "./Components/CarListing";
import ClientFeedback from "./Components/ClientFeedback";
import PlayStoreBanner from "./Components/PlayStoreBanner";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

const App = () => {
  // Get the theme from localStorage or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  // Apply the theme class to the document element (html)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: "100",
    });
    AOS.refresh();
  }, []); // This ensures AOS is initialized only once

  return (
    <StrictMode>
      <Navbar setTheme={setTheme} theme={theme} />
      <StartYourJourney theme={theme} />
      <AboutSection />
      <Services />
      <CarListing />
      <ClientFeedback />
      <PlayStoreBanner />
      <ContactUs />
      <Footer />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
