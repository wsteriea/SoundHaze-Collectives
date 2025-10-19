
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black px-6 py-4 flex items-center justify-between shadow-md ">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="src/assets/images/soundhaze.png"
          alt="SoundHaze Logo"
          className="h-20 w-auto object-contain"
        />
      </Link>

      {/* Centered Navigation */}
          <nav className="flex-1 flex justify-center space-x-8 text-2xl font-semibold">
          <Link to="/"className="text-white hover:text-yellow-400 transition-colors duration-300"> Home
          </Link>
          <Link to="/music" className="text-white hover:text-yellow-400 transition-colors duration-300"> Music
          </Link>
          <Link to="/products" className="text-white hover:text-yellow-400 transition-colors duration-300">Products
          </Link>
          <Link to="/shelves"className="text-white hover:text-yellow-400 transition-colors duration-300"> Storage
          </Link>
          <Link to="/guides" className="text-white hover:text-yellow-400 transition-colors duration-300" > Guides
          </Link>
        </nav>

      <Link to="" className="text-gray-300 hover:text-yellow-400 text-2xl transition-colors mr-5">
        🛒
      </Link>
      <Link to="" className="text-gray-300 hover:text-yellow-400 text-2xl transition-colors mr-8">
        👤
      </Link>
    </header>
  );
}

