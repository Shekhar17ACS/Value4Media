import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function StillConfused() {
  return (
    <section className="relative bg-black py-0 overflow-hidden">
      <motion.div
        className="relative bg-[#F7FF38] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-0">
            <motion.div
              className="md:col-span-4 relative h-48 md:h-[280px] order-1"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team"
                className="w-full h-full object-cover object-top md:object-center"
              />
            </motion.div>

            <motion.div
              className="md:col-span-5 px-6 md:px-8 py-8 md:py-0 text-center md:text-left order-2"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-2">
                Still confused?
                <br />
                Don't overthink it
              </h2>
            </motion.div>

            <motion.div
              className="md:col-span-3 flex justify-center md:justify-end px-6 md:px-8 pb-8 md:pb-0 order-3"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-8 md:px-10 py-3 md:py-4 bg-black text-[#F7FF38] rounded-full font-black text-sm md:text-base uppercase tracking-wide overflow-hidden flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gray-900"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute top-1/2 right-12 hidden md:block"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
