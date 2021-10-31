import { faDownload, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';
const data = [
    {
      skill: "HTML",
      exp: 90,
    },
    {
      skill: "CSS",
      exp: 80,
    },
    {
      skill: "Javascript",
      exp: 85,
    },
    {
      skill: "Bootstrap",
      exp: 95,
    },
    {
      skill: "Material UI",
      exp: 95,
    },
    {
      skill: "Tailwind CSS",
      exp: 98,
    },
    {
      skill: "React Js",
      exp: 90,
    },
    {
      skill: "Node Js",
      exp: 50,
    },
    {
      skill: "Express Js",
      exp: 50,
    },
    {
      skill: "Mongo DB",
      exp: 60,
    },
  ];
const About = () => {
    return (
        <div className="px-5">
              <div className="p-10 w-100 h-100 flex items-center justify-center flex-col">
              <h1 className="text-8xl text-center font-extrabold text-white opacity-10">
                RESUME
              </h1>
              <h1 className="absolute text-white font-extrabold text-5xl">
                ABOUT<span className="text-sc"> ME</span>
              </h1>
            </div>
            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4 text-white">
              <div>
                <h1 className="text-2xl font-medium  text-white">
                  PERSONAL INFOS
                </h1>
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <p className="font-light my-2">
                      First Name: <strong className="text-sc">Sohanur</strong>
                    </p>
                    <p className="font-light my-2">
                      Age: <strong className="text-sc">19</strong>
                    </p>
                    <p className="font-light my-2">
                      Freelance: <strong className="text-sc">Available</strong>
                    </p>
                    <p className="font-light my-2">
                      Phone: <strong className="text-sc">+8801795421691</strong>
                    </p>
                    <p className="font-light my-2">
                      Github: <strong className="text-sc">sohan9542</strong>
                    </p>
                  </div>
                  <div>
                    <p className="font-light my-2">
                      Last Name: <strong className="text-sc">Rahman</strong>
                    </p>
                    <p className="font-light my-2">
                      Nationality:{" "}
                      <strong className="text-sc">Bangladeshi</strong>
                    </p>
                    <p className="font-light my-2">
                      Address:{" "}
                      <strong className="text-sc">Rajshahi, Bangladesh</strong>
                    </p>
                    <p className="font-light my-2">
                      Email:{" "}
                      <strong className="text-sc">
                        sohanurrahmants@gmail.com
                      </strong>
                    </p>
                    <p className="font-light my-2">
                      Langages:{" "}
                      <strong className="text-sc">English, Hindi, Urdu</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="border border-white border-opacity-10 p-3">
                  <h1 className="font-extrabold text-sc text-5xl">2+</h1>
                  <div className="flex items-center">
                    <div
                      className="w-9 mr-3 bg-white"
                      style={{ height: "1px" }}
                    ></div>
                    <h6 className="uppercase text-white font-normal">
                      Years Of Experience
                    </h6>
                  </div>
                </div>
                <div className="border border-white border-opacity-10 p-3">
                  <h1 className="font-extrabold text-sc text-5xl">20+</h1>
                  <div className="flex items-center">
                    <div
                      className="w-9 mr-3 bg-white"
                      style={{ height: "1px" }}
                    ></div>
                    <h6 className="uppercase text-white font-normal">
                      Completed Projects
                    </h6>
                  </div>
                </div>
                <div className="border border-white border-opacity-10 p-3">
                  <h1 className="font-extrabold text-sc text-5xl">24/7</h1>
                  <div className="flex items-center">
                    <div
                      className="w-9 mr-3 bg-white"
                      style={{ height: "1px" }}
                    ></div>
                    <h6 className="uppercase text-white font-normal">
                      Services
                    </h6>
                  </div>
                </div>
                <div className="border border-white border-opacity-5 p-3">
                  <h1 className="font-extrabold text-sc text-5xl">100%</h1>
                  <div className="flex items-center">
                    <div
                      className="w-9 mr-3 bg-white"
                      style={{ height: "1px" }}
                    ></div>
                    <h6 className="uppercase text-white font-normal">
                      Satisfaction
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="border-2 border-sc hover:bg-sc transition ease-linear duration-300 cursor-pointer  flex items-center mt-4 gap-2 rounded-full text-white">
                <div className="p-2 px-3">DOWNLOAD CV</div>
                <div className="h-full w-14 bg-sc rounded-full text-white p-3">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </button>
            </div>
            <div className="mt-12">
              <h1 className="text-white font-medium text-center text-3xl mb-7">
                MY SKILLS
              </h1>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    <CircularProgress
                      variant="determinate"
                      color="warning"
                      size={90}
                      value={item.exp}
                    />
                    <h3
                      className="text-white absolute"
                      style={{ top: "35%", left: "45%" }}
                    >
                      {item.exp}%
                    </h3>
                    <h1 className="text-white text-center mt-2">
                      {item.skill}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center flex-col">
              <h1 className="text-white font-medium text-center text-3xl mb-7">
                EXPERIENCE & EDUCATION
              </h1>
              <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="mb-3 pl-7 border-l border-white w-100 h-100 relative">
                  <div
                    className="text-white p-2 text-center rounded-full absolute bg-sc w-10"
                    style={{ top: "-20px", left: "-20px" }}
                  >
                    <FontAwesomeIcon icon={faSuitcase} />
                  </div>
                  <div className="bg-tr px-2 py-1 text-white text-xs mb-2 w-32 rounded-full text-center">
                    2019- PRESENT
                  </div>
                  <h1 className="text-xl text-white">
                    Frontend Developer -{" "}
                    <span className="text-sc">Fazgroup</span>
                  </h1>
                  <p className="text-xs font-thin mt-2 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi aliquam deleniti accusamus eaque. Laboriosam quod,
                    libero laudantium animi ullam aspernatur.
                  </p>
                </div>
                <div className="mb-3 pl-7 border-l border-white w-100 h-100 relative">
                  <div
                    className="text-white  p-2 text-center rounded-full absolute bg-sc w-10"
                    style={{ top: "-20px", left: "-20px" }}
                  >
                    <FontAwesomeIcon icon={faSuitcase} />
                  </div>
                  <div className="bg-tr px-2 py-1 text-white text-xs mb-2 w-32 rounded-full text-center">
                    2018- PRESENT
                  </div>
                  <h1 className="text-xl text-white">
                    Diploma In Engineering -
                    <span className="text-sc"> RPI</span>
                  </h1>
                  <p className="text-xs font-thin mt-2 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi aliquam deleniti accusamus eaque. Laboriosam quod,
                    libero laudantium animi ullam aspernatur.
                  </p>
                </div>
                <div className="mb-3 pl-7 border-l border-white w-100 h-100 relative">
                  <div
                    className="text-white p-2 text-center rounded-full absolute  bg-sc w-10"
                    style={{ top: "-20px", left: "-20px" }}
                  >
                    <FontAwesomeIcon icon={faSuitcase} />
                  </div>
                  <div className="bg-tr px-2 py-1 text-white text-xs mb-2 w-32 rounded-full text-center">
                    2018 - 2019
                  </div>
                  <h1 className="text-xl text-white">
                    Graphics Designer -<span className="text-sc"> IT</span>
                  </h1>
                  <p className="text-xs font-thin mt-2 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi aliquam deleniti accusamus eaque. Laboriosam quod,
                    libero laudantium animi ullam aspernatur.
                  </p>
                </div>
                <div className="mb-3 pl-7 border-l border-white w-100 h-100 relative">
                  <div
                    className="text-white p-2 text-center rounded-full absolute  bg-sc w-10"
                    style={{ top: "-20px", left: "-20px" }}
                  >
                    <FontAwesomeIcon icon={faSuitcase} />
                  </div>
                  <div className="bg-tr px-2 py-1 text-white text-xs mb-2 w-32 rounded-full text-center">
                    2017 - 2019
                  </div>
                  <h1 className="text-xl text-white">
                    Secondary School Cirtificate - <span className="text-sc"> Puthia PN High School</span>
                  </h1>
                  <p className="text-xs font-thin mt-2 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi aliquam deleniti accusamus eaque. Laboriosam quod,
                    libero laudantium animi ullam aspernatur.
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About
