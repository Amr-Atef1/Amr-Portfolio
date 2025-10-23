import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_ehg8o2e",
        "template_rjhwcom",
        {
          from_name: form.name,
          to_name: "Amr",
          from_email: form.email,
          to_email: "amr316671@gmail.com",
          message: form.message,
        },
        "KYSWaPBN8268KFveI"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  // template_rjhwcom
  // service_ehg8o2e
  //KYSWaPBN8268KFveI
  const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <div
      id="contact"
      className="mb-[4rem] mt-[15rem]  rounded-3xl sm:flex-row bg-space-image flex-col flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <motion.h1
          className="text-gradient text-center text-4xl tracking-wider font-bold mt-5 sm:mt-10"
        >
          Contact us
        </motion.h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#0f0e25] p-10 rounded-3xl mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#141130] py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          {/* second label */}
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#141130] py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          {/* third label */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#141130] py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#141130] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
