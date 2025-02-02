import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
      <GlobalStyles />
    </TaskContextProvider>
  </React.StrictMode>
)
