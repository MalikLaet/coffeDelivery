import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App } from './app.tsx'
import { CartProvider } from './context/cardContext.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </StrictMode>,
)
