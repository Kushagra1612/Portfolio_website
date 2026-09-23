import React, { useRef, useState } from "react";
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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || "service_s24i9qs";
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || "template_f83h1kh";
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || "jTzf6eJldflwcOxNo";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          name: form.name,
          user_name: form.name,
          to_name: "Kushagra Verma",
          from_email: form.email,
          email: form.email,
          user_email: form.email,
          reply_to: form.email,
          to_email: "kushagraverma1234@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "Thank you! I will get back to you as soon as possible.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: "error",
          message: error?.text || "Something went wrong. Please try again or email directly.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className='flex flex-wrap gap-4 mt-3'>
          <a
            href='mailto:kushagraverma1234@gmail.com'
            className='text-secondary text-[14px] flex items-center gap-2 hover:text-white transition-colors'
          >
            ✉️ kushagraverma1234@gmail.com
          </a>
          <a
            href='https://www.linkedin.com/in/kushagravr16'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary text-[14px] flex items-center gap-2 hover:text-white transition-colors'
          >
            🔗 LinkedIn
          </a>
          <a
            href='https://github.com/Kushagra1612'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary text-[14px] flex items-center gap-2 hover:text-white transition-colors'
          >
            💻 GitHub
          </a>
        </div>

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
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className='flex flex-wrap items-center gap-4'>
            <button
              type='submit'
              disabled={loading}
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50 hover:bg-[#915EFF] transition-colors'
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {status.message && (
              <p
                className={`text-[14px] font-medium ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
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
