import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const resumeUrl = `${import.meta.env.BASE_URL}Hana_El_Omari_Resume.pdf`;

const Home = () => (
  <section className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] py-12 px-4 md:px-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">

    {/* Background shapes */}
    <motion.div
      className="absolute w-48 h-48 rounded-full bg-yellow-200 opacity-40 top-10 left-10"
      animate={{ y: [0, 20, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-32 h-32 rounded-3xl bg-yellow-300 opacity-30 bottom-20 right-20"
      animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-24 h-24 rounded-full bg-yellow-400 opacity-20 top-1/2 left-1/3"
      animate={{ y: [0, 10, 0], x: [0, -10, 0], rotate: [0, 30, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
    />

    {/* Left: Text */}
    <motion.div
      className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 z-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Hi!<br />
        I am <span className="text-yellow-500">Hana El Omari</span>
      </motion.h1>
      <motion.h2 
        className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Software Engineer / Backend Specialist
      </motion.h2>
      <motion.p 
        className="text-gray-600 dark:text-gray-400 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I build scalable backend services, robust APIs, and smart integrations. Let's create something amazing together!
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg">
          Hire Me
        </a>
        <a href={resumeUrl} download="Hana_El_Omari_Resume.pdf" className="inline-block bg-white dark:bg-gray-900 border border-yellow-500 text-yellow-600 dark:text-yellow-400 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg hover:bg-yellow-50 dark:hover:bg-gray-800">
          Download Resume
        </a>
      </motion.div>
    </motion.div>

    {/* Right: Photo with accent */}
    <motion.div
      className="flex-1 flex justify-center items-center mb-10 md:mb-0 relative w-full md:w-auto z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.div
        className="absolute w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-3xl rotate-12 -z-10 top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:top-0 md:-right-8 opacity-80"
        animate={{ rotate: [12, -12, 12] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-white shadow-2xl border-8 border-white dark:border-gray-900"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        HE
      </motion.div>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div
      className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center text-gray-600 dark:text-gray-400 cursor-pointer"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-xs md:text-sm mb-1 md:mb-2 font-medium">Scroll Down</span>
        <div className="w-4 h-7 md:w-6 md:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-0.5 md:w-1 h-2 md:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1 md:mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
        <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-2 text-yellow-500" />
      </motion.div>
    </motion.div>
  </section>
);

export default Home;
