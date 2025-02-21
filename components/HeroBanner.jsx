import React from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {

  const crew = async () => {
    try {
      const response = await fetch("http://localhost:8000/run-crew");
      const data = await response.json();
      console.log(data); // Handle response data
      return data; // Return for further use
    } catch (error) {
      console.error("Error:", error);
      return null; // Return null on error
    }
  };

  return (
    <div className="hero-banner-container">
      <div>
        <h1>AI AGENT STORE</h1>
        <img
          src="https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif"
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link
            href="/product"
          // href={`/product/${heroBanner.product}`}
          >
            <button type="button" onClick={crew()}>
              Explore AI Agents
            </button>
          </Link>
          <div className="desc">
            <h5>AI Meets Medicine</h5>
            <p>Smarter compounds. Faster cures. Powered by AI.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
