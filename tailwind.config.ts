import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
export default config;
