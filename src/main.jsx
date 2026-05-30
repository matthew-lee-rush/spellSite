import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app/App.jsx";
import "./App.css";
import bgImage from './assets/Main flat.png';

document.body.style.backgroundImage = `radial-gradient(circle at top, rgba(175, 156, 203, 0.12), transparent 22%), radial-gradient(circle at 20% 18%, rgba(224, 220, 245, 0.1), transparent 12%), linear-gradient(180deg, #f5f5dc 0%, #f5dddc 100%), url("${bgImage}")`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center 12%';
document.body.style.backgroundRepeat = 'no-repeat';

document.body.style.backgroundBlendMode = 'normal, normal, normal, normal';

document.body.style.margin = '0';

document.body.style.minHeight = '100vh';

document.body.style.color = '#7d5ba0';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
