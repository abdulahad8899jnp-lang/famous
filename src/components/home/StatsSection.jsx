import { motion } from "framer-motion";

export default function StatsSection() {

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          {
            value: "500+",
            label: "Products",
          },

          {
            value: "1K+",
            label: "Customers",
          },

          {
            value: "4.9★",
            label: "Ratings",
          },

          {
            value: "10+",
            label: "Collections",
          },
        ].map((item, index) => (

          <motion.div
            whileHover={{ y: -6 }}
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >

            <h2 className="text-4xl font-black text-yellow-400">
              {item.value}
            </h2>

            <p className="text-zinc-400 mt-2">
              {item.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}