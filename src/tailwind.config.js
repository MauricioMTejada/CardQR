/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      colors: {
        "violeta-claro": "#AB90E5",
        "violeta": "#5833A7",
        "violeta-azulado": "#5F16F7",
        "violeta-semiclaro": "#B18DF5",
        "blanco": "#FDFEF8",
        "azul-oscuro": "#243e63",
        "violeta-timbring": "#6415ff",
        "purpura-intenso": "#5011cc",
        "chat-1": "#F1E4FF",
        "chat-2": "#E6FFFD",
        "registrate": "#8C30F5",
        "gris": "#F4F5F7",
        "paso-1": "#8C30F5",
        "paso-2": "#F1E4FF",
        "violetadash": "#453c5c"
      },
    },
  },
  plugins: [],
};