import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'LISA - AI Virtual Try-On Shopify App',
    description:
      'AI-powered Shopify app that lets customers upload a photo and virtually try on clothing, with theme extensions, merchant credits, billing, analytics, and admin settings.',
    image: 'https://img.youtube.com/vi/UN4a8HQ4oI4/hqdefault.jpg',
    tech: 'Laravel 11, React, Vite, Shopify APIs, Liquid, AWS S3, Fal.ai, MySQL',
    live: 'https://www.youtube.com/watch?v=UN4a8HQ4oI4&t=108s',
    code: '#',
    privateCode: true,
  },
  {
    title: 'Portfolio Template',
    description:
      'Responsive personal portfolio template with a modern UI, project showcase, smooth animations, and reusable sections for developers and freelancers.',
    image: 'https://img.youtube.com/vi/GPYVi0kSgRo/hqdefault.jpg',
    tech: 'React, Tailwind CSS, Vite, Framer Motion',
    live: 'https://www.youtube.com/watch?v=GPYVi0kSgRo',
    code: 'https://github.com/ElomariHana/portfolio-template',
  },
  {
    title: 'Real-Time Delivery Tracking API',
    description:
      'Real-time GPS delivery tracking system with driver location updates every 5 seconds through WebSockets. Includes live customer tracking, Laravel Broadcasting, PostGIS distance calculations, ETA prediction, queue jobs, push notifications, and delivery event processing.',
    image: 'https://placehold.co/400x250?text=Delivery+Tracking+API',
    tech: 'Laravel, PostgreSQL + PostGIS, WebSockets, Redis, Docker, Queue Jobs',
    live: '#',
    code: '#',
    comingSoon: true,
  },
  {
    title: 'Multi-Tenant SaaS API Platform',
    description:
      'Complete multi-tenant SaaS backend where multiple companies share infrastructure with fully isolated data. Includes RBAC, plan-based API rate limiting, Laravel Horizon queue monitoring, Redis caching, RESTful APIs, tenant onboarding, per-tenant configuration, and usage analytics.',
    image: 'https://placehold.co/400x250?text=SaaS+API+Platform',
    tech: 'Laravel, Laravel Horizon, Redis, PostgreSQL, RBAC, Docker, Next.js',
    live: '#',
    code: '#',
    comingSoon: true,
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

const Portfolio = () => {
  const [privateProject, setPrivateProject] = useState(null);
  const [comingSoonProject, setComingSoonProject] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-8 md:py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 md:mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 group"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4 md:p-6 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-yellow-400 mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 mb-4 flex-1">{project.description}</p>
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 text-xs font-semibold px-2 md:px-3 py-1 rounded-full self-start mb-4">{project.tech}</span>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-auto">
                {project.comingSoon ? (
                  <button
                    type="button"
                    onClick={() => setComingSoonProject(project)}
                    className="px-3 md:px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
                  >
                    Demo Video
                  </button>
                ) : (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center">Demo Video</a>
                )}
                {project.privateCode ? (
                  <button
                    type="button"
                    onClick={() => setPrivateProject(project)}
                    className="px-3 md:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
                  >
                    GitHub Code
                  </button>
                ) : project.comingSoon ? (
                  <button
                    type="button"
                    onClick={() => setComingSoonProject(project)}
                    className="px-3 md:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
                  >
                    GitHub Code
                  </button>
                ) : (
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-3 md:px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center">GitHub Code</a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {privateProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="private-project-title"
          onClick={() => setPrivateProject(null)}
        >
          <motion.div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="private-project-title" className="text-xl font-bold text-gray-900 dark:text-yellow-400">
              Private Repository
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-200">
              The GitHub repository for {privateProject.title} is private because it contains client and production app code. You can watch the demo video to review the project workflow and features.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={privateProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
              >
                Watch Demo
              </a>
              <button
                type="button"
                onClick={() => setPrivateProject(null)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {comingSoonProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          onClick={() => setComingSoonProject(null)}
        >
          <motion.div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="coming-soon-title" className="text-xl font-bold text-gray-900 dark:text-yellow-400">
              Coming Soon
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-200">
              The demo video and GitHub repository for {comingSoonProject.title} are not published yet. This project is currently shown as a portfolio case study.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setComingSoonProject(null)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-lg font-semibold shadow transition-colors text-sm md:text-base text-center"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
