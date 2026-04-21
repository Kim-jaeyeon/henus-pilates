import type { Tone } from '../types/config';

type TokenMap = Record<string, string>;

export const toneTokens: Record<Tone, TokenMap> = {
  cream: {
    '--surface':         '#fbf9f6',
    '--surface-low':     '#f5f3f0',
    '--surface-mid':     '#efeeea',
    '--surface-high':    '#e3e3de',
    '--surface-lowest':  '#ffffff',
    '--on-surface':      '#313330',
    '--on-surface-var':  '#6b6d68',
    '--outline':         '#b2b2ae',
  },
  mono: {
    '--surface':         '#fafafa',
    '--surface-low':     '#f2f2f1',
    '--surface-mid':     '#e8e8e6',
    '--surface-high':    '#d8d8d6',
    '--surface-lowest':  '#ffffff',
    '--on-surface':      '#1c1c1b',
    '--on-surface-var':  '#6a6a68',
    '--outline':         '#b0b0ae',
  },
  warm: {
    '--surface':         '#fbf6ef',
    '--surface-low':     '#f3ebde',
    '--surface-mid':     '#ebdfcb',
    '--surface-high':    '#ddcfb3',
    '--surface-lowest':  '#fff8f0',
    '--on-surface':      '#3a2e22',
    '--on-surface-var':  '#7a6b57',
    '--outline':         '#c0aa8e',
  },
};
