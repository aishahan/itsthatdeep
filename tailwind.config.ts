import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#ED1717",
        "accent-2": "#FF8C8D",
        "background": "#FFFAEC",
        success: "#0070f3",
        cyan: "#79FFE1",
        summer: {
          "accent-1": "#ED1717",
          "accent-2": "#FF8C8D",
          "background": "#FFFAEC",
        },
        autumn: {
          "accent-1": "#43766C",
          "accent-2": "#76453B",
          "background": "#F8FAE5",
        },
        winter: {
          "accent-1": "#3559E0",
          "accent-2": "#595959",
          "background": "#EEF5FF",
        },
        spring: {
          "accent-1": "#BC7AF9",
          "accent-2": "#7AA874",
          "background": "#FFFAFA",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
