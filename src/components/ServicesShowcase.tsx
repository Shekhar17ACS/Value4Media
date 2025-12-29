import { motion } from 'framer-motion';
import { useState } from 'react';
import { Video, Tv, TrendingUp, Film, User, Users } from 'lucide-react';

const serviceCategories = [
  { id: 'ugc', label: 'UGC Video', icon: Video },
  { id: 'tvc', label: 'TVC/DVC', icon: Tv },
  { id: 'smm', label: 'SMM', icon: TrendingUp },
  { id: 'video', label: 'Video Production', icon: Film },
  { id: 'branding', label: 'Personal Branding', icon: User },
  { id: 'influencer', label: 'Influencer Marketing', icon: Users },
];

const videoShowcases = {
  ugc: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/3989821/pexels-photo-3989821.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  tvc: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/3394237/pexels-photo-3394237.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  smm: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  video: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/3062432/pexels-photo-3062432.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  branding: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
  influencer: [
    { id: 1, thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, thumbnail: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, thumbnail: 'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, thumbnail: 'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ],
};

export default function ServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('ugc');

  return (
    <section className="relative min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black text-[#F7FF38] mb-8 tracking-tight">
            OUR SERVICES
          </h2>
        </motion.div>

        <motion.div
          className="bg-[#1a1a1a] rounded-3xl p-4 mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex gap-3 min-w-max">
            {serviceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#F7FF38] text-black'
                    : 'bg-white text-black hover:bg-[#F7FF38]'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={18} />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {videoShowcases[activeCategory as keyof typeof videoShowcases].map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer bg-[#1a1a1a]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <img
                src={video.thumbnail}
                alt={`${activeCategory} video ${video.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              <motion.div
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-full"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <motion.div
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-[#F7FF38] flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="p-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#F7FF38] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
