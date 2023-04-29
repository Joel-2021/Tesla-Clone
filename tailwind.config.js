/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'm3': "url('../assets/M3-Homepage-D.jpg')",
        'mS': "url('../assets/ms-main-hero-desktop.jpg')",
        'mX': "url('../assets/MX-Hero-Desktop.jpg')",
        'mY': "url('../assets/model-y_R1@2.jpg')",
        'sP': "url('../assets/solar-panel-desktop.jpg')",
        'sR': "url('../assets/Homepage-SolarRoof-Desktop-Global.webp')",
        'mm3': "url('../assets/Homepage-Model-3-LHD-Mobile.jpg')",
        'mmX': "url('../assets/Homepage-Model-X-Mobile-LHD.jpg')",
        'mmY': "url('../assets/Homepage-ModelY-LHD-Mobile.jpg')",
        'mmS': "url('../assets/Model-S-homepage-mobile.jpg')",
        'msP': "url('../assets/Homepage-SolarPanels-Mobile.webp')",
      },
    },
  },
  plugins: [],
};
