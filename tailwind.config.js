/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E5EFE8",
        primary: "#4C7A5A",
        forest: "#2F5640",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};
