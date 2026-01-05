import React, { Fragment, useContext, useEffect, useState } from 'react'
import { JobContext } from './job-context'
import JobCard from './job-card'

const ITEMS_PER_PAGE = 10

function JobList() {
  
  const { jobs, query, language } = useContext(JobContext)
  const [page, setPage] = useState(1)

  const q = query.trim().toLowerCase()
  const filtered = jobs.filter((j) => {
    if (!q) return true
    return (
      j.title.toLowerCase().includes(q) ||
      (j.title_hi && j.title_hi.toLowerCase().includes(q)) ||
      j.category.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q)
    )
  })

  useEffect(() => {
    setPage(1)
  }, [q])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE))
  const start = (page - 1) * ITEMS_PER_PAGE
  const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE)

  function prev() {
    setPage((p) => Math.max(1, p - 1))
  }

  function next() {
    setPage((p) => Math.min(totalPages, p + 1))
  }

  return (
    <Fragment>
    <section className="job-list">
      {pageItems.map((job) => (
        <JobCard key={job.id} job={job} lang={language} />
      ))}

      <div className="pagination pagination-right">
          <button onClick={prev} disabled={page <= 1} aria-label="Previous page" className="btn-sm">
          Prev
        </button>
        <div className="page-info">
          Page {page} of {totalPages}
        </div>
        <button onClick={next} disabled={page >= totalPages} aria-label="Next page" className="btn-sm">
          Next
        </button>
      </div>
    </section>
    </Fragment>
  )
}
export default JobList;