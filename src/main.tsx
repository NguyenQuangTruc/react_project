import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/home/Header.tsx'
import logo from './assets/logo.webp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header ursLogo = {logo} />
  </StrictMode>,
)
