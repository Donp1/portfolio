"use client";
// components/ContactForm.js
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {submitted ? (
        <motion.div
          className="bg-green-200 p-4 rounded-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold">Thank you for your message!</h2>
        </motion.div>
      ) : (
        <motion.form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-transparent bg-clip-text uppercase w-fit mx-auto sm:text-sm lg:text-lg font-bold text-center bg-gradient-to-r from-emerald-400 to-sky-500">
            Message Me
          </h1>
          <hr className="mb-3" />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaUser className="mr-2" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaEnvelope className="mr-2" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <FaComment className="mr-2" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="resize-none appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                placeholder="Your Message"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;
