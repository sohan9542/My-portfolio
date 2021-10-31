import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { Badge } from "react-bootstrap";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import bots1 from "../../image/bots1.png";
import ecom from "../../image/ecom.png";
import hunt from "../../image/hunt.png";
import lms from "../../image/lms.png";
import rpi from "../../image/rpi.png";
import shopping from "../../image/shop.png";
import "./portfolio.css";
const data = [
  {
    title: "Learning Management System",
    live: "https://lmsmanagement99.netlify.app/",
    tech: [
      "react js",
      "material ui",
      "tailwind css",
      "react bootstrap",
      "react slider",
      "javascript",
    ],
    github: "https://github.com/sohan9542/Learning-Management-System",
    img: lms,
  },
  {
    title: "Shopping Website",
    live: "https://molla6.netlify.app/",
    tech: [
      "react js",
      "tailwind css",
      "javascript",
      "aos animation",
      "tailwind UI",
    ],
    github: "https://github.com/sohan9542/Complete-Shopping-site",
    img: shopping,
  },
  {
    title: "Collage Management",
    live: "https://rpi1.netlify.app/",
    tech: [
      "react js",
      "tailwind css",
      "javascript",
      "tailwind UI",
      "javascript",
    ],
    github: "https://github.com/sohan9542/College-Management",
    img: rpi,
  },
  {
    title: "Riconshop",
    live: "https://riconshop.netlify.app/",
    tech: ["react js", "css", "javascript", "firebase"],
    github: "https://github.com/sohan9542/riconshop-shopping-website",
    img: ecom,
  },
  {
    title: "SPA Watch Market ",
    live: "https://sohan9542.github.io/BestWatch-Website/",
    tech: ["html", "css", "bootstrap", "javascript"],
    github: "https://github.com/sohan9542/BestWatch-Website",
    img: bots1,
  },
  {
    title: "Hunter",
    live: "https://sohan9542.github.io/bighunter/",
    tech: ["html", "css"],
    github: "https://github.com/sohan9542/bighunter",
    img: hunt,
  },
];
const Portfolio = () => {
  return (
    <div className="px-5 pb-10 ">
      <div className="h-full lg:h-screen w-full">
        <div className="p-10 flex items-center justify-center flex-col">
          <h1 className="text-9xl uppercase text-center font-extrabold text-white opacity-10">
            Works
          </h1>
          <h1 className="absolute uppercase text-white font-extrabold text-5xl">
            My<span className="text-sc"> Portfolio</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full fron-t front h-full relative rounded-xl overflow-hidden"
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="bg-sc bg-opacity-90 back w-full h-full top-0 left-0 z-10 items-center flex-col flex justify-center">
                <h1 className="text-gray-900 text-2xl">{item.title}</h1>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <Tooltip title="Github" arrow>
                    <a href={item.github} className="text-2xl text-gray-900">
                      {" "}
                      <BsGithub />
                    </a>
                  </Tooltip>
                  <Tooltip title="Live Link" arrow>
                    <a href={item.live} className="text-gray-900 text-2xl">
                      {" "}
                      <AiOutlineLink />
                    </a>
                  </Tooltip>
                </div>
                <div className="mt-4 flex items-center justify-center gap-1 flex-wrap">
                  {item.tech.map((item, index) => (
                    <Badge key={index} pill bg="dark">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
