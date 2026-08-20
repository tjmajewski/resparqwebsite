/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        ink: {
          950: "#09090b",
          900: "#0c0c0f",
          850: "#111114",
        },
        brand: {
          300: "#c3aef9",
          400: "#b296f6",
          500: "#9670f2",
          600: "#8253f0",
          700: "#6f3ed5",
        },
      },
    },
  },
  plugins: [],
}
