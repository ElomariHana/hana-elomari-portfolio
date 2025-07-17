import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Used Cars Price Prediction',
    description: 'AI-powered app for predicting used car prices using Python and machine learning.',
    image: 'https://placehold.co/400x250?text=Used+Cars+AI',
    tech: 'Python, AI',
    live: '#',
    code: '#',
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern personal portfolio with React and smooth animations.',
    image: 'https://placehold.co/400x250?text=Portfolio',
    tech: 'React, Animations',
    live: '#',
    code: '#',
  },
  {
    title: 'Tourist Guide App',
    description: 'Mobile app for tourists with real-time info and Firebase backend.',
    image: 'https://placehold.co/400x250?text=Tourist+Guide',
    tech: 'Ionic, Firebase',
    live: '#',
    code: '#',
  },
  {
    title: 'Java Algorithms',
    description: 'A collection of data structures and algorithms in Java, C, and Python.',
    image: 'https://placehold.co/400x250?text=Algorithms',
    tech: 'Java, C, Python',
    live: '#',
    code: '#',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', bounce: 0.2, duration: 0.8 },
  },
};

const Portfolio = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">{project.description}</p>
            <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-xs font-semibold px-3 py-1 rounded-full self-start mb-4">{project.tech}</span>
            <div className="flex gap-3 mt-auto">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow transition-colors">Live Demo</a>
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors">GitHub Code</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Portfolio;
