import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import type { Theme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="header fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Theme Switcher</h1>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <Link to="/" className="text-base sm:text-lg font-medium hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="text-base sm:text-lg font-medium hover:text-blue-400 transition-colors duration-200">
            About Me
          </Link>
          <Link to="/contact" className="text-base sm:text-lg font-medium hover:text-blue-400 transition-colors duration-200">
            Contact Me
          </Link>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            className="p-2 rounded-lg bg-gray-200 text-gray-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="theme1">Minimalist</option>
            <option value="theme2">Dark</option>
            <option value="theme3">Colorful</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;