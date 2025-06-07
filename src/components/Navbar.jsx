import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-lg">My Portfolio</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/teaching" className="hover:underline">
              Teaching
            </Link>
            <Link to="/experience" className="hover:underline">
              Experience
            </Link>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/publications" className="hover:underline">
              Publications
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-1" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/operational-issues"
            className="block py-1"
            onClick={() => setIsOpen(false)}
          >
            Operational Issues
          </Link>
          <Link
            to="/learning-teaching-and-assessment"
            className="block py-1"
            onClick={() => setIsOpen(false)}
          >
            Learning Teaching and Assessment
          </Link>
          <Link
            to="/wider-context"
            className="block py-1"
            onClick={() => setIsOpen(false)}
          >
            The Wider Context
          </Link>
          <Link
            to="/communication-working-with-others"
            className="block py-1"
            onClick={() => setIsOpen(false)}
          >
            Communicate and Working with Others
          </Link>
          <Link
            to="/specialist-area"
            className="block py-1"
            onClick={() => setIsOpen(false)}
          >
            Specialist
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
