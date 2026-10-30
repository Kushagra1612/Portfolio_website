import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  title,
  issuer,
  instructor,
  date,
  length,
  credential_id,
  certificate_url,
  image,
  tags,
  onImageClick,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 400,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between h-full border border-secondary/10 hover:border-[#915EFF]/50 transition-colors shadow-card'
      >
        <div>
          {/* Certificate Image Preview */}
          <div
            className='relative w-full h-[200px] overflow-hidden rounded-xl cursor-pointer group bg-black/40'
            onClick={() => onImageClick(image, title)}
            title='Click to view full certificate'
          >
            <img
              src={image}
              alt={title}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
              <span className='bg-primary/90 text-white text-[13px] px-3 py-1.5 rounded-full font-medium shadow-md flex items-center gap-1.5'>
                🔍 View Certificate
              </span>
            </div>
            <div className='absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-white'>
              {issuer}
            </div>
          </div>

          {/* Details */}
          <div className='mt-4'>
            <div className='flex items-center justify-between text-[12px] text-secondary'>
              <span>📅 {date}</span>
              <span>⏱️ {length}</span>
            </div>

            <h3 className='text-white font-bold text-[19px] mt-2 leading-snug'>
              {title}
            </h3>

            {instructor && (
              <p className='mt-1 text-secondary text-[13px]'>
                <span className='text-white-100 font-medium'>By:</span> {instructor}
              </p>
            )}

            {credential_id && (
              <p className='mt-1 text-secondary/80 text-[11px] font-mono truncate' title={credential_id}>
                ID: {credential_id}
              </p>
            )}
          </div>
        </div>

        {/* Footer: Tags and Link */}
        <div className='mt-5 pt-3 border-t border-secondary/15 flex flex-col gap-3'>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${title}-${tag.name}`}
                className={`text-[12px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {certificate_url ? (
            <a
              href={certificate_url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full text-center text-white bg-[#915EFF] hover:bg-[#7a4cdb] py-2 px-3 rounded-lg text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5'
            >
              Verify Credential ↗
            </a>
          ) : (
            <button
              onClick={() => onImageClick(image, title)}
              className='w-full text-center text-white bg-secondary/20 hover:bg-secondary/30 py-2 px-3 rounded-lg text-[13px] font-semibold transition-colors flex items-center justify-center gap-1.5'
            >
              View Certificate 🔍
            </button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Continuous Learning &amp; Credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Specialized courses and industry-recognized certifications in full-stack
          development, modern frameworks, and artificial intelligence. Each
          credential represents hands-on coursework and practical implementation.
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap gap-7 justify-center sm:justify-start'>
        {certifications.map((cert, index) => (
          <CertificateCard
            key={`cert-${index}`}
            index={index}
            {...cert}
            onImageClick={(img, title) => setSelectedImage({ img, title })}
          />
        ))}
      </div>

      {/* Lightbox / Full-screen Certificate Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
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
                  {selectedImage.title}
                </h4>
                <button
                  onClick={() => setSelectedImage(null)}
                  className='text-secondary hover:text-white text-xl font-bold px-2 py-1'
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className='max-h-[75vh] w-auto object-contain rounded-lg shadow-lg'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
