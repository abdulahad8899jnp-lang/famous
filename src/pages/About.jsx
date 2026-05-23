
import { useState } from "react";
import { motion } from "framer-motion";

import teamMembers from "../data/teamData";
import TeamCard from "../components/TeamCard";
import TeamPopup from "../components/TeamPopup";

export default function About() {

  const [selectedMember, setSelectedMember] =
    useState(null);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen pt-24 px-6">

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Us
      </motion.h1>

      {/* Owner + Shop Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Owner */}
        

<motion.div
  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/10 via-black to-gray-900 border border-yellow-500/20 shadow-2xl p-8"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02 }}
>

  {/* Glow */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>

  {/* Image */}
  <div className="flex justify-center">
    <img
      src="/ownerimg.jpeg"
      alt="Owner"
      className="w-36 h-36 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
    />
  </div>

  {/* Name */}
  <div className="text-center mt-6">
    <h2 className="text-3xl font-bold text-white">
      Mehboob Alam
    </h2>

    <p className="text-yellow-400 mt-2 text-lg">
      Founder & Owner
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-300 text-center mt-5 leading-7 text-sm md:text-base">
    10+ years of experience in premium sherwani,
    coat pant and wedding fashion collection.
  </p>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4 mt-8">

    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
      <h3 className="text-yellow-400 text-2xl font-bold">
        10+
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        Years Experience
      </p>
    </div>

    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4 text-center">
      <h3 className="text-yellow-400 text-2xl font-bold">
        500+
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        Happy Customers
      </p>
    </div>

  </div>

  {/* Skills */}
  <div className="flex flex-wrap justify-center gap-3 mt-8">

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Sherwani
    </span>

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Kurta-Pajama
    </span>

    <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
      Blazer
    </span>

  </div>

  {/* Button */}
  <div className="flex justify-center mt-8">

    <button
      onClick={() =>
        setSelectedMember({
          name: "Mehboob Alam",
          role: "Founder & Owner",
          image: "/ownerimg.jpeg",

          about:
            "Expert in Premium Sherwani & Wedding Fashion Collection.",

          age: "45 Years",
          experience: "10+ Years Experience",
          address: "Jaunpur, Uttar Pradesh",
          speciality: "Wedding Collection Specialist",
        })
      }
      className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
    >
      View Details
    </button>

  </div>

</motion.div>
        

        {/* Shop Details */}
        {/* Premium Shop Details Card */}

<motion.div
  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-yellow-500/20 shadow-2xl p-8"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.02 }}
>

  {/* Glow Effect */}
  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="mb-8 text-center">

    <h2 className="text-3xl font-bold text-yellow-400 tracking-wide">
      Shop Details
    </h2>

    <p className="text-gray-400 mt-2 text-sm">
      Premium Wedding & Fashion Collection
    </p>

  </div>

  {/* Details */}
  <div className="space-y-5">

    {/* Shop Name */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Shop Name
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        Famous Sherwani Collection
      </h3>

    </div>

    {/* Location */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Location
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        Atala Masjid, Shop No. 2, Jaunpur
      </h3>

    </div>

    {/* Contact */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400">
        Contact
      </p>

      <h3 className="text-white text-lg font-semibold mt-1">
        8299559581
      </h3>

    </div>

    {/* Services */}
    <div className="bg-black/40 border border-gray-800 rounded-2xl p-4">

      <p className="text-sm text-gray-400 mb-3">
        Services
      </p>

      <div className="flex flex-wrap gap-3">

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Sherwani
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Coat Pant
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Blazer
        </span>

        <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm">
          Indo-Western
        </span>

      </div>

    </div>

  </div>

</motion.div>

      </div>

      {/* Team Section */}
      {/* Premium Team Section */}

<motion.div
  className="relative overflow-hidden mt-20 max-w-7xl mx-auto"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
>

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-14 relative z-10">

    <p className="text-yellow-400 tracking-[6px] uppercase text-sm mb-3">
      Professional Team
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Meet Our Experts
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
      Our experienced fashion team provides premium sherwani,
      indo-western and wedding collections with modern royal styling.
    </p>

  </div>

  {/* Team Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

    {teamMembers.map((member, index) => (

      <motion.div
        key={member.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black border border-gray-800 shadow-2xl"
      >

        {/* Top Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition origin-left duration-500"></div>

        {/* Image */}
        <div className="relative overflow-hidden">

          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          {/* Role */}
          <div className="absolute bottom-5 left-5">
            <p className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
              {member.role}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="p-6">

          <h3 className="text-2xl font-bold text-white">
            {member.name}
          </h3>

          <p className="text-gray-400 mt-4 leading-7 text-sm">
            {member.about}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">

            <div>
              <p className="text-gray-500 text-sm">
                Experience
              </p>

              <h4 className="text-yellow-400 font-semibold">
                {member.experience}
              </h4>
            </div>

            <button
              onClick={() => setSelectedMember(member)}
              className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              View Details
            </button>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</motion.div>

      {/* Popup */}
      <TeamPopup
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />

      {/* Bottom Description */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-16 text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <p className="pb-5">
          We provide premium quality sherwani with
          modern design and traditional elegance.
          Our mission is to make every customer
          look royal on their special occasions.
        </p>

      </motion.div>

    </div>
  );
}