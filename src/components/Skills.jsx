const skills = [
  {
    category: 'Programming Languages',
    icon: '👨‍💻',
    items: [
      'Java',
      'JavaScript / TypeScript',
      'PHP (Laravel)',
      'Python',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    items: [
      'Spring Boot',
      'Spring Security',
      'Spring Cloud',
      'Laravel',
      'React.js',
      'Vue.js',
      'flutter',
    ],
  },
  {
    category: 'AI & Machine Learning Tools',
    icon: '🤖',
    items: [
      'Python ML Libraries: scikit-learn, pandas, NumPy, Matplotlib',
      'AI APIs: OpenAI, Hugging Face, Stability AI',
      'Prompt Engineering for integrating LLMs into apps',
    ],
  },
  {
    category: 'Databases',
    icon: '🗃️',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL Server',
    ],
  },
  {
    category: 'Microservices & Messaging',
    icon: '📦',
    items: [
      'RESTful APIs',
      'Kafka',
      'RabbitMQ',
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    items: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'GitLab CI/CD',
    ],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    items: [
      'JUnit',
      'Mockito',
      'Testcontainers',
      'Postman',
      'Swagger (OpenAPI)',
    ],
  },
  {
    category: 'E-commerce & APIs',
    icon: '🛍️',
    items: [
      'Shopify API',
      'Payment Integration (Stripe, PayPal)',
      'API Security (JWT, OAuth2)',
    ],
  },
];

const Skills = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {skills.map((group, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xl font-semibold text-yellow-500">
            <span>{group.icon}</span>
            <span className="text-gray-800 dark:text-gray-100">{group.category}</span>
          </div>
          <ul className="list-disc list-inside ml-2 text-gray-700 dark:text-gray-200">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
