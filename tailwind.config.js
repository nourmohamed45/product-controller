/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // Title & Subtitle Color
        titleColor: "#f3f4f6",
        subtitleColor: "#9ca3af",
        
        // product & Modal Background Color 
        prodModalBg: "#1f2937",
        // Primary Button Colors (Indigo-based)
        primaryButton: "#4f46e5", // Base indigo
        primaryBoldButton: "#4338ca", // Darker indigo for bold/hover
        primaryShadowButton: "#6366f1", // Lighter indigo for shadows/accents

        // Secondary Button Colors (Red-based)
        secondaryButton: "#ef4444", // Base red
        secondaryBoldButton: "#dc2626", // Darker red for bold/hover
        secondaryShadowButton: "#f87171", // Lighter red for shadows/accents
      },
    },
  },
  plugins: [],
};
