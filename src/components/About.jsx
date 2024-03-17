import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () =>  {
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
    console.log(isFlipped);
  }



  return (
    <Tilt 
      className='xs:w-[250px] w-full'
    >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
        <div className="card-back"
          style={{ display: isFlipped ? "block" : "none"}}
        >
            <p>
              <span className='text-tertiary font-bold'>{description}</span>
            </p>
        </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
  );
};

  


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       As a passionate Computer Engineering student from Jönköping University, specializing in Software Development and Mobile Platforms, 
       I bring a blend of academic rigor and practical experience to the tech industry. My work as a Fullstack Developer at Luday AB showcases 
       my skills in creating robust web applications using leading-edge technologies like Python, JavaScript, React.js, and cloud infrastructures. 
       Through my education, I've gained a deep understanding of optimizing code through algorithms and data structures, and the importance of thoughtful 
       software design and architecture. This foundation fuels my drive to innovate and solve complex problems in software development.
      </motion.p>

      <div
        className="mt-20 flex flex-col items-center"
      >
          <p className={styles.sectionSubText}>Services</p>
          <p className={styles.sectionHeadText}>What I Do.</p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
