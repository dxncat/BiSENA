import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TokenProvider } from './context/TokenContext.tsx'
import { Toaster } from "@/components/ui/toaster"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenProvider>
      <App />
      <Toaster />
    </TokenProvider>
  </StrictMode>,
)
