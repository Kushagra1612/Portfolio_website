import React from "react";
import { github, linkedin } from "../assets";

const Footer = () => {
  return (
    <footer className='bg-primary py-8 border-t border-secondary/20'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
        <p className='text-secondary text-[14px]'>
          &copy; {new Date().getFullYear()} Kushagra Verma. All rights reserved.
        </p>

        <div className='flex items-center gap-5'>
          <a
            href='/resume.pdf'
            download
            className='text-secondary text-[14px] hover:text-white transition-colors'
          >
            📄 Resume
          </a>
          <a
            href='mailto:kushagraverma1234@gmail.com'
            className='text-secondary text-[14px] hover:text-white transition-colors'
          >
            ✉️ Email
          </a>
          <a
            href='https://github.com/Kushagra1612'
            target='_blank'
            rel='noopener noreferrer'
            className='w-8 h-8 rounded-full bg-tertiary flex justify-center items-center hover:scale-110 transition-all duration-300'
            title='GitHub'
          >
            <img src={github} alt='GitHub' className='w-4 h-4 object-contain' />
          </a>
          <a
            href='https://www.linkedin.com/in/kushagravr16'
            target='_blank'
            rel='noopener noreferrer'
            className='w-8 h-8 rounded-full bg-tertiary flex justify-center items-center hover:scale-110 transition-all duration-300'
            title='LinkedIn'
          >
            <img src={linkedin} alt='LinkedIn' className='w-4 h-4 object-contain' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
