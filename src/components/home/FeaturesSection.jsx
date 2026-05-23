import { motion } from "framer-motion";

import {
  ShoppingBag,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesSection() {

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">

      <div className="grid md:grid-cols-3 gap-6">

        {[
          {
            icon: <ShoppingBag />,
            title: "Huge Collection",
            desc: "All premium categories in one place",
          },

          {
            icon: <Truck />,
            title: "Fast Service",
            desc: "Quick response and smooth shopping",
          },

          {
            icon: <ShieldCheck />,
            title: "Trusted Quality",
            desc: "Premium fabric and elegant finishing",
          },
        ].map((item, index) => (

          <motion.div
            whileHover={{ y: -8 }}
            key={index}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >

            <div className="bg-yellow-400 text-black h-14 w-14 rounded-2xl flex items-center justify-center">

              {item.icon}

            </div>

            <h3 className="text-2xl font-bold mt-6">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}