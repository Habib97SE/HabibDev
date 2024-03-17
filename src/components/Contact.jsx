import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

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

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
