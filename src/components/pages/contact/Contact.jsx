import {
    faEnvelopeOpen,
    faPhone,
    faRocket,
    faSearchLocation
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="h-full lg:h-screen w-full px-5 pb-28 lg:pb-0">
      <div className="p-10 flex items-center justify-center flex-col">
        <h1 className="text-9xl uppercase text-center font-extrabold text-white opacity-10">
          Contact
        </h1>
        <h1 className="absolute uppercase text-white font-extrabold text-5xl">
          get in <span className="text-sc"> Touch</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div>
          <h1 className="text-white text-2xl font-medium">DON'T BE SHY !</h1>
          <p className="text-white text-sm mt-3">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="mt-3 flex gap-3 items-center">
            <FontAwesomeIcon
              className="text-3xl text-sc"
              icon={faSearchLocation}
            />
            <div className="text-white">
              <h2 className="text-yellow-50 text-lg">ADDRESS POINT</h2>
              <p className="text-sm">Puthia, Rajshahi, Bangladesh</p>
            </div>
          </div>
          <div className="mt-3 flex gap-3 items-center">
            <FontAwesomeIcon
              className="text-3xl text-sc"
              icon={faEnvelopeOpen}
            />
            <div className="text-white">
              <h2 className="text-yellow-50 text-lg">Email</h2>
              <p className="text-sm">sohanurrahmants@gmail.com</p>
            </div>
          </div>
          <div className="mt-3 flex gap-3 items-center">
            <FontAwesomeIcon className="text-3xl text-sc" icon={faPhone} />
            <div className="text-white">
              <h2 className="text-yellow-50 text-lg">Phone No.</h2>
              <p className="text-sm">+8801795421691</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center w-full items-center gap-2">
            <a
              href="https://www.facebook.com/RealSohan95"
              className="bg-tr text-white text-lg hover:bg-sc p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-sohan/"
              className="bg-tr text-white text-lg hover:bg-sc p-3 rounded-full"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className=" placeholder-white rounded-full text-white bg-tr px-3 py-2 border border-sc"
              />
              <input
                type="email"
                required
                className="bg-tr px-3 py-2  border rounded-full text-white placeholder-white border-white"
                placeholder="Your Email"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                required
                className="bg-tr px-3 py-2 w-full  border rounded-full text-white placeholder-white border-white"
                placeholder="Your Subject"
              />
            </div>
            <div className="mt-4">
              <textarea
                cols="30"
                rows="10"
                required
                className="bg-tr px-3 py-2  border w-full rounded text-white placeholder-white border-white"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="border-sc border-2 hover:bg-sc transition ease-linear duration-300 cursor-pointer  flex items-center mt-4 gap-2 rounded-full text-white">
                <div className="p-2 px-3">Send Message</div>
                <div className="h-full w-14 bg-sc rounded-full text-white text-xl p-3">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
