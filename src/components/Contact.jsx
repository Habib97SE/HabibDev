import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const PrivacyModal = ({ onClose, onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Privacy Policy</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              By submitting your name and email, you consent to allow me to store and use your information for the sole purpose of responding to your inquiry.
              Your data will be handled in accordance with our privacy practices, ensuring protection and confidentiality. I will not share your information with any third party, and you can request to delete your data at any time.

            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button id="acceptBtn" className="mx-2 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-20 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={onAccept}>Accept</button>
            <button id="declineBtn" className="mx-2 px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-20 shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={onDecline}>Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [honeypotField, setHonetpotField] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [privacyMessage, setPrivacyMessage] = useState("");


  const handleAccept = () => {
    setAcceptPrivacy(true);
    setShowModal(false);
    setPrivacyMessage("You have accepted our privacy policy.");
  }

  const handleDecline = () => {
    setAcceptPrivacy(false);
    setShowModal(false);
    setPrivacyMessage("You have declined our privacy policy. You cannot submit the form.");
  }

  const handleChangeHoneypot = (e) => {
    setHonetpotField(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  let publicKey = "";


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot field, if filled, it's a bot
    if (honeypotField) {
      return;
    }

    if (privacyMessage.length > 0) {
      setPrivacyMessage("");
    }

    // check if concent checkvox is checked 
    if (!acceptPrivacy) {
      setShowModal(true);
      return;
    }

    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      setError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    // use regex to validate email: 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setLoading(false);
      setError(true);
      setMessage("Please enter a valid email.");
      return;
    }

    setError(false);
    setMessage("");

    emailjs
      .send(
        "service_67fv1a6",
        "template_py6j4f4",
        {
          from_name: form.name,
          to_name: "Portfolio contact",
          from_email: form.email,
          to_email: "hezarehee.h@gmail.com",
          message: form.message,

        },
        "gd3Myiyj1X4v_3EeK"
      )
      .then(
        () => {
          setLoading(false);
          setError(false);
          setMessage("Your message has been sent successfully!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setError(true);
          setMessage("Something went wrong. Please try again later.");

        }
      );
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p
          style={{ lineHeight: "2.5", letterSpacing: "0.5px" }}
        >
          I'm always on the lookout for new opportunities and collaborations. Whether you have a project in mind or just want to say hello,
          don't hesitate to reach out. Fill out the form, so I'll get back to you as soon as possible!
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name here..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your message here...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex items-center gap-4'>
            <span className="text-white font-medium text-center" onClick={() => setShowModal(true)}>Read and accept our privacy policy.</span>
          </label>


          <input
            type="text"
            name="honeypot"
            value={honeypotField}
            onChange={handleChangeHoneypot}
            style={{ display: "none" }} // Honeypot field
          />

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:bg-black transition-all duration-300 ease-in-out'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>


        <div
          className='mt-8'
        >
          {message.length > 0 && (
            <div
              style={{
                padding: "1rem",
                borderRadius: "0.5rem"
              }}
              className={`text-white text-center ${error ? "bg-red-600" : "bg-green-500"}`}>
              {message}
            </div>
          )}
        </div>

        <div
          className='mt-8'
        >
          {privacyMessage.length > 0 && (
            <div
              style={{
                padding: "1rem",
                borderRadius: "0.5rem"
              }}
              className={`text-white text-center ${acceptPrivacy ? "bg-green-500" : "bg-red-600"}`}>
              {privacyMessage}
            </div>
          )}
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      {showModal && (
        <PrivacyModal
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
    </div>

  );
};

export default SectionWrapper(Contact, "contact");
