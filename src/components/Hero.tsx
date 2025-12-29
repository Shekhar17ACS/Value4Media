import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as any,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0f10]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f10] via-[#1a1a1f] to-[#0f0f10]" />

      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#F7FF38] rounded-full blur-[120px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              variants={wordVariants}
              className="text-7xl md:text-9xl font-bold text-white tracking-tight"
            >
              CREATIVE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              variants={wordVariants}
              className="text-7xl md:text-9xl font-bold text-white tracking-tight"
            >
              EXCELLENCE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.p
              variants={wordVariants}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
            >
              We craft digital experiences that inspire, engage, and transform brands into market leaders
            </motion.p>
          </div>
          <motion.button
            variants={wordVariants}
            className="group relative px-8 py-4 bg-[#F7FF38] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F7FF38]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">Scroll</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="text-gray-500" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
