import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sara Ali Khan',
    role: 'CEO, TechStart Inc.',
    content: 'Working with this agency transformed our brand completely. Their creative vision and execution are unmatched. We saw a 300% increase in engagement within the first month.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 2,
    name: 'Wakefit Team',
    role: 'Founder, Urban Lifestyle',
    content: 'The team\'s ability to understand our vision and bring it to life was incredible. Every detail was perfect, and the results speak for themselves. Highly recommended!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 3,
    name: 'Atul Gupta',
    role: 'Marketing Director, FreshBrand',
    content: 'Absolutely phenomenal work! They didn\'t just deliver a project; they delivered a complete brand experience. Our customers love the new direction.',
    image: 'https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 4,
    name: 'Dr. Nagarjuna',
    role: 'CTO, Innovation Labs',
    content: 'Exceptional creativity and technical expertise. They took our complex requirements and turned them into a seamless user experience that exceeded all expectations.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 5,
    name: 'Jannat Kaur',
    role: 'Brand Manager, Style Co.',
    content: 'Their attention to detail and commitment to quality is outstanding. Every interaction felt personalized and they truly understood our brand identity.',
    image: 'https://images.pexels.com/photos/3756983/pexels-photo-3756983.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 6,
    name: 'Ramesh Iyer',
    role: 'VP Marketing, Global Retail',
    content: 'A game-changing partnership. Their strategic approach and creative execution helped us reach new markets and connect with audiences like never before.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 7,
    name: 'Amand Singh',
    role: 'Founder, Creative Studio',
    content: 'Working with them was an absolute pleasure. They brought fresh ideas, executed flawlessly, and delivered results that far surpassed our expectations.',
    image: 'https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 8,
    name: 'Jagdish Mehta',
    role: 'Director, Tech Ventures',
    content: 'Their innovative approach and dedication to excellence made all the difference. They turned our vision into reality with precision and creativity.',
    image: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 9,
    name: 'Leela Sharma',
    role: 'CEO, Digital Dreams',
    content: 'The level of professionalism and creativity is unmatched. They delivered beyond our wildest expectations and continue to be our go-to partner.',
    image: 'https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
  {
    id: 10,
    name: 'Karan Johar',
    role: 'Product Manager, NextGen',
    content: 'From concept to execution, everything was flawless. Their ability to understand and translate our needs into beautiful designs is remarkable.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0f0f10] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#F7FF38] rounded-full blur-[120px] md:blur-[150px] opacity-10"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#FFD700] rounded-full blur-[120px] md:blur-[150px] opacity-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#F7FF38] text-xs md:text-sm uppercase tracking-widest font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-7xl font-bold text-white mt-4 mb-4 md:mb-6 leading-tight">
            What Our Clients
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#F7FF38]">
              Say About Us
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what our amazing clients have to say
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-8 scrollable-testimonials cursor-grab active:cursor-grabbing"
            data-scrollable="horizontal"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative bg-[#1a1a1f] rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden flex-shrink-0 w-[320px] md:w-[380px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#F7FF38] opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <motion.div
                  className="absolute -top-2 -left-2 text-[#F7FF38] opacity-20"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote size={48} className="md:w-16 md:h-16" />
                </motion.div>

                <div className="flex items-center mb-4 md:mb-6 relative">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#F7FF38] flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-white font-bold text-base md:text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                      <Star
                        className="text-[#F7FF38] fill-[#F7FF38] w-4 h-4 md:w-5 md:h-5"
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  "{testimonial.content}"
                </p>
              </div>

              <motion.div
                className="absolute -bottom-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-[#F7FF38] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              />
            </motion.div>
          ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-6 md:px-8 py-3 md:py-4 bg-[#F7FF38] text-black rounded-full font-bold text-sm md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
