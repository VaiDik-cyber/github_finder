import React from "react";
import SpinnerGIF from "./assets/loading2.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-200">
      <img
        width={100}
        className="mx-auto text-center"
        src={SpinnerGIF}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
