import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Work', 'Services', 'About', 'Contact'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          AGENCY
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#F7FF38] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2 bg-[#F7FF38] text-black rounded-full font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f10] border-t border-gray-800 mt-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col space-y-6 p-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-3 bg-[#F7FF38] text-black rounded-full font-bold">
              Let's Talk
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
