"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavItem {
  label: string;
  href: () => void; // Update to a function type
}

interface NavBarProps {
  scrollToHome: () => void;
  scrollToEducation: () => void;
  scrollToSkills: () => void;
  scrollToPortfolio: () => void;
}

const NavBar = ({
  scrollToHome,
  scrollToEducation,
  scrollToSkills,
  scrollToPortfolio,
}: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: scrollToHome },
    { label: "Education", href: scrollToEducation },
    { label: "Skills", href: scrollToSkills },
    { label: "Portfolio", href: scrollToPortfolio },
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors mr-auto"
          >
            Portfolio.
          </Link>

          {/* Desktop Navigation and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.href(); // Call the scroll function
                  setIsOpen(false); // Close mobile menu if open
                }}
                className={`relative py-1.5 font-medium transition-colors duration-200
                  text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 pt-6 border-b border-gray-100 dark:border-gray-800">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio.
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <nav className="p-6 space-y-6 bg-white dark:bg-gray-900">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.href(); // Call the scroll function
                  setIsOpen(false); // Close mobile menu if open
                }}
                className={`block text-lg font-medium transition-colors duration-200
                  text-gray-600 dark:text-gray-300`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
