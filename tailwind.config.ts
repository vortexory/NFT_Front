import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "text-darken-1": "var(--text-darken-1)",
        "text-darken-2": "var(--text-darken-2)",
        "text-darken-3": "var(--text-darken-3)",
        "text-base": "var(--text-base)",
        "divider-grey": "var(--divider-grey)",
        "primary-brown": "var(--primary-brown)",
        "hover-grey": "var(--hover-grey)",
        "hover-brown": "var(--hover-brown)"
      },
      fontSize: {
        50: '50px',
        64: '64px'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        15: '3.75rem', // 60px
        18: '4.5rem', // 72px
        25: '6.25rem', // 100px
      },
      backgroundImage: {
        'gradient-input': 'linear-gradient(90deg, #CC00FF 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
