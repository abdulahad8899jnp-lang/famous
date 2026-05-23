import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export default function ProductCard({
  item,
  setSelectedProduct,
}) {

  // SELECTED VARIANT
  const [selectedVariant, setSelectedVariant] =
    useState(item.variants?.[0]);

  // ✅ FIX: per card unique slider reference
  const sliderRef = useRef(null);

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl hover:border-yellow-500"
    >

      {/* IMAGE */}
      <div className="overflow-hidden relative">

        <img
          src={selectedVariant?.image}
          alt={item.name}
          className="w-full h-80 object-cover group-hover:scale-110 duration-500"
        />

        {/* BADGE */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
          NEW
        </div>

        {/* ARTICLE */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-zinc-700">
          Article: {selectedVariant?.articleNo}
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* CATEGORY */}
        <p className="text-yellow-400 text-sm mb-2 tracking-wide">
          {item.category}
        </p>

        {/* NAME */}
        <h2 className="text-2xl font-bold mb-3 line-clamp-1">
          {item.name}
        </h2>

        {/* PRICE + RATING */}
        <div className="flex items-center justify-between mb-5">

          <div>
            <p className="text-green-400 text-2xl font-bold">
              ₹{selectedVariant?.price}
            </p>

            <p className="text-zinc-400 text-sm mt-1">
              {selectedVariant?.color}
            </p>
          </div>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">
              {item.rating || "4.8"}
            </span>
          </div>

        </div>

        {/* VARIANT SLIDER */}
        <div className="relative mb-5">

          {/* LEFT BUTTON */}
          <button
            onClick={() => {
              sliderRef.current?.scrollBy({
                left: -120,
                behavior: "smooth",
              });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
          >
            ❮
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {item.variants?.map((variant, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedVariant(variant)
                }
                className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all
                ${
                  selectedVariant?.articleNo ===
                  variant.articleNo
                    ? "border-yellow-400 scale-105"
                    : "border-zinc-700"
                }`}
              >
                <img
                  src={variant.image}
                  alt="variant"
                  draggable="false"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => {
              sliderRef.current?.scrollBy({
                left: 120,
                behavior: "smooth",
              });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-yellow-400 hover:text-black w-7 h-7 rounded-full flex items-center justify-center"
          >
            ❯
          </button>

        </div>

        {/* VIEW DETAILS BUTTON */}
        <button
          onClick={() =>
            setSelectedProduct({
              ...item,
              selectedVariant,
            })
          }
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={18} />
          View Details
        </button>

      </div>
    </motion.div>
  );
}