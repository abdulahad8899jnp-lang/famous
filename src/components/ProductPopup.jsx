// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Star,
//   X,
// } from "lucide-react";

// export default function ProductPopup({
//   selectedProduct,
//   setSelectedProduct,
// }) {

//   // DEFAULT VARIANT
//   const [selectedVariant, setSelectedVariant] =
//     useState(
//       selectedProduct?.variants?.[0]
//     );

//   const [selectedSize, setSelectedSize] =
//     useState("");

//   // RESET WHEN PRODUCT CHANGES
//   useEffect(() => {

//     setSelectedVariant(
//       selectedProduct?.variants?.[0]
//     );

//     setSelectedSize("");

//   }, [selectedProduct]);



//   // WHATSAPP ORDER
//   const handleOrder = () => {

//     if (!selectedSize) {
//       alert("Please Select Size");
//       return;
//     }

//     const phoneNumber =
//       "916389102151";

//     const message = `🛍️ New Order

// Product: ${selectedProduct.name}

// Article No:
// ${selectedVariant.articleNo}

// Color:
// ${selectedVariant.color}

// Price:
// ₹${selectedVariant.price}

// Size:
// ${selectedSize}

// Customer wants to order this product.`;

//     const whatsappURL =
//       `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     window.open(
//       whatsappURL,
//       "_blank"
//     );
//   };



//   return (
//     <AnimatePresence>

//       {selectedProduct && (

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
//         >

//           <motion.div
//             initial={{
//               scale: 0.7,
//               opacity: 0,
//             }}

//             animate={{
//               scale: 1,
//               opacity: 1,
//             }}

//             exit={{
//               scale: 0.7,
//               opacity: 0,
//             }}

//             transition={{
//               duration: 0.3,
//             }}

//             className="bg-zinc-900 border border-zinc-800 rounded-[35px] overflow-hidden max-w-7xl w-full md:w-[92%] h-[92vh] grid md:grid-cols-[1fr_0.9fr] shadow-[0_0_60px_rgba(255,215,0,0.08)]"
//           >

//             {/* LEFT SIDE */}
//             <div className="p-4">

//               {/* MAIN IMAGE */}
//               <div className="overflow-hidden rounded-3xl border border-zinc-800">

//                 <img
//                   src={
//                     selectedVariant?.image
//                   }

//                   alt={
//                     selectedProduct.name
//                   }

//                   className="w-full h-[450px] object-cover hover:scale-105 duration-500"
//                 />

//               </div>


//               {/* THUMBNAILS */}
//               <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

//                 {selectedProduct.variants?.map(
//                   (variant, index) => (

//                     <button
//                       key={index}

//                       onClick={() =>
//                         setSelectedVariant(
//                           variant
//                         )
//                       }

//                       className={`min-w-[85px] h-24 rounded-2xl overflow-hidden border-2 transition-all
                      
//                       ${
//                         selectedVariant?.articleNo ===
//                         variant.articleNo

//                           ? "border-yellow-400 scale-105"

//                           : "border-zinc-700"
//                       }
                      
//                       `}
//                     >

//                       <img
//                         src={variant.image}
//                         alt="variant"

//                         className="w-full h-full object-cover"
//                       />

//                     </button>
//                   )
//                 )}

//               </div>

//             </div>



//             {/* RIGHT SIDE */}
//             <div className="p-8 overflow-y-auto relative">

//               {/* CLOSE */}
//               <button
//                 onClick={() =>
//                   setSelectedProduct(null)
//                 }

//                 className="absolute top-5 right-5 bg-zinc-800 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition"
//               >

//                 <X />

//               </button>


//               {/* CATEGORY */}
//               <p className="text-yellow-400 mb-2 tracking-wide">
//                 {selectedProduct.category}
//               </p>


//               {/* NAME */}
//               <h2 className="text-4xl font-bold mb-4 leading-tight">
//                 {selectedProduct.name}
//               </h2>


//               {/* PRICE */}
//               <div className="flex items-center gap-4 mb-4">

//                 <p className="text-3xl text-green-400 font-bold">
//                   ₹
//                   {selectedVariant?.price}
//                 </p>

//                 <div className="flex items-center gap-1 text-yellow-400">

//                   <Star
//                     size={18}
//                     fill="currentColor"
//                   />

//                   <span>
//                     {selectedProduct.rating ||
//                       "4.8"}
//                   </span>

//                 </div>

//               </div>



//               {/* ARTICLE */}
//               <div className="mb-5 flex flex-wrap gap-3">

//                 <div className="bg-zinc-800 px-4 py-2 rounded-xl text-sm">
//                   Article:
//                   {" "}
//                   <span className="text-yellow-400 font-semibold">
//                     {
//                       selectedVariant?.articleNo
//                     }
//                   </span>
//                 </div>

//                 <div className="bg-zinc-800 px-4 py-2 rounded-xl text-sm">
//                   Color:
//                   {" "}
//                   <span className="text-yellow-400 font-semibold">
//                     {
//                       selectedVariant?.color
//                     }
//                   </span>
//                 </div>

//               </div>



//               {/* DETAILS */}
//               <div className="space-y-3 mb-6">

                

//                 <p className="text-gray-300">

//                   <span className="text-white font-semibold">
//                     Fabric:
//                   </span>

//                   {" "}
//                   {selectedProduct.fabric}

//                 </p>

//                 <p className="text-yellow-300">
//                   {selectedProduct.stock}
//                 </p>

//               </div>


//               {/* DESCRIPTION */}
//               <p className="text-gray-400 leading-7 mb-8">
//                 {selectedProduct.description}
//               </p>



//               {/* SIZE */}
//               <h3 className="text-xl font-bold mb-4">
//                 Select Size
//               </h3>

//               <div className="flex flex-wrap gap-3 mb-8">

//                 {selectedProduct.sizes?.map(
//                   (size) => (

//                     <button
//                       key={size}

//                       onClick={() =>
//                         setSelectedSize(size)
//                       }

//                       className={`px-6 py-3 rounded-2xl border font-semibold duration-300
                      
//                       ${
//                         selectedSize === size

//                           ? "bg-yellow-500 text-black border-yellow-500 scale-105"

//                           : "border-gray-600 text-white hover:border-yellow-400"
//                       }
                      
//                       `}
//                     >

//                       {size}

//                     </button>
//                   )
//                 )}

//               </div>



//               {/* WHATSAPP BUTTON */}
//               <button
//                 onClick={handleOrder}

//                 className="bg-green-500 hover:bg-green-400 text-black px-6 py-4 rounded-2xl font-bold w-full text-lg transition-all duration-300 shadow-lg"
//               >

//                 Order on WhatsApp

//               </button>

//             </div>

//           </motion.div>

//         </motion.div>
//       )}

//     </AnimatePresence>
//   );
// }






import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  X,
} from "lucide-react";

export default function ProductPopup({
  selectedProduct,
  setSelectedProduct,
}) {

  // DEFAULT VARIANT
  const [selectedVariant, setSelectedVariant] =
    useState(
      selectedProduct?.variants?.[0]
    );

  const [selectedSize, setSelectedSize] =
    useState("");



  // RESET WHEN PRODUCT CHANGES
  useEffect(() => {

    setSelectedVariant(
      selectedProduct?.variants?.[0]
    );

    setSelectedSize("");

  }, [selectedProduct]);



  // WHATSAPP ORDER
  const handleOrder = () => {

    if (!selectedSize) {
      alert("Please Select Size");
      return;
    }

    const phoneNumber =
      "916389102151";

    const message = `🛍️ New Order

Product:
${selectedProduct.name}

Article No:
${selectedVariant.articleNo}

Color:
${selectedVariant.color}

Price:
₹${selectedVariant.price}

Size:
${selectedSize}

Customer wants to order this product.`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank"
    );
  };



  return (
    <AnimatePresence>

      {selectedProduct && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 md:p-6"
        >

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}

            animate={{
              scale: 1,
              opacity: 1,
            }}

            exit={{
              scale: 0.9,
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            className="bg-zinc-950 border border-zinc-800 rounded-[35px] overflow-hidden max-w-7xl w-full h-[95vh] flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr]"
          >

            {/* LEFT SIDE */}
          <div className="p-4 md:p-5 flex flex-col bg-black/20 lg:h-full">

              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 h-[45vh] lg:h-[85vh]">
                <img
                  src={
                    selectedVariant?.image
                  }

                  alt={
                    selectedProduct.name
                  }

                  className="w-full h-full object-cover hover:scale-105 duration-500"
                />

              </div>
            </div>



            {/* RIGHT SIDE */}
           <div className="relative h-[95vh] overflow-y-auto scrollbar-hide">

              <div className="p-6 md:p-10">

                {/* CLOSE */}
                <button
                 onClick={() => setSelectedProduct(null)}
                    className="absolute top-3 right-3 md:top-5 md:right-5 z-50 bg-zinc-800 hover:bg-red-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition"
                >
                  <X size={18} />
                </button>



                {/* CATEGORY */}
                <p className="text-yellow-400 tracking-wide uppercase text-sm mb-3">

                  {selectedProduct.category}

                </p>



                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">

                  {selectedProduct.name}

                </h2>



                {/* PRICE */}
                <div className="flex items-center gap-5 mb-6 flex-wrap">

                  <p className="text-4xl text-green-400 font-bold">

                    ₹
                    {selectedVariant?.price}

                  </p>

                  <div className="flex items-center gap-1 text-yellow-400">

                    <Star
                      size={20}
                      fill="currentColor"
                    />

                    <span className="text-lg">

                      {selectedProduct.rating ||
                        "4.8"}

                    </span>

                  </div>

                </div>



                {/* ARTICLE + COLOR */}
                <div className="flex flex-wrap gap-3 mb-6">

                  <div className="bg-zinc-800/80 border border-zinc-700 px-4 py-3 rounded-2xl text-sm">

                    Article:
                    {" "}

                    <span className="text-yellow-400 font-semibold">

                      {
                        selectedVariant?.articleNo
                      }

                    </span>

                  </div>



                  <div className="bg-zinc-800/80 border border-zinc-700 px-4 py-3 rounded-2xl text-sm">

                    Color:
                    {" "}

                    <span className="text-yellow-400 font-semibold">

                      {
                        selectedVariant?.color
                      }

                    </span>

                  </div>

                </div>



                {/* DETAILS */}
                <div className="space-y-3 mb-6">

                  <p className="text-gray-300">

                    <span className="text-white font-semibold">

                      Fabric:

                    </span>

                    {" "}

                    {selectedProduct.fabric}

                  </p>



                  <p className="text-yellow-300 font-medium">

                    {selectedProduct.stock}

                  </p>

                </div>



                {/* DESCRIPTION */}
                <p className="text-zinc-400 leading-8 mb-10">

                  {selectedProduct.description}

                </p>



                {/* SIZE */}
                <h3 className="text-2xl font-bold mb-5">

                  Select Size

                </h3>



                <div className="flex flex-wrap gap-4 mb-10">

                  {selectedProduct.sizes?.map(
                    (size) => (

                      <button
                        key={size}

                        onClick={() =>
                          setSelectedSize(size)
                        }

                        className={`w-20 h-16 rounded-2xl border font-bold text-lg duration-300
                        
                        ${
                          selectedSize === size

                            ? "bg-yellow-500 text-black border-yellow-500 scale-105"

                            : "border-zinc-700 text-white hover:border-yellow-400"
                        }
                        
                        `}
                      >

                        {size}

                      </button>
                    )
                  )}

                </div>
                  {/* THUMBNAILS (MOVED TO RIGHT SIDE) */}
<div className="mt-6 mb-8">
  <h3 className="text-lg font-semibold mb-3 text-white">
    More Images
  </h3>

  <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
    {selectedProduct.variants?.map((variant, index) => (
      <button
        key={index}
        onClick={() => setSelectedVariant(variant)}
        className={`flex-shrink-0 w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all
        ${
          selectedVariant?.articleNo === variant.articleNo
            ? "border-yellow-400 scale-105"
            : "border-zinc-700"
        }`}
      >
        <img
          src={variant.image}
          className="w-full h-full object-cover"
        />
      </button>
    ))}
  </div>
</div>


                {/* ORDER BUTTON */}
                <div className="sticky bottom-0 bg-zinc-950 pt-4 mt-6">

                  <button
                    onClick={handleOrder}

                    className="bg-green-500 hover:bg-green-400 text-black px-6 py-5 rounded-2xl font-bold w-full text-lg transition-all duration-300 shadow-lg"
                  >

                    Order on WhatsApp

                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}