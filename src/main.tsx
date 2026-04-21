import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// ↓ 업체 전환 시 이 줄만 교체
import henusPilates from './configs/henusPilates';
// import jungStudio from './configs/jungStudio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App config={henusPilates} />
  </StrictMode>,
);
