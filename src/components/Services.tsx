import { motion } from 'framer-motion';
import { Palette, Code, Megaphone, Smartphone, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Crafting unique visual identities that resonate with your audience and stand out in the market.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building blazing-fast, responsive websites with cutting-edge technology and seamless user experiences.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that amplify your reach and convert audiences into loyal customers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform applications that deliver intuitive experiences on any device.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Strategic insights and actionable roadmaps to accelerate your business growth and market presence.',
  },
  {
    icon: Zap,
    title: 'Creative Content',
    description: 'Compelling storytelling through video, animation, and multimedia that captures attention.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen bg-[#0f0f10] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#F7FF38] text-sm uppercase tracking-widest font-semibold">
            What We Do
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end solutions designed to elevate your brand and drive measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-[#1a1a1f] rounded-2xl p-8 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#F7FF38] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#F7FF38] flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-black" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:to-[#F7FF38] transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center text-[#F7FF38] font-semibold"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>

              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#F7FF38] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
