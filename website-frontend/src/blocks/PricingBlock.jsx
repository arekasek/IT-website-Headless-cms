import React from "react";

const PricingBlock = ({ pricingItems }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-4/5 flex-wrap justify-center gap-x-6 gap-y-16 my-10 sm:gap-y-12">
        {pricingItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-cover bg-center blog-post-shadow relative"
          >
            <div className="absolute logo-blue-color text-white font-quicksand font-extrabold -top-8 p-4 ">
              <p className="text-3xl">{item.price}</p>
            </div>
            <div className="my-10">
              <h2 className="text-2xl font-bold mb-2 text-center">
                {item.text}
              </h2>
              <p className="text-base">{item.description}</p>
            </div>
            <div className="bottom-0 w-full">
              <button className="bg-slate-300 p-4 w-full btn-pricing uppercase">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingBlock;
