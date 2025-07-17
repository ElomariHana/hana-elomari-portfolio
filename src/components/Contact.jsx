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
  <section className="flex flex-col items-center justify-center min-h-[60vh] py-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Contact Me</h2>
    <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl">
      {/* Contact Info */}
      <div className="flex-1 space-y-6">
        {contactInfo.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors"
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </div>
      {/* Contact Form */}
      <form className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition-colors">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
