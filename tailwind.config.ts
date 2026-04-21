import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:    'var(--primary)',
        'primary-soft': 'var(--primary-soft)',
        'primary-container': 'var(--primary-container)',
        'on-primary': 'var(--on-primary)',
        'on-primary-container': 'var(--on-primary-container)',
        secondary:  'var(--secondary)',
        surface:    'var(--surface)',
        'surface-low': 'var(--surface-low)',
        'surface-mid': 'var(--surface-mid)',
        'surface-high': 'var(--surface-high)',
        'surface-lowest': 'var(--surface-lowest)',
        'on-surface': 'var(--on-surface)',
        'on-surface-var': 'var(--on-surface-var)',
        outline:    'var(--outline)',
      },
      fontFamily: {
        serif: 'var(--serif)',
        sans:  'var(--sans)',
      },
    },
  },
  plugins: [],
} satisfies Config;
