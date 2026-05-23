
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
      relative min-h-screen
      overflow-hidden
      flex items-center
      bg-black text-white
      pt-24
    "
    >
      {/* PREMIUM BACKGROUND */}

      {/* PREMIUM DESIGN BACKGROUND */}

<div className="absolute inset-0 overflow-hidden">
  {/* MAIN IMAGE */}

  <img
    src="/bgimg.png"
    alt="hero"
    className="
    absolute inset-0
    w-full h-full
    object-cover
    scale-105
    opacity-50
  "
  />

  {/* DARK LAYER */}

  <div className="absolute inset-0 bg-black/60" />

  {/* GOLD GRADIENT */}

  <div
    className="
    absolute inset-0
    bg-gradient-to-br
    from-yellow-500/10
    via-transparent
    to-orange-500/10
  "
  />

  {/* LUXURY SPOT LIGHT */}

  <div
    className="
    absolute
    top-[-10%] left-[-10%]
    w-[600px] h-[600px]
    rounded-full
    bg-yellow-400/20
    blur-[180px]
  "
  />

  <div
    className="
    absolute
    bottom-[-10%] right-[-10%]
    w-[500px] h-[500px]
    rounded-full
    bg-orange-500/20
    blur-[160px]
  "
  />

  {/* CENTER LIGHT */}

  <div
    className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[700px] h-[700px]
    rounded-full
    bg-white/5
    blur-[140px]
  "
  />

  {/* GRID DESIGN */}

  <div
    className="
    absolute inset-0
    opacity-[0.05]
    bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
    bg-[size:80px_80px]
  "
  />

  {/* NOISE EFFECT */}

  <div
    className="
    absolute inset-0
    opacity-[0.03]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]
  "
  />

  {/* VIGNETTE */}

  <div
    className="
    absolute inset-0
    bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]
  "
  />
</div>

      {/* CONTENT */}

      <div
        className="
        relative z-20
        max-w-7xl mx-auto
        px-6 md:px-10
        w-full
      "
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}

          <div>
            {/* TOP TAG */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
              inline-flex items-center
              px-5 py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-yellow-400/20
              text-yellow-300
              text-sm
              tracking-wide
            "
            >
              👑 Luxury Wedding Collection
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
              mt-8
              text-5xl md:text-7xl
              font-black
              leading-[1.05]
            "
            >
              Famous Sherwani

              <span
                className="
                block mt-2
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-yellow-300
                via-yellow-400
                to-orange-400
              "
              >
                Collection
              </span>
            </motion.h1>

            {/* DESC */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
              mt-8
              text-zinc-300
              text-lg
              leading-8
              max-w-xl
            "
            >
              Premium Sherwani, Indo-Western
              and exclusive wedding fashion
              crafted for elegance, royalty,
              and unforgettable occasions.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              {/* BTN 1 */}

              <a href="/products">
                <button
                  className="
                  group
                  px-8 py-4
                  rounded-2xl
                  bg-yellow-400
                  text-black
                  font-bold
                  flex items-center gap-3
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
                  duration-300
                "
                >
                  Explore Collection

                  <ArrowRight
                    size={18}
                    className="
                    group-hover:translate-x-1
                    duration-300
                  "
                  />
                </button>
              </a>

              {/* BTN 2 */}

              <a href="/contact">
                <button
                  className="
                  px-8 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  duration-300
                "
                >
                  Contact Us
                </button>
              </a>
            </motion.div>

            {/* STATS */}

            <div className="flex gap-10 mt-14">
              <div>
                <h2 className="text-3xl font-black text-yellow-400">
                  500+
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                  Premium Designs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-yellow-400">
                  5★
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                  Customer Rating
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-yellow-400">
                  10+
                </h2>

                <p className="text-zinc-400 text-sm mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
            relative hidden lg:flex
            justify-center
          "
          >
            <div className="relative">
              {/* GLOW */}

              <div
                className="
                absolute inset-0
                bg-yellow-400/20
                blur-[120px]
                rounded-full
              "
              />

              {/* IMAGE CARD */}

              <div
                className="
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.7)]
              "
              >
                <img
                  src="/bgimg.png"
                  alt=""
                  className="
                  w-[430px]
                  h-[620px]
                  object-cover
                  hover:scale-105
                  duration-700
                "
                />
              </div>
            
              {/* FLOAT TAG */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                -left-10 top-10
              "
              >
                <div
                  className="
                  px-5 py-3
                  rounded-2xl
                  bg-black/50
                  backdrop-blur-xl
                  border border-white/10
                  text-sm
                "
                >
                  ✨ Premium Sherwani
                </div>
              </motion.div>

              {/* FLOAT TAG */}

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                -right-10 bottom-16
              "
              >
                <div
                  className="
                  px-5 py-3
                  rounded-2xl
                  bg-black/50
                  backdrop-blur-xl
                  border border-white/10
                  text-sm
                "
                >
                  👑 Royal Collection
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
        absolute bottom-0 left-0
        w-full h-40
        bg-gradient-to-t
        from-black to-transparent
      "
      />
    </section>
  );
}