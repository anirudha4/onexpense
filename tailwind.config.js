/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)'
        },

        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },

        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },

        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },

        modal: {
          DEFAULT: "var(--modal)",
          foreground: "var(--modal-foreground)"
        },

        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      }
    },
  },
  plugins: [],
}