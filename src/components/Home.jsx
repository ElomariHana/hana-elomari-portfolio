const Home = () => (
  <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] py-12 px-4 md:px-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    {/* Left: Text */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
        Hi!<br />
        I am <span className="text-yellow-500">Hana El Omari</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
        Software Engineer / Full Stack Developer
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">
        I build scalable backend services, modern frontend interfaces, and smart integrations. Let's create something amazing together!
      </p>
      <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg mt-2">
        Hire Me
      </a>
    </div>
    {/* Right: Photo with accent */}
    <div className="flex-1 flex justify-center items-center mb-10 md:mb-0 relative w-full md:w-auto">
      {/* Yellow accent shape */}
      <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-3xl rotate-12 -z-10 top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:top-0 md:-right-8 opacity-80"></div>
      {/* Photo placeholder */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-6xl font-bold text-white shadow-2xl border-8 border-white dark:border-gray-900">
        HE
      </div>
    </div>
  </section>
);

export default Home;
