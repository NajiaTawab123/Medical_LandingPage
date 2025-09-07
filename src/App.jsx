import React from "react";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import Choose from "./Components/Choose";
import Aboutus from "./Components/Aboutus";
import Future from "./Components/Future";
import Newsletter from "./Components/Newsletter";
import Foter from "./Components/Foter";

function App() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Cards Section */}
      <div className="mt-40 mb-16 flex items-center justify-center">
        <Cards />
      </div>

      {/* Choose Section */}
      <Choose />

      {/* About Us Section */}
      <Aboutus />

      {/* Future Section */}
      <Future />

      {/* Newsletter Subscription Section */}
      <Newsletter />

      {/* Footer */}
      <Foter />
    </>
  );
}

export default App;
