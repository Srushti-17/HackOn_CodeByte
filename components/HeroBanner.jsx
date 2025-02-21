import React from "react";
import {useState} from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {

  const crew = async () => {
    try {
      const response = await fetch("http://localhost:8000/run-crew");
      const data = await response.json();
      console.log(data);
      router.push("/run-crew"); // Redirect to API route
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="hero-banner-container">
      <div>
        <h1>MedsAI – Drug Discovery</h1>
        <img
          src="https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif"
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          
          <Link href={"/run-crew"}>
            <button type="button" onClick={crew}>
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
