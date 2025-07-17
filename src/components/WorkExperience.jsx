const workData = [
  {
    company: 'Freelance Developer',
    role: 'Full Stack / Backend Projects',
    location: 'Remote',
    dates: 'Jan 2020 – Present',
    responsibilities: [
      'Delivered end-to-end solutions for clients using Laravel, Spring Boot, React.js, Vue.js, and Flutter.',
      'Integrated AI-powered APIs (e.g., OpenAI, Vision APIs) to build intelligent features such as chatbots, recommendation engines, and image analysis tools.',
      'Built RESTful APIs, admin dashboards, and full-stack web applications tailored to client specifications.',
      'Migrated legacy systems to modern tech stacks (e.g., Laravel to Spring Boot, or jQuery to React).',
      'Set up automated deployment pipelines using Docker and GitHub Actions for client projects.',
      'Provided ongoing maintenance and performance optimization.',
    ],
    technologies: 'Laravel, Spring Boot, React.js, Vue.js, Flutter, MySQL, PostgreSQL, AI APIs, Docker, GitHub Actions',
  },
  {
    company: 'Le Ventures',
    role: 'Back End Engineer',
    location: 'Remote (California, United States)',
    dates: 'Dec 2022 – Dec 2024 · 2 yrs 1 mo',
    responsibilities: [
      'Built robust backend services with a focus on API design, security, and integration with front-end frameworks like Vue.js and React.js.',
      'Designed and implemented microservices architecture to enhance scalability and modularity.',
      'Developed complex integrations with Shopify and other e-commerce platforms for real-time data sync and automation.',
      'Led and participated in code reviews, ensuring clean, maintainable, and production-ready code across the team.',
      'Applied Agile methodologies including daily standups, sprint planning, and estimation to deliver projects on time.',
      'Collaborated with frontend and DevOps teams to ensure seamless deployments and CI/CD processes.',
    ],
    technologies: 'Laravel, Vue.js, Shopify API, PostgreSQL, Docker, Git, React.js',
  },
  {
    company: 'Tecizeverything, Inc.',
    role: 'Software Engineer',
    location: 'Remote (United Kingdom)',
    dates: 'Apr 2021 – May 2022 · 1 yr 2 mos',
    responsibilities: [
      'Built cross-platform mobile applications using Flutter, integrating APIs and ensuring smooth UX across Android/iOS.',
      'Contributed to the MERN stack development for web platforms, including backend and frontend functionalities.',
      'Maintained high code quality and collaborated remotely with designers and product managers.',
    ],
    technologies: 'Flutter, MongoDB, Express.js, React.js, Node.js, PostgreSQL',
  },
];

const WorkExperience = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Work Experience</h2>
    <div className="w-full max-w-2xl">
      <ol className="relative border-l-4 border-yellow-400">
        {workData.map((item, idx) => (
          <li key={idx} className="mb-12 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              <span className="text-white text-lg">💼</span>
            </span>
            <div className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.company}</div>
                <div className="text-sm text-gray-500">{item.location}</div>
              </div>
              <div className="text-yellow-500 font-semibold mb-1">{item.role}</div>
              <div className="text-sm text-gray-500 mb-2">{item.dates}</div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-2">
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className="text-xs text-gray-400">Technologies: {item.technologies}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkExperience;
