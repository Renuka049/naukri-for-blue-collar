import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { JobProvider } from './container/job-context'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
)
