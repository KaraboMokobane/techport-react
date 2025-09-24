import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Tech Device Sales",
      description: "Affordable tech devices through our partnerships, ensuring quality at the best prices.",
      icon: "🛒"
    },
    {
      title: "Tech Support",
      description: "Reliable troubleshooting, maintenance, and assistance for all your tech-related issues.",
      icon: "🔧"
    },
    {
      title: "Device Repair",
      description: "Fixing, upgrading, and maintaining devices to extend their lifespan and efficiency.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive IT solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;