import React from 'react'
import ReactDOM from 'react-dom/client'
import { LandPage } from './pages/Home'
import GlobalStyle from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GlobalStyle />
    <LandPage />

  </React.StrictMode>
)
