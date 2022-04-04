
import React from "react";
import girl4 from "./casual-life-3d-designer-at-work-mail-deadline-chat (1).png";
import { BsGithub, BsLinkedin, BsArrowRight } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa';
import { SiRedbubble } from 'react-icons/si';


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-1/2 bg-gradient-contact rounded-lg overflow-hidden sm:mr-10 p-12 flex  relative">
          <div className="w-1/2">
            <h1 className="sm:text-4xl text-5xl font-semibold mb-5 text-bleachWhite">Get in touch!</h1>
            <h6 className="text-bleachWhite font-semibold">Let me know of any cool ideas!</h6>
            <p className="text-bleachWhite font-medium leading-7 mt-10">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
          </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2  md:w-1/2 flex flex-col ml-10 w-full">
           <div className="flex flex-wrap">
          <div className=" mb-4 w-64 mr-4">
            <input
              type="text"
              id="nameForm"
              name="name"
              className="w-full rounded-2xl border border-white bg-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className=" w-64  ">
            <input
              type="email"
              id="emailForm"
              name="email"
              className="w-full  rounded-2xl border border-white bg-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="relative mb-4">
            <textarea
              id="messageForm"
              name="message"
              className="w-full bg-transparent rounded-2xl border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-bleachWhite bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">
            Say Hello!
          </button>
        </form>
          
        </div>
       
      </div>
      <div className="container px-5 pt-10 pb-8 mx-auto flex sm:flex-nowrap flex-wrap">
          <img src={girl4}  className="w-1/3 mx-auto pt-16"/>
      </div>
      <div class="grid grid-cols-1 pb-5">
      <p className="mx-auto text-secondary flex">Designed &#38; Built by Emily Koranda</p>
      <div className="mx-auto mt-3">
          <BsGithub className="inline-flex text-secondary text-2xl mr-5"></BsGithub>
          <BsLinkedin className="inline-flex text-secondary text-2xl mr-5"></BsLinkedin>
          <FaDribbble className="inline-flex text-secondary text-2xl mr-5"></FaDribbble>
          <SiRedbubble className="inline-flex text-secondary text-2xl"></SiRedbubble>
          </div>
      <div>
      
      </div>
          
      </div>

    </section>
  );
}