import React from 'react'
import JobList from './container/job-list'
import JobDetails from './container/job-details'
import Header from './pages/header'

function App() {
  return (
    <div className="app-root">
      <Header/>
      <main className="app-main">
        <JobList />
        <JobDetails />
      </main>
    </div>
  )
}

export default App
