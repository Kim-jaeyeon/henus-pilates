function parseHex(h: string): [number, number, number] {
  const clean = h.replace('#', '');
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function toHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');
}

export function mixHex(a: string, b: string, t: number): string {
  const pa = parseHex(a), pb = parseHex(b);
  return toHex(
    Math.round(pa[0] + (pb[0] - pa[0]) * t),
    Math.round(pa[1] + (pb[1] - pa[1]) * t),
    Math.round(pa[2] + (pb[2] - pa[2]) * t),
  );
}

export function derivePrimaryTokens(hex: string) {
  return {
    '--primary':               hex,
    '--primary-soft':          mixHex(hex, '#ffffff', 0.35),
    '--primary-container':     mixHex(hex, '#ffffff', 0.78),
    '--on-primary':            mixHex(hex, '#ffffff', 0.9),
    '--on-primary-container':  mixHex(hex, '#000000', 0.3),
    '--secondary':             mixHex(hex, '#a6894f', 0.5),
  };
}
