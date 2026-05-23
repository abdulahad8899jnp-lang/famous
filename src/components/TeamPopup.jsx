// src/components/TeamPopup.jsx

import { motion, AnimatePresence } from "framer-motion";

export default function TeamPopup({
  selectedMember,
  setSelectedMember,
}) {
  return (
    <AnimatePresence>
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            className="bg-[#111] rounded-2xl p-6 w-full max-w-md relative border border-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-2xl text-white"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-yellow-400"
            />

            {/* Name */}
            <h2 className="text-2xl text-center mt-4 font-semibold text-yellow-400">
              {selectedMember.name}
            </h2>

            {/* Role */}
            <p className="text-center text-gray-400 mt-1">
              {selectedMember.role}
            </p>

            {/* About */}
            <p className="text-gray-300 text-center mt-4 leading-relaxed">
              {selectedMember.about}
            </p>

            {/* Extra Details */}
            <div className="mt-5 space-y-2 text-sm text-gray-300">

              <p>
                <span className="text-white font-semibold">
                  Age:
                </span>{" "}
                {selectedMember.age}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Experience:
                </span>{" "}
                {selectedMember.experience}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Address:
                </span>{" "}
                {selectedMember.address}
              </p>

              <p>
                <span className="text-white font-semibold">
                  Speciality:
                </span>{" "}
                {selectedMember.speciality}
              </p>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


