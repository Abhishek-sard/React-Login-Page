import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import LoginSignup from './Components/LoginSignUp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LoginSignup/> */}
  </StrictMode>,
)
