import React from "react";
import "../App.css";
import { FiChevronDown } from "react-icons/fi";
const Section = ({ img, mobileImg, product, id }) => {
  const css = `@media (max-width: 650px) {
    .backimage {
        background-image: url(${mobileImg})
    }
}
@media (min-width: 750px) {
    .backimage {
        background-image: url(${img});
    }
}`;
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }
      }
      className={`h-screen bg-center bg-cover relative -z-10 section`}
      id={id}
    >
      <div className="absolute inset-x-0 top-[15%] text-center content">
        <h1 className="text-4xl font-bold">{product}</h1>
        <p className="p-2 text-sm">
          Order Online for{" "}
          <span className="underline underline-offset-4">
            Touchless Delivery
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%] gap-2">
        <button className="bg-[#393c41] p-3 w-80 rounded-md lg:w-64 lg:mx-4 h-10 mt-2 text-white">
          Custom Order
        </button>
        <button className="bg-[#f4f4f4] p-3 w-80 rounded-md lg:w-64 lg:mx-4 h-10 mt-2">
          Existing Inventory
        </button>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Section;
