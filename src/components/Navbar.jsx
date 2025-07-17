import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
    <div className="font-bold text-xl text-yellow-500">Hana EL.</div>
    <ul className="flex space-x-6 text-gray-700 dark:text-gray-200">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
