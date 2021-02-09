module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      navBar: 'var(--nav-bar-color)',
      onNavBar: 'var(--on-nav-bar-color)',
      primary: 'var(--primary-color)',
      primaryVariant: 'var(--primary-color-variant)',
      secondary: 'var(--secondary-color)',
      secondaryVariant: 'var(--secondary-color-variant)',
      background: 'var(--background-color)',
      surface: 'var(--surface-color)',
      error: 'var(--error-color)',
      onPrimary: 'var(--on-primary-color)',
      onSecondary: 'var(--on-secondary-color)',
      onBackground: 'var(--on-background-color)',
      onSurface: 'var(--on-surface-color)',
      onError: 'var(--on-error-color)',
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      // xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'sans': ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    gradientColorStops: false,
  },
  plugins: [],
};
