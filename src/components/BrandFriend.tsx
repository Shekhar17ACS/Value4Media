import { motion } from 'framer-motion';
import { MousePointer, Sparkles, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: MousePointer,
    title: 'Knows how to make people stop scrolling',
    gradient: 'from-blue-400 to-cyan-400',
    illustration: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Sparkles,
    title: 'Gets what content actually works',
    gradient: 'from-purple-400 to-pink-400',
    illustration: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Heart,
    title: 'Creates engaging content, not forced ads.',
    gradient: 'from-pink-400 to-rose-400',
    illustration: 'https://images.pexels.com/photos/3394237/pexels-photo-3394237.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Users,
    title: 'Makes your brand fun, memorable, and worth following',
    gradient: 'from-orange-400 to-yellow-400',
    illustration: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function BrandFriend() {
  return (
    <section className="relative min-h-screen bg-black py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F7FF38] rounded-full blur-[200px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-[#F7FF38] mb-4 leading-tight tracking-tight">
            THINK OF US AS YOUR BRAND'S
            <br />
            <span className="text-white">BEST FRIEND WHO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="relative bg-[#1a1a1a] rounded-3xl p-8 h-full overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-8 relative aspect-square rounded-2xl overflow-hidden bg-[#0f0f10]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={feature.illustration}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`}
                      whileHover={{ opacity: 0.5 }}
                    />

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      <motion.div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center backdrop-blur-sm`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="text-white" size={32} />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white leading-tight text-center group-hover:text-[#F7FF38] transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#F7FF38] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 font-semibold mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Ready to make your brand unforgettable?
          </motion.p>
          <motion.button
            className="px-12 py-5 bg-[#F7FF38] text-black rounded-full font-black text-lg uppercase tracking-wide"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 255, 56, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Create Magic
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
