import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0f0f10] py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f10] via-[#1a1a1f] to-[#0f0f10]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ opacity }}>
            <motion.span
              className="text-[#F7FF38] text-sm uppercase tracking-widest font-semibold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.span>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Create
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#F7FF38]">
                Digital Magic
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're not just another agency. We're a collective of visionaries, strategists, and creators who believe in the power of exceptional design and innovative thinking.
            </motion.p>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our mission is simple: transform brands through immersive experiences that captivate audiences and drive meaningful results.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">150+</h3>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-500 text-sm">Awards Won</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[600px]"
            style={{ y }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#F7FF38] rounded-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-8 bg-[#1a1a1f] rounded-3xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 bg-gradient-to-br from-[#FFD700] to-[#F7FF38] rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
