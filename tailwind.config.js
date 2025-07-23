/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Custom animations
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      },
      
      // Custom spacing if you want to extend beyond default
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
      },
      
      // Custom border radius
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'sm': '4px',
      },
      
      // Custom shadows
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      
      // Custom transforms
      transformOrigin: {
        'top': 'top',
      },
    },
  },
  plugins: [
    // Optional: Add forms plugin for better form styling
    require('@tailwindcss/forms'),
  ],
  
  // Safelist specific classes that might be dynamically generated
  safelist: [
    'animate-pulse',
    'animate-bounce',
    'transform',
    'rotate-12',
    'rotate-45',
    '-rotate-45',
    '-rotate-12',
    'translate-x-1',
    'translate-y-full',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'scale-105',
    'hover:scale-105',
    'group-hover:translate-x-1',
  ]
}