"use client";
import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import UseIndexHandler from "@/hooks/UseSwiper";
import { Team } from "../../../context/index";

interface CustomSwiperProps {
  data: { id: number; Image: string; Title: string; description: string }[];
}

const CustomSwiper: React.FC<CustomSwiperProps> = () => {
  const { activeIndex, handlePrev, handleNext } = UseIndexHandler(Team);

  return (
    <div className="py-2 container   w-100 sm:w-90 lg:w-80 px-4 m-auto">
      {Team.map((el, index) => (
        <div
          className={`d-flex flex-sm-col flex-md-col flex-lg-row border-warning py-2 pb-4   ${
            index === activeIndex ? "d-block" : "d-none"
          }`}
          key={el.id}
        >
          <div className="left w-100 sm:w-70 lg:w-60 m-auto py-2  bg-cover ">
            <div className="aspect-ratio aspect-ratio-4x3 mx-4">
              <img
                src={el.Image}
                className="img-fluid rounded-circle w-80 h-80"
                alt={`image_${el.id}`}
              />
            </div>
          </div>

          <div className="right w-100 sm:w-40  d-flex flex-column justify-content-end">
            <div></div>
            <div>
              <div className="px-4 sm:px-4 flex-grow">
                <h2 className="text-4xl font-normal">{el.Title}</h2>
                <p className="text-sm py-2">{el.description}</p>
              </div>

              <div className="px-8 py-4  border-warning d-flex justify-content-between">
                <button className="btn  w-10 h-10" onClick={handlePrev}>
                  <MoveLeft className="w-100 h-100" />
                </button>

                <button className="btn " onClick={handleNext}>
                  <MoveRight className="w-100 h-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomSwiper;
