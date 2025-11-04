# 🌓 Dark Mode Toggle React

A beautiful page with dark/light mode toggle built with React and Tailwind CSS.

Key Features
localStorage Integration: Saves user theme preference

System Preference Detection: Matches OS dark/light mode setting

Smooth Transitions: CSS transitions for theme switching

Responsive Design: Mobile-first approach with Tailwind CSS

dark-mode-toggle-react/
├── src/
│   ├── components/
│   │   ├── ThemeToggle.jsx    # Theme switch button component
│   │   ├── LoginForm.jsx      # Login form with validation
│   │   └── Layout.jsx         # Page layout wrapper
│   ├── hooks/
│   │   └── useTheme.js        # Custom theme management hook
│   ├── App.jsx                # Main application component
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation

// Example usage of useTheme hook
const { theme, toggleTheme, isDark } = useTheme();


📦 Dependencies
Main Dependencies
react: ^18.2.0

react-dom: ^18.2.0

Development Dependencies:

parcel: ^2.10.3 (Zero-config build tool)

tailwindcss: ^3.3.5 (Utility-first CSS framework)


🙏 Acknowledgments: 

Tailwind CSS for the amazing utility-first CSS framework

React for the component-based architecture

Parcel for zero-config build tooling


Built with ❤️ using React and Tailwind CSS