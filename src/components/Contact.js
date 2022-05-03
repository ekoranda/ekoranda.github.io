
import React, {useEffect, useState} from "react";
import girl4 from "./img/casual-life-3d-designer-at-work-mail-deadline-chat (1).png";
import me from "./img/picure.png";
import { BsGithub, BsLinkedin, BsArrowRight } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa';
import { SiRedbubble } from 'react-icons/si';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function Contact() {
  
  const [mess, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onChange = (e) => {
    const curmessage = e.target.value;
    setMessage(curmessage);

  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    handleShow();
    e.preventDefault();
    fetch("https://pml1rktkic.execute-api.us-east-1.amazonaws.com/SendEmail", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        senderName: "ekoranda1@gmail.com", 
        senderEmail: "ekoranda1@gmail.com", 
        message: "Name: " + name + " Email: " + email + "\n" + mess,
        date: "Portfolio Message", 

      })
    })
  }

 
 

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-1/2 bg-gradient-contact rounded-lg overflow-hidden sm:mr-10 p-12 flex  relative">
          <div className="w-1/2">
            <h1 className="sm:text-4xl text-5xl font-semibold mb-5 text-bleachWhite">Get in touch!</h1>
            <h6 className="text-bleachWhite font-semibold">Let me know of any cool ideas!</h6>
            <p className="text-bleachWhite font-medium leading-7 mt-10">Let me know if you have any questions for me, or if you have any freelance opportunities you think i'd be a good fit for!</p>
          </div>
        <form
          name="contact"
          
          className="lg:w-1/2  md:w-1/2 flex flex-col ml-10 w-full">
          
           <Stack direction="horizontal" gap={3} className="mb-3">
          <div className=" w-64 ">
            <input
              type="text"
              id="nameForm"
              name="name"
              className="w-full rounded-2xl border border-white bg-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Name"
              onChange={onChangeName}
            />
          </div>
          <div className=" w-64  ">
            <input
              type="email"
              id="emailForm"
              name="email"
              className="w-full  rounded-2xl border border-white bg-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Email"
              onChange={onChangeEmail}
            />
          </div>
          </Stack>
          
          <div className="relative mb-4">
            <textarea
              id="messageForm"
              name="message"
              className="w-full bg-transparent rounded-2xl border border-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Your Message"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="text-bleachWhite bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg"
            onClick={handleSubmit}>
            Say Hello!
          </button>
        </form>

        <Modal show={show} onHide={handleClose} className="thanksModal">
        <Modal.Body>
          <h1 className="text-5xl pb-3">Thanks!</h1>
          <p>Thanks for sending me a chat! I'll get back to you soon!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          
        </div>
       
      </div>
      <div className="container px-5 pt-10 pb-8 mx-auto flex sm:flex-nowrap flex-wrap">
          <img src={me}  className="w-1/4 mx-auto pt-16"/>
      </div>
      <div class="grid grid-cols-1 pb-5">
      <p className="mx-auto text-secondary flex">Designed &#38; Built by Emily Koranda</p>
      <div className="mx-auto mt-3">
          <a href="https://github.com/ekoranda/" target="_blank"><BsGithub className="inline-flex text-secondary text-2xl mr-5"></BsGithub></a>
          <a href="https://www.linkedin.com/in/emily-koranda/"><BsLinkedin className="inline-flex text-secondary text-2xl mr-5"></BsLinkedin></a>
          <a href="https://dribbble.com/ekoranda1" target="_blank"><FaDribbble className="inline-flex text-secondary text-2xl mr-5"></FaDribbble></a>
          <a href="https://www.redbubble.com/people/Ekoranda1/shop?asc=u" target="_blank"><SiRedbubble className="inline-flex text-secondary text-2xl"></SiRedbubble></a>
      </div>
      <div>
      
      </div>
          
      </div>

    </section>
  );
}