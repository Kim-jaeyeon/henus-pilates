import { useEffect } from 'react';
import type { StudioConfig } from '../types/config';
import { derivePrimaryTokens } from './colorUtils';
import { toneTokens } from './tones';

interface Props {
  config: StudioConfig;
  children: React.ReactNode;
}

export default function ThemeProvider({ config, children }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    const tokens = {
      '--serif': '"Noto Serif KR","Noto Serif","Nanum Myeongjo","Times New Roman",serif',
      '--sans':  '"Pretendard","Manrope",-apple-system,system-ui,sans-serif',
      ...toneTokens[config.theme.tone],
      ...derivePrimaryTokens(config.theme.primaryColor),
    };
    Object.entries(tokens).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [config.theme]);

  return <>{children}</>;
}
