import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to TechPort
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative IT solutions for individuals, businesses, and institutions
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;