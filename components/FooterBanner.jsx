import React from "react";
import Link from "next/link";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
      <div className="left">
        <p>Accelerate Drug Discovery</p>
        <h3>AI-Powered Predictions for</h3>
        <h3>Next-Gen Treatments.</h3>
        <p>Smarter Research, Faster Cures</p>
      </div>

        {/* <div className="right">
          <p>AI AGENT</p>
          <h3>AI AGENT</h3>
          <p>AI AGENT</p>
         
        </div> */}

        <img src="/assets/images/agent2.png" className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
