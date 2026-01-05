import React, { useContext, useState } from 'react'
import { JobContext } from './job-context'

function ApplyModal({ job, onClose }) {
  const { apply, language } = useContext(JobContext)
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(null)

  const L = {
    en: { enter: 'Enter phone number', send: 'Send', success: 'Applied — employer will contact you' },
    hi: { enter: 'फोन नंबर डालें', send: 'भेजें', success: 'आवेदन सफल — नियोक्ता संपर्क करेगा' }
  }[language]

  function submit(e) {
    e.preventDefault()
    if (!phone.match(/^[0-9]{7,15}$/)) {
      setStatus('invalid')
      return
    }
    const ok = apply(job.id, phone)
    if (ok) setStatus('ok')
  }

  return (
    <div className="overlay small" role="dialog" onClick={(e) => {   if (e.target === e.currentTarget) onClose()}}>
      <div className="panel small">
        <button className="close" onClick={onClose}>✕</button>
        <h3 className="panel-title">{job.title}</h3>
        {status === 'ok' ? (
          <div className="success">{L.success}</div>
        ) : (
          <form onSubmit={submit} className="apply-form">
            <input inputMode="numeric" pattern="[0-9]*" placeholder={L.enter} value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}/>
            <button type="submit" className="apply">{L.send}</button>
            {status === 'invalid' && <div className="error">Enter a valid number</div>}
          </form>
        )}
      </div>
    </div>
  )
}
export default ApplyModal;