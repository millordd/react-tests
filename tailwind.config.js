/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      fontFamily: 'fontAlsHauss',
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
        },
      },
      spacing: {
        topbar: '52px',
        navbar: '60px',
      },
      colors: {
        primary: 'var(--primary)',
        system: {
          error: '#DF2638',
          notification: '#EE8042',
          note: 'rgba(255, 181, 0, 0.12)',
          'icon-color': '#F7F8F9',
          'error-pale': 'rgba(223, 38, 56, 0.16)',
          former: '#FFFFFF',
          'search-bar-bg': 'rgba(170, 170, 177, 0.16)',
          black: '#222222',
          overlay: 'rgba(0, 0, 0, 0.5)',
          grey: '#7a8189',
          'grey-50': '#9BA1A7',
        },
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        html: {
          fontFamily: 'fontAlsHauss',
        },
      });
    },
  ],
};
