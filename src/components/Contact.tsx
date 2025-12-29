import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@agency.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India',
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-[#0f0f10] py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7FF38] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
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
          <span className="text-[#F7FF38] text-sm uppercase tracking-widest font-semibold">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Let's Create
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#F7FF38]">
              Something Amazing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to take your brand to the next level? Drop us a message and let's start a conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#F7FF38] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-black" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                    <p className="text-white text-lg font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1a1a1f] flex items-center justify-center text-gray-400 hover:text-black hover:bg-gradient-to-br hover:from-[#FFD700] hover:to-[#F7FF38] transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.charAt(0)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-[#1a1a1f] text-white rounded-xl border border-gray-800 focus:border-[#F7FF38] focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-[#1a1a1f] text-white rounded-xl border border-gray-800 focus:border-[#F7FF38] focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 bg-[#1a1a1f] text-white rounded-xl border border-gray-800 focus:border-[#F7FF38] focus:outline-none transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-6 py-4 bg-[#1a1a1f] text-white rounded-xl border border-gray-800 focus:border-[#00e5ff] focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-[#F7FF38] text-black rounded-xl font-bold text-lg flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
