import { motion } from 'framer-motion';

const services = [
  {
    category: 'Backend Development',
    icon: '🖥️',
    items: [
      'Java Spring Boot microservices',
      'Laravel APIs and backend logic',
      'RESTful & GraphQL APIs',
      'Database design & optimization',
    ],
  },
  {
    category: 'AI & Automation',
    icon: '🤖',
    items: [
      'Integrating AI APIs (OpenAI, Hugging Face)',
      'Machine Learning model deployment',
      'Automation of business processes',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      'Docker & containerization',
      'CI/CD pipelines (GitHub Actions, Jenkins)',
      'Cloud deployment & monitoring',
    ],
  },
  {
    category: 'E-commerce Solutions',
    icon: '🛍️',
    items: [
      'Shopify & payment gateway integrations',
      'Secure APIs for e-commerce platforms',
    ],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    items: [
      'Unit & integration testing',
      'Postman & Swagger API documentation',
      'Test automation with JUnit & Mockito',
    ],
  },
];

const Services = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
    {/* Background shapes */}
    <motion.div
      className="absolute w-60 h-60 bg-yellow-400 rounded-3xl opacity-20 top-0 left-1/4 rotate-12"
      animate={{ rotate: [12, -12, 12] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-48 h-48 bg-yellow-400 rounded-3xl opacity-20 bottom-0 right-1/3 rotate-45"
      animate={{ rotate: [45, -45, 45] }}
      transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
    />

    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-12 z-10">Services</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl z-10">
      {services.map((group, idx) => (
        <motion.div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-xl font-semibold text-yellow-500">
            <span>{group.icon}</span>
            <span className="text-gray-800 dark:text-gray-100">{group.category}</span>
          </div>
          <ul className="list-disc list-inside ml-2 text-gray-700 dark:text-gray-200">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
