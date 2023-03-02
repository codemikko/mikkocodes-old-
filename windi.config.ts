import { defineConfig } from "windicss/helpers"
import defaultTheme from "windicss/defaultTheme"

/* Plugins */
import lineClamp from "windicss/plugin/line-clamp"
import typography from "windicss/plugin/typography"

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Eggzy.xy (Original colors)
        // neutral: {
        //   50: "#fafafa",
        //   100: "#f5f5f5",
        //   200: "#e5e5e5",
        //   300: "#d4d4d4",
        //   400: "#a3a3a3",
        //   500: "#737373",
        //   600: "#525252",
        //   700: "#404040",
        //   800: "#262626",
        //   900: "#171717",

        // Ref: https://windicss.org/utilities/general/colors.html#slate
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  shortcuts: {
    "focus-ring":
      "ring-offset-2 light:(ring-offset-gray-50 ring-gray-300) focus:outline-none focus:ring-1 dark:focus:(ring-offset-neutral-900 ring-neutral-800)",
  },
  plugins: [
    lineClamp,
    typography({
      dark: true,
    }),
  ],
})
