import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import henusPilates from './configs/henusPilates';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App config={henusPilates} />
  </StrictMode>,
);
