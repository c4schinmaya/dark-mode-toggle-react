import React, { useState, useEffect } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on start
  useEffect(() => {
    // const saved = localStorage.getItem('theme');
    if ('dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      // Switch to light mode
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-300">
      
      {/* Theme Toggle Button - Fixed at top right */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg"
      >
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Main Content */}
      <div className="p-8">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Welcome
        </h1>

        {/* Content Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Card 1 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              About This Demo
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is a simple dark mode toggle using Tailwind CSS. Click the button in the top-right corner to switch between light and dark themes!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
              How It Works
            </h2>
            <p className="text-blue-700 dark:text-blue-300">
              Tailwind uses the 'dark' class on the html element. When present, all 'dark:' prefixed styles are applied.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-xl shadow-md transition-all duration-300">
            <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4">
              Current Theme
            </h2>
            <p className="text-green-700 dark:text-green-300 text-lg font-medium">
              You are in <span className="underline">{isDark ? 'Dark' : 'Light'}</span> mode
            </p>
          </div>

          {/* Sample UI Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            
            {/* Button */}
            <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg transition-colors duration-300">
              Sample Button
            </button>

            {/* Input */}
            <input 
              type="text" 
              placeholder="Type something..."
              className="border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />

            {/* Card */}
            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
              <p className="text-yellow-800 dark:text-yellow-200">
                Notice how all colors change with the theme!
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;