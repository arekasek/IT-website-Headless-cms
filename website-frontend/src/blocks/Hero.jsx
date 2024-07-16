import React from "react";

const Hero = ({ heading, text, backgroundImage }) => {
  return (
    <div className="text-5xl text-center w-full ">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Hero;
