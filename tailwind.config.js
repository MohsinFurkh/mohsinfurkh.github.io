/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-gray-900;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn {
    @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
  }

  .btn-primary {
    @apply bg-primary text-white hover:bg-primary/90;
  }

  .section-title {
    @apply text-3xl font-bold text-primary mb-6;
  }
}

@layer utilities {
  .bg-primary {
    background-color: #3498db; /* Custom primary color */
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease forwards;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .delay-200 {
    animation-delay: 0.2s;
  }

  .delay-300 {
    animation-delay: 0.3s;
  }

  .delay-400 {
    animation-delay: 0.4s;
  }

  .delay-500 {
    animation-delay: 0.5s;
  }
}
    extend: {
      colors: {
        'primary-dark-blue': '#1B365D',
        'secondary-green': '#2E8B57',
        'accent-orange': '#FF8C42',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
