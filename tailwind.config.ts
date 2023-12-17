import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'cbusImage':"url('/Users/ryantiller/Documents/chase-inspector/inspector-chase/public/columbusImage.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
