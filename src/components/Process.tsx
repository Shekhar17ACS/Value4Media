import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, BookOpen, Video, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    number: 1,
    title: 'The Brand Therapy Session',
    description: "You talk, we listen. We ask a few smart questions (and maybe one weird one) to understand your brand's vibe, goals, and what's been holding you back.",
    icon: Smartphone,
  },
  {
    number: 2,
    title: 'The Secret Recipe',
    description: "We cook up a strategy—one part creativity, one part research, and a pinch of 'why didn't I think of that'.",
    icon: BookOpen,
  },
  {
    number: 3,
    title: 'The Execution',
    description: 'Cameras roll, edits happen, and content takes shape. The kind of content people actually want to watch (not just scroll past).',
    icon: Video,
  },
  {
    number: 4,
    title: "The 'Oh, This Works' Moment",
    description: "The content goes live. Your audience engages. The numbers start moving. We track what's working and fine-tune as needed.",
    icon: TrendingUp,
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative bg-black py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-[#F7FF38] mb-4 md:mb-8 tracking-tight">
            OUR PROCESS
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 -translate-x-1/2 bg-gray-800 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-[#F7FF38] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}>
                  <motion.div
                    className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className={`relative ${index % 2 === 0 ? 'md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className={`flex items-center gap-6 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <motion.div
                        className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#F7FF38] to-[#FFD700] p-0.5">
                          <div className="w-full h-full rounded-2xl md:rounded-3xl bg-black flex items-center justify-center">
                            <step.icon className="text-[#F7FF38] w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#F7FF38] flex items-center justify-center z-10 hidden md:flex"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <span className="text-black text-xl md:text-2xl font-black">
                    {step.number}
                  </span>
                </motion.div>

                <div className="md:hidden flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#F7FF38] flex items-center justify-center flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-black text-lg font-black">
                      {step.number}
                    </span>
                  </motion.div>
                  <div className="h-0.5 flex-1 bg-[#F7FF38]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
