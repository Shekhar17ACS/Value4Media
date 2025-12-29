import { motion } from 'framer-motion';

const clients = [
  'NIKE',
  'APPLE',
  'GOOGLE',
  'AMAZON',
  'MICROSOFT',
  'TESLA',
  'NETFLIX',
  'SPOTIFY',
  'ADOBE',
  'META',
];

export default function ClientMarquee() {
  return (
    <section className="relative bg-[#0f0f10] py-20 overflow-hidden border-y border-gray-800">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center mx-12"
          >
            <motion.span
              className="text-4xl md:text-5xl font-bold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#F7FF38] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {client}
            </motion.span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
