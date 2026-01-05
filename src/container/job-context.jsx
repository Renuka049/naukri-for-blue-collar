import React, { createContext, useState, useEffect, useMemo } from 'react'
import jobsData from '../jobdata/jobs-data';

export const JobContext = createContext()

function safeParse(json, fallback) {
  try {
    return JSON.parse(json)
  } catch (e) {
    return fallback
  }
}

function JobProvider({ children }) {

  const [jobs] = useState(jobsData)
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState('en')
  const [selectedJob, setSelectedJob] = useState(null)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem('applications')
      if (saved) setApplications(safeParse(saved, []))
    } catch (e) {
      setApplications([])
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('applications', JSON.stringify(applications))
    } catch (e) {
      // ignore storage errors
    }
  }, [applications])

  function apply(jobId, phone) {
    const job = jobs.find((j) => j.id === jobId)
    if (!job) return false
    // prevent duplicate same-phone application for same job
    setApplications((s) => {
      const exists = s.some((a) => a.jobId === jobId && a.phone === phone)
      if (exists) return s
      return [...s, { jobId, phone, appliedAt: Date.now() }]
    })
    return true
  }

  const value = useMemo(() => ({ jobs, query, setQuery, language, setLanguage, selectedJob, setSelectedJob, applications, apply }), [jobs, query, language, selectedJob, applications])

  return (
    <JobContext.Provider value={value}>{children}</JobContext.Provider>
  )

}

export default JobProvider;
export { JobProvider };