"use client"


import React, { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>  
      <button  onClick={scrollTop} id="scrollUp" 
        style={{position: "fixed", zIndex: "2147483647", border: "none",  display: `${sticky ?  "block" : "none"}`}}>
          <i className="fal fa-long-arrow-up"></i>
       </button>
    </>
  );
};

export default ScrollToTop;
