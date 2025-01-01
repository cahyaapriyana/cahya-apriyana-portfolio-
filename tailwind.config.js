/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: { center: true, padding: "16px" },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        abdiputih: {
          primary: "#14b8a6",
          secondary: "#64748b",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          "base-200": "#eeeff1",
          "base-300": "#48546c",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        sayahitam: {
          primary: "#38bdf8",
          secondary: "#818CF8",
          accent: "#F471B5",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#0CA5E9",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",

          "base-200": "#1E293B",
          "base-300": "#334155",
          "base-content": "#F8FAFC",
        },
      },
    ],
  },
};
