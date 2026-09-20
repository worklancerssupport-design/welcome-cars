/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          obsidian: "#0B0F19",       // Deepest obsidian black
          slateDark: "#0F172A",      // Rich automotive slate
          carbon: "#1E293B",         // Carbon card background
          carbonHover: "#283548",    // Hover card state
          carbonBorder: "#334155",   // Dark border
          orange: "#FF6B35",         // Dynamic automotive orange accent
          orangeHover: "#E55A27",    // Orange hover state
          orangeLight: "#FFE4D6",    // Soft orange tint
          ice: "#E0F2FE",            // Cooling chill tint
          iceAccent: "#38BDF8",      // Chilled temperature blue
          bgLight: "#F8FAFC",        // Clean titanium light
          bgMuted: "#F1F5F9",        // Secondary light surface
          borderLight: "#E2E8F0",    // Light border
          textDark: "#0F172A",       // High-contrast primary text
          textMuted: "#64748B",      // Secondary muted text
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'clean-sm': '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
        'clean-md': '0 4px 14px -2px rgba(15, 23, 42, 0.07), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'clean-lg': '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
        'orange-glow': '0 4px 24px -2px rgba(255, 107, 53, 0.45)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
