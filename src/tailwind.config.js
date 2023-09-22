import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()]
}

