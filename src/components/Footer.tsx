import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRef } from 'react';
import TimezoneClock from './TimezoneClock';

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1, 1]);

  return (
    <footer ref={footerRef} className="relative bg-[#0f0f10] border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#F7FF38] rounded-full blur-[120px] opacity-10"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#FFD700] rounded-full blur-[150px] opacity-10"
          style={{ y: y2 }}
        />
      </div>

      <motion.div className="max-w-7xl mx-auto px-6 py-12 relative z-10" style={{ opacity }}>
        <motion.div
          className="mb-16"
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TimezoneClock />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -25]) }}>
            <h3 className="text-2xl font-bold text-white mb-4">AGENCY</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating digital excellence through innovative design and strategic thinking.
            </p>
          </motion.div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [60, -30]) }}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#F7FF38] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [70, -35]) }}>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Brand Design', 'Web Development', 'Digital Marketing', 'Mobile Apps'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F7FF38] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [80, -40]) }}>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-[#1a1a1f] text-white rounded-l-lg border border-gray-800 focus:border-[#F7FF38] focus:outline-none text-sm"
              />
              <motion.button
                className="px-4 py-2 bg-[#F7FF38] text-black rounded-r-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="mx-1 text-[#F7FF38]" size={16} /> by Agency
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © 2024 Agency. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
