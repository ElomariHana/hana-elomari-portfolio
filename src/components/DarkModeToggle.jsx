import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const DarkModeToggle = ({ inline }) => {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const button = (
    <button
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:bg-yellow-400 hover:text-white transition-colors"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
    </button>
  );

  if (inline) return button;
  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>{button}</div>
  );
};

export default DarkModeToggle;
