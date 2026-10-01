import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { accent: "#8b5cf6", accent2: "#22d3ee" } } },
  plugins: [],
};
export default config;
