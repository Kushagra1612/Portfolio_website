import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex items-center'>
            Kushagra Verma &nbsp;
            <span className='sm:block hidden text-secondary text-[14px] font-medium'>
              | AI &amp; Full Stack Developer
            </span>
          </p>
        </Link>

        <div className='hidden sm:flex flex-row items-center gap-8'>
          <ul className='list-none flex flex-row gap-8'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='flex flex-row items-center gap-3 border-l border-secondary/30 pl-6'>
            <a
              href='https://github.com/Kushagra1612'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-9 rounded-full bg-tertiary flex justify-center items-center hover:scale-110 transition-all duration-300'
              title='GitHub Profile'
            >
              <img src={github} alt='GitHub' className='w-5 h-5 object-contain' />
            </a>
            <a
              href='https://www.linkedin.com/in/kushagravr16'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-9 rounded-full bg-tertiary flex justify-center items-center hover:scale-110 transition-all duration-300'
              title='LinkedIn Profile'
            >
              <img src={linkedin} alt='LinkedIn' className='w-5 h-5 object-contain' />
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 text-white bg-[#915EFF] hover:bg-[#7a4cdb] px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors shadow-sm'
            >
              Resume 📄
            </a>
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='flex flex-row items-center gap-4 pt-3 border-t border-secondary/30 w-full'>
                <a
                  href='https://github.com/Kushagra1612'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='GitHub'
                >
                  <img src={github} alt='GitHub' className='w-6 h-6 object-contain' />
                </a>
                <a
                  href='https://www.linkedin.com/in/kushagravr16'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='LinkedIn'
                >
                  <img src={linkedin} alt='LinkedIn' className='w-6 h-6 object-contain' />
                </a>
              </li>
              <li className='w-full'>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block text-center text-white bg-[#915EFF] hover:bg-[#7a4cdb] px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors w-full'
                >
                  Resume 📄
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
