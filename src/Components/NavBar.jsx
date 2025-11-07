import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">NightMare</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 pb-4 space-y-3">
          <li><a href="#home" onClick={toggleMenu} className="block hover:text-blue-400">Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-blue-400">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
