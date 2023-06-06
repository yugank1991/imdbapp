import React, { useContext, useEffect, useState } from "react";
import { ImdbContext } from "../../context/ImdbContext";

const SliderSkeleton = () => (
  <div
    role="status"
    className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
  >
    <div className="my-10 flex items-center justify-center w-full h-80 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
      <svg
        className="w-12 h-12 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div>
    <div className="w-full">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

const Overlay = () => {
  const ContextData = useContext(ImdbContext);
  const [sliderData, setSliderData] = useState({});

  useEffect(() => {
    setSliderData(ContextData.data[2]);
  }, [ContextData.data]);

  return !ContextData.loading ? (
    <figure className="relative">
      <a href="#">
        <img
          className="brightness-50 rounded-lg h-96 w-full object-cover"
          src={sliderData["i"]?.imageUrl}
          alt={sliderData["l"]}
        />
      </a>
      <figcaption className="absolute top-10 right-0 md:right-24 md:top-20 w-full md:w-96">
        <h5 className="text-2xl font-bold my-3">{sliderData["l"]}</h5>
        <p className="text-md">TV-MA Action, Advanture, Drama 9.1/10</p>
        <p className="text-xs md:text-sm text-gray-300 my-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>                               
        <button
          type="button"
          className="bg-[#00C2EE] rounded-full text-sm px-5 py-2.5 text-center mr-2 my-3 dark:bg-[#00C2EE]"
        >
          Learn More
        </button>
      </figcaption>
    </figure>
  ) : (
    <SliderSkeleton />
  );
};

export default Overlay;
