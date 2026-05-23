import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 py-14 px-6">
        
        {/* 🔥 Brand */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide 
          bg-gradient-to-r from-yellow-400 to-yellow-200 
          bg-clip-text text-transparent">
            Famous Sherwani Collection
          </h1>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Discover premium sherwani crafted with elegance,
            tradition, and modern luxury style.
          </p>
        </div>

        {/* 🔥 Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h2>

          <ul className="space-y-2">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-yellow-400 
                  transition duration-300 hover:pl-1"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Contact
          </h2>

          <p className="text-gray-400 text-sm">Mahboob Alam</p>
          <p className="text-gray-400 text-sm">
            Atala Masjid, Shop No. 2, Jaunpur
          </p>

          <p className="text-gray-400 text-sm mt-2 
          hover:text-yellow-400 transition">
            📞 8299559581
          </p>
        </div>
      </div>

      {/* 🔥 Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-gray-500 text-sm">
        © 2026 Famous Sherwani Collection. All rights reserved.
      </div>
    </footer>
  );
}