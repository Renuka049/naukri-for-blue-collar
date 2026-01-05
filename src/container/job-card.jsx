import React, { Fragment, useContext } from 'react'
import { JobContext } from './job-context'

function JobCard({ job, lang }) {

  const { setSelectedJob } = useContext(JobContext)

  const title = lang === 'hi' && job.title_hi ? job.title_hi : job.title

  return (
    <Fragment>
      <article className="job-card" onClick={() => setSelectedJob(job)}>
        <div className="job-row">
          <div className={`avatar ${job.verified ? 'avatar--verified' : 'avatar--default'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="currentColor" />
              <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6v1H4v-1z" fill="currentColor" opacity="0.95" />
            </svg>
          </div>
          <div className="job-main">
            <div className="job-title">{title}</div>
            <div className="job-meta">
              <span className="employer">{job.employerName}</span>
              <span className="dot">•</span>
              <span className="distance">{job.distance}</span>
            </div>
          </div>
          <div className="job-cta">
            {job.verified && <span className="badge">✓ Verified</span>}
            <div className="salary">{job.salary}</div>
          </div>
        </div>
      </article>
    </Fragment>
  )
}
export default JobCard;