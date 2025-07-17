const educationData = [
  {
    degree: "Master’s Degree",
    institution: "Sidi Mohamed Ben Abdellah University",
    year: "",
  },
  {
    degree: "Bachelor's Degree",
    institution: "Cady Ayyad University",
    year: "",
  },
];

const Education = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Education</h2>
    <div className="w-full max-w-xl">
      <ol className="relative border-l-4 border-yellow-400">
        {educationData.map((item, idx) => (
          <li key={idx} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
            </span>
            <div className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
              {item.year && <span className="text-sm text-gray-500">{item.year}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Education;
