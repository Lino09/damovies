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
        dacolors:{
          cyan : '#3AE3C3',
          blue: '#468DD8',
          purple: '#5141EA',
          bgc: '#03067B'
        }
      }
    },
  },
  plugins: [],
};
export default config;
