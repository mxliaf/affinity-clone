import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Affinity from './Affinity.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Affinity />
  </StrictMode>,  
)
