const About = () => (
  <section id="what-i-do" className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">About</h2>
    <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      {/* Photo placeholder */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
          HE
        </div>
      </div>
      {/* Bio */}
      <div className="text-gray-700 dark:text-gray-200 text-lg">
        <p className="mb-4">
          I’m <span className="font-semibold text-yellow-500">Hana El Omari</span>, a passionate Backend Specialist with 3+ years of experience delivering scalable backend services and smart integrations. I focus on <span className="font-semibold">Laravel, Spring Boot</span>, building clean APIs and solving real-world problems efficiently.
        </p>
        <p className="mb-4">
          I’ve contributed to remote teams in e-commerce and AI-powered apps, working with tools like <span className="font-semibold">Docker, PostgreSQL, GitHub Actions, and Shopify APIs</span>. I also freelance, creating robust backend solutions for clients and integrating AI APIs into smart digital products.
        </p>
        <p>
          I thrive in Agile environments, believe in writing clean and testable code, and enjoy learning and applying new technologies that push innovation forward.
        </p>
      </div>
    </div>
  </section>
);

export default About;
