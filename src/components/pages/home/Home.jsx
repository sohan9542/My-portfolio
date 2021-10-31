import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "../../image/profile1.png";
const Home = (props) => {
  const { setShow } = props;
  return (
    <div className="flex items-center justify-center">
      {/* for desktop version */}
      <div className="hidden h-screen lg:w-screen overflow-hidden  lg:grid lg:grid-cols-12 items-center">
        <div className="overflow-hidden col-span-4 relative">
          <div className="bg-sc h-screen w-3/5"></div>
          <div
            className=" bg-white z-20 top-0 left-0 absolute w-96 overflow-hidden m-6 mt-12 p-4"
            style={{ height: "90%", borderRadius:'24px' }}
          >
            <img
              src={profile}
              className="transform scale-125"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
               
              }}
              alt=""
            />
          </div>
        </div>
        <div
          style={{ marginTop: "20%" }}
          className="flex items-center  justify-center lg:col-span-7 mr-8"
        >
          <div className="w-10 h-1 bg-sc mr-6 text-white"></div>
          <div>
            <h1 className="text-sc text-5xl font-semibold">
              I'M SOHANUR RAHMAN
            </h1>
            <h1 className="text-4xl font-semibold mt-3 text-white">
              {" "}
              FRONTEND DEVELOPER
            </h1>
            <p className="text-white mt-3">
              I'm a MERN based web designer & developer focused on crafting
              clean <br />& user‑friendly experiences, I am passionate about
              building excellent software that <br /> improves the lives of
              those around me.
            </p>
            <button
              onClick={() => setShow(true)}
              className="border-sc border-2 hover:bg-sc transition ease-linear duration-300 cursor-pointer  flex items-center mt-4 gap-2 rounded-full text-white"
            >
              <div className="p-2 px-3">MORE ABOUT ME </div>
              <div className="h-full w-14 bg-sc rounded-full text-white p-3">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="flex lg:hidden flex-col items-center justify-center w-screen h-screen">
        <div className=" h-60 w-60 rounded-full p-2 bg-sc overflow-hidden mb-5">
          <img
            className="w-full h-full transform scale-125"
            style={{ objectFit: "cover" }}
            src={profile}
            alt=""
          />
        </div>
        <h1 className="text-sc text-3xl font-semibold">I'M SOHANUR RAHMAN</h1>
        <h1 className="text-3xl font-semibold text-white"> FRONTEND DEVELOPER</h1>
        <p className="text-white text-center px-4 text-sm mt-3">
          I'm a FRONTEND based web designer & developer focused on crafting clean &
          user‑friendly experiences, I am passionate about building excellent
          software that improves the lives of those around me.
        </p>
        <button
              onClick={() => setShow(true)}
              className="border-2 border-sc hover:bg-sc transition ease-linear duration-300 cursor-pointer  flex items-center mt-4 gap-2 rounded-full text-white"
            >
              <div className="p-2 px-3">MORE ABOUT ME </div>
              <div className="h-full w-14 bg-sc rounded-full text-white p-3">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
      </div>
    </div>
  );
};

export default Home;
