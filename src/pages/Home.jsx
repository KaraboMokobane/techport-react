import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
    </motion.div>
  );
};

export default Home;