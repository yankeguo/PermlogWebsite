import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("@tailwindcss/typography")],
  content: ["docs/content/**/*.md"],
};
