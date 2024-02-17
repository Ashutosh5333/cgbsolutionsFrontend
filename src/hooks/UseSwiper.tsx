'use client';
import { useState } from "react";


const UseSwiper = (Team: string | any[]) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Team.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Team.length - 1 ? 0 : prevIndex + 1
    );
  };

  return { activeIndex, handlePrev, handleNext };
};

export default UseSwiper;
