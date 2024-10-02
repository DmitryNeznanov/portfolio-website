import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1560px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "24px",
        md: "24px",
        lg: "50px",
        xl: "114px",
        "2xl": "128px",
        "3xl": "128px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "var(--black)",
          light: "var(--black-light)",
        },
        jade: "var(--jade)",
        ice: "var(--ice)",
        grey: "var(--grey)",
        white: "var(--white)",
        red: "var(--red)",
        blue: {
          DEFAULT: "var(--blue)",
          dark: "var(--blue-dark)",
        },
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        IBMPlexMono: ["var(--font-IBM-plex-mono)"],
      },
    },
  },
  plugins: [],
}
export default config
