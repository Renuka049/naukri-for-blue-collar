import React, { Fragment, useContext, useState } from 'react'
import { JobContext } from './job-context'
import ApplyModal from './modal'

function JobDetails({ onClose }) {
  const { selectedJob, setSelectedJob, language } = useContext(JobContext)
  const [showApply, setShowApply] = useState(false)

  if (!selectedJob) return null

  const title = language === 'hi' && selectedJob.title_hi ? selectedJob.title_hi : selectedJob.title
  const desc = language === 'hi' && selectedJob.description_hi ? selectedJob.description_hi : selectedJob.description

  function close() {
    setSelectedJob(null)
    onClose && onClose()
  }

  return (
    <Fragment>
      <div className="overlay" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) close() }}>
        <div className="panel">
          <button className="close" onClick={close} aria-label="Close">✕</button>
          <div className="panel-header">
            <div className="panel-title">{title}</div>
            <div className="panel-sub">{selectedJob.employerName} • {selectedJob.location}</div>
          </div>
          <div className="panel-body">
            <div className="desc">{desc}</div>
            <div className="details-row">
              <div><strong>Shift:</strong> {selectedJob.shift}</div>
              <div><strong>Distance:</strong> {selectedJob.distance}</div>
            </div>
          </div>
          <div className="panel-footer">
            <button className="apply" onClick={() => setShowApply(true)}>Apply (Phone)</button>
            <button className="message" onClick={() => alert('Contacting employer...')}>Message</button>
          </div>
        </div>
        {showApply && <ApplyModal job={selectedJob} onClose={() => setShowApply(false)} />}
      </div>
    </Fragment>
  )
}
export default JobDetails;