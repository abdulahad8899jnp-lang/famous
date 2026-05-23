
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,

    ...(name === "name" && {
      message: `Hello, my name is ${value}. I want to know more about your sherwani collection.`,
    }),
  }));
};

  // EMAIL SEND FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r9ynv69",
        "template_6c95c0w",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "4TbNbI4NAtM7S7D5z"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");

          setFormData({
            name: "",
            email: "",
            message: "I want to know more about your sherwani collection.",
          });
        },
        (error) => {
          alert("Failed To Send ❌");
          console.log(error);
        }
      );
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          Contact Us
        </h2>

        <p className="text-gray-400 mt-4">
          Premium Sherwani & Wedding Collection
        </p>

      </motion.div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/20 p-8 shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >

          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Store Information
          </h3>

          <div className="space-y-6">

            {/* Shop Name */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Shop Name
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                Famous Sherwani Collection
              </h4>
            </div>

            {/* Location */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Location
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                Atala Masjid, Shop No. 2, Jaunpur
              </h4>
            </div>

            {/* Phone */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Contact Number
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                8299559581
              </h4>
            </div>

            {/* Timing */}
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-500 text-sm">
                Opening Hours
              </p>

              <h4 className="text-white text-lg font-semibold mt-1">
                10:00 AM – 9:00 PM
              </h4>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="tel:6389102151"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918299559581"
              target="_blank"
              rel="noreferrer"
              className="border border-green-500 text-green-400 px-6 py-3 rounded-xl hover:bg-green-500 hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>

        </motion.div>

        {/* Right Side Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/20 p-8 shadow-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >

          {/* Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Send Message
          </h3>

          {/* Name */}
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              name="message"
              rows="6"
              placeholder="Write Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition"
          >
            Send Message
          </button>

        </motion.form>

      </div>

      {/* Bottom Text */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20 text-gray-400 leading-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <p>
          We provide premium quality sherwani with
          modern royal designs and traditional elegance.
          Our mission is to make every customer look
          stylish and confident on their special occasions.
        </p>

      </motion.div>

    </section>
  );
}