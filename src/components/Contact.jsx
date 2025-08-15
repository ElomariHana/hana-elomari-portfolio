import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const contactInfo = [
  {
    icon: <EnvelopeIcon className="w-6 h-6 text-yellow-500" />,
    label: 'hanaelomari9@gmail.com',
    href: 'mailto:hanaelomari9@gmail.com',
  },
  {
    icon: <PhoneIcon className="w-6 h-6 text-yellow-500" />,
    label: '+212676222366',
    href: 'tel:+212676222366',
  },
  {
    icon: <FaLinkedin className="w-6 h-6 text-yellow-500" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hana-el-omari-b57517185',
  },
  {
    icon: <FaGithub className="w-6 h-6 text-yellow-500" />,
    label: 'GitHub',
    href: 'https://github.com/ElomariHana',
  },
];

const Contact = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-8 md:py-12 px-4 md:px-8">
    <div className="flex items-center gap-4 mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">Contact Me</h2>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full max-w-4xl">
      {/* Contact Info */}
      <div className="flex-1 space-y-4 md:space-y-6">
        {contactInfo.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-base md:text-lg text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors"
          >
            {item.icon}
            <span className="break-all">{item.label}</span>
          </a>
        ))}
      </div>
      {/* Contact Form */}
      <form className="flex-1 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md space-y-4 md:space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm md:text-base">Name</label>
          <input type="text" className="w-full px-3 md:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white text-sm md:text-base" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm md:text-base">Email</label>
          <input type="email" className="w-full px-3 md:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white text-sm md:text-base" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm md:text-base">Message</label>
          <textarea className="w-full px-3 md:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white text-sm md:text-base" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm md:text-base">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
