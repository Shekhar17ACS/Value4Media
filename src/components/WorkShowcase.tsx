import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Urban Fusion',
    category: 'Branding & Web Design',
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Tech Summit 2024',
    category: 'Event Campaign',
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Stellar Finance',
    category: 'App Design',
    gradient: 'from-emerald-500 to-teal-500',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'Gourmet Kitchen',
    category: 'Brand Identity',
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Eco Solutions',
    category: 'Web Platform',
    gradient: 'from-green-500 to-lime-500',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: 'Motion Studio',
    category: 'Video Production',
    gradient: 'from-violet-500 to-fuchsia-500',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative min-h-screen bg-[#0f0f10] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#F7FF38] text-sm uppercase tracking-widest font-semibold">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest projects that showcase innovation, creativity, and results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <motion.div
                    className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="mr-2 font-semibold">View Project</span>
                    <ExternalLink size={20} />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ rotate: 45, scale: 1.1 }}
              >
                <ExternalLink className="text-[#0f0f10]" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-[#F7FF38] text-black rounded-full font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
