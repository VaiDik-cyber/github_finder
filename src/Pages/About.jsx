import React from "react";

const About = () => {
  return (
    <>
      <h1 className="mb-4 text-6xl text-black">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-white">
        A React app to search GitHub profiles and see profile details. This
        project is made by
        <strong>
          <a href="https://github.com/VaiDik-cyber" className="text-black">
            {" "}
            VaiDik-cyber
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-white">
        Version <span className="text-slate-950"> 1.0.0</span>
      </p>
      <p className="text-lg text-white">
        Layout By:{" "}
        <a
          className="text-slate-950"
          href="https://www.linkedin.com/in/vaidik-patel-3bba811a0/"
        >
          Vaidik Patel
        </a>
      </p>
    </>
  );
};

export default About;
