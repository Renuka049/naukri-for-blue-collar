import React, { useContext } from 'react'
import { JobContext } from '../container/job-context'

const labels = {
  en: { title: 'Nearby Jobs', search: 'Search jobs or skills', lang: 'हिंदी' },
  hi: { title: 'पास के नौकरियाँ', search: 'नौकरी या कौशल खोजें', lang: 'EN' }
}

function Header() {
  const { query, setQuery, language, setLanguage } = useContext(JobContext)

  const L = labels[language]

  return (
    <header className="header">
      <div className="header-left">
        <div className="title">{L.title}</div>
      </div>
      <div className="controls">
        <input aria-label="search" className="search" placeholder={L.search} value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="lang-btn" onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
          {labels[language].lang}
        </button>
      </div>
    </header>
  )
}
export default Header;