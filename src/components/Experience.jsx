import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, AnimatePresence } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onCertificateClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.certificate_image && (
        <div className='mt-6 pt-4 border-t border-secondary/20 flex flex-wrap items-center justify-between gap-3'>
          {experience.certificate_grade && (
            <span className='text-[12px] text-secondary font-medium'>
              🏅 {experience.certificate_grade}
            </span>
          )}
          <button
            onClick={() =>
              onCertificateClick(
                experience.certificate_image,
                `${experience.title} - ${experience.company_name}`
              )
            }
            className='bg-[#915EFF] hover:bg-[#7a4cdb] text-white text-[13px] font-semibold py-1.5 px-3.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-md ml-auto'
          >
            📜 View Certificate
          </button>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onCertificateClick={(img, title) => setSelectedCert({ img, title })}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Full-screen Certificate Preview Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className='fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer'
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='relative max-w-4xl max-h-[90vh] bg-tertiary rounded-2xl p-4 shadow-2xl flex flex-col items-center'
            >
              <div className='w-full flex justify-between items-center mb-3 pb-2 border-b border-secondary/20'>
                <h4 className='text-white font-semibold text-[16px] truncate pr-4'>
                  {selectedCert.title}
                </h4>
                <button
                  onClick={() => setSelectedCert(null)}
                  className='text-secondary hover:text-white text-xl font-bold px-2 py-1'
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className='max-h-[75vh] w-auto object-contain rounded-lg shadow-lg'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Experience, "work");
