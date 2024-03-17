import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { socialLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const socialMediaCard = (social) => (
  <motion.div
    variants={fadeIn("", "spring", social.id * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <div className='flex items-center gap-2'>
        <img
          src={social.icon}
          alt={`feedback_by-${social.name}`}
          className='w-10 h-10 rounded-full object-cover'
          width={40}
          height={40}
        />
        <p className='text-white tracking-wider text-[18px]'>{social.title}</p>
      </div>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {social.username}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {social.description}
          </p>
          <a className='mt-3 mx-auto bg-tertiary text-white px-4 py-2 rounded-2xl text-[14px] font-bold hover:bg-black active:scale-110' target="_blank" href={social.link}>
            View my profile
          </a>
        </div>


      </div>
    </div>
  </motion.div>
);

const SocialMedia = () => {
  const socialMediaCards = socialLinks.map(socialMediaCard);
  return (
    <div id="social-media" className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Social media:</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {socialMediaCards}
      </div>
    </div>
  );

};

export default SectionWrapper(SocialMedia, "Social Media")