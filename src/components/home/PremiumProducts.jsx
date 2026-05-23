
import { motion } from "framer-motion";

import {
  Star,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import productsData from "../../data/productsData";

export default function PremiumProducts({
  setSelectedProduct,
}) {

  return (

    <section
      className="
      relative
      py-28
      overflow-hidden
      bg-black
      text-white
    "
    >

      {/* BG EFFECT */}

      <div
        className="
        absolute top-0 left-0
        w-[350px] h-[350px]
        bg-yellow-500/10
        blur-[120px]
      "
      />

      <div
        className="
        absolute bottom-0 right-0
        w-[300px] h-[300px]
        bg-orange-500/10
        blur-[120px]
      "
      />



      <div
        className="
        max-w-7xl mx-auto
        px-6 md:px-12
        relative z-20
      "
      >

        {/* HEADER */}

        <div className="flex items-end justify-between mb-16">

          <div>

            <p
              className="
              text-yellow-400
              uppercase
              tracking-[4px]
              text-sm
              mb-3
            "
            >
              Featured Collection
            </p>

            <h2
              className="
              text-5xl md:text-6xl
              font-black
              leading-tight
            "
            >
              Premium

              <span className="block text-yellow-400">

                Products

              </span>

            </h2>

          </div>



          <p
            className="
            hidden md:block
            max-w-sm
            text-zinc-400
            leading-7
          "
          >

            Discover luxury sherwani,
            indo-western and royal
            wedding fashion crafted
            for modern elegance.

          </p>

        </div>



        {/* PRODUCTS */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {productsData.map(
            (category, index) => {
            
              const product =

                category.items.find(
                  (item) => item.featured
                )
                
                ||

                category.items[0];



              const variant =
                product.variants?.[0];

                

              return (

                <motion.div
                  key={index}

                  whileHover={{
                    y: -12,
                  }}

                  transition={{
                    duration: 0.35,
                  }}

                  className="
                  group
                  relative
                  rounded-[32px]
                  overflow-hidden
                  bg-zinc-900/60
                  backdrop-blur-xl
                  border border-white/10
                "
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <img
                      src={variant?.image}

                      alt={product.name}

                      className="
                      h-[420px]
                      w-full
                      object-cover
                      group-hover:scale-110
                      duration-700
                    "
                    />



                    {/* OVERLAY */}

                    <div
                      className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black via-black/20 to-transparent
                    "
                    />



                    {/* TAG */}

                    <div
                      className="
                      absolute top-4 left-4
                      px-4 py-2
                      rounded-full
                      bg-black/50
                      backdrop-blur-xl
                      border border-white/10
                      text-xs
                      text-yellow-400
                    "
                    >

                      Luxury Wear

                    </div>



                    {/* ICON */}

                    <Link
  to={`/products?category=${encodeURIComponent(
    category.title.replace(
      " Collection",
      ""
    )
  )}`}
>

                      <div
                        className="
                        absolute top-4 right-4
                        h-11 w-11
                        rounded-full
                        bg-yellow-400
                        text-black
                        flex items-center justify-center
                        opacity-0
                        group-hover:opacity-100
                        duration-300
                      "
                      >

                        <ArrowUpRight size={18} />

                      </div>

                    </Link>

                  </div>



                  {/* CONTENT */}

                  <div className="p-6">

                    {/* CATEGORY */}

                    <p
                      className="
                      text-zinc-400
                      text-sm
                      uppercase
                      tracking-[3px]
                    "
                    >

                      {category.category}

                    </p>



                    {/* TITLE */}

                    <h3
                      className="
                      text-2xl
                      font-bold
                      mt-3
                      group-hover:text-yellow-400
                      duration-300
                    "
                    >

                      {product.name}

                    </h3>



                    {/* RATING */}

                    <div className="flex items-center gap-1 mt-4">

                      {[...Array(5)].map((_, i) => (

                        <Star
                          key={i}

                          size={16}

                          className="
                          fill-yellow-400
                          text-yellow-400
                        "
                        />

                      ))}

                      <span className="text-zinc-400 text-sm ml-2">

                        (4.9)

                      </span>

                    </div>



                    {/* PRICE */}

                    <div
                      className="
                      flex items-center
                      justify-between
                      mt-6
                    "
                    >

                      <p
                        className="
                        text-3xl
                        font-black
                        text-yellow-400
                      "
                      >

                        ₹{variant?.price}

                      </p>

                       <Link to={`/products?category=${encodeURIComponent(category.title.replace(  " Collection",      ""    )  )}`}
>
                        <button
                          className="
                          px-5 py-2
                          rounded-xl
                          bg-white/5
                          border border-white/10
                          hover:bg-yellow-400
                          hover:text-black
                          duration-300
                          
                        "
                        >

                          View

                        </button>

                      </Link>

                    </div>

                  </div>



                  {/* GLOW */}

                  <div
                    className="
                    absolute inset-0
                    border border-yellow-400/0
                    group-hover:border-yellow-400/20
                    rounded-[32px]
                    duration-300
                    pointer-events-none
z-0
                  "
                  />

                </motion.div>

              );
            }
          )}

        </div>

      </div>

    </section>
    
  );
}