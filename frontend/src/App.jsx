import { useEffect, useRef, useState } from 'react'
import './App.css'

const repositoryItems = [
  'mini-github',
  'design-system',
  'frontend-playground',
]

const profileItems = [
  { label: 'Profile' },
  { label: 'Repositories' },
  { label: 'Settings', divider: true },
  { label: 'Appearance' },
  { label: 'Sign out', divider: true },
]

function MenuDropdown({ trigger, items = [], empty = false, align = 'right' }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="menu-dropdown" ref={menuRef}>
      {trigger({ isOpen, onToggle: () => setIsOpen((open) => !open) })}

      {isOpen && (
        <div className={`menu-panel ${align === 'right' ? 'menu-panel--right' : ''}`}>
          {empty ? (
            <div className="menu-panel__empty" aria-label="No actions available" />
          ) : (
            <ul className="menu-list">
              {items.map((item, index) => {
                if (item === 'divider' || item?.divider) {
                  return <li key={`divider-${index}`} className="menu-divider" />
                }

                const label = typeof item === 'string' ? item : item.label

                return (
                  <li key={label || `menu-item-${index}`} className="menu-item-wrap">
                    <button type="button" className="menu-item-button">
                      {label}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

function CreateRepositoryMenu({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="create-menu" ref={menuRef}>
      <button type="button" className="create-primary" onClick={onNavigate}>
        <span className="create-plus" aria-hidden="true">
          +
        </span>
        <span>Create new repository</span>
      </button>

      <button
        type="button"
        className="create-toggle"
        aria-label="Toggle create menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">▾</span>
      </button>

      {isOpen && (
        <div className="menu-panel menu-panel--right create-panel">
          <div className="menu-panel__empty" aria-label="No actions available" />
        </div>
      )}
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="dashboard-card__header">
          <span className="eyebrow">Overview</span>
        </div>
        <h1>MiniGitHub</h1>
        <p>Repository and project views are ready for extension.</p>
      </div>
    </div>
  )
}

function CreateRepositoryPage({ onBack }) {
  return (
    <div className="create-page">
      <div className="create-page__header">
        <button type="button" className="back-link" onClick={onBack}>
          ← Back to dashboard
        </button>
      </div>

      <div className="create-page__card">
        <h2>Create a new repository</h2>
        <p>Frontend route ready for repository setup and future form controls.</p>
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar__left">
          <button type="button" className="brand-button" aria-label="GitHub home">
            <span className="brand-mark">GH</span>
          </button>

          <button type="button" className="dashboard-button" onClick={() => setCurrentPage('dashboard')}>
            Dashboard
          </button>
        </div>

        <div className="topbar__center">
          <label className="search-field" aria-label="Search">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>
            <input type="text" placeholder="Search or jump to..." />
          </label>
        </div>

        <div className="topbar__right">
          <MenuDropdown
            align="left"
            items={repositoryItems.map((repo) => ({ label: repo }))}
            trigger={({ isOpen, onToggle }) => (
              <button
                type="button"
                className={`repo-menu-trigger ${isOpen ? 'is-open' : ''}`}
                onClick={onToggle}
                aria-expanded={isOpen}
              >
                <span>All repositories</span>
                <span className="caret" aria-hidden="true">
                  ▾
                </span>
              </button>
            )}
          />

          <CreateRepositoryMenu onNavigate={() => setCurrentPage('create')} />

          <MenuDropdown
            align="right"
            items={profileItems}
            trigger={({ isOpen, onToggle }) => (
              <button
                type="button"
                className={`user-menu-trigger ${isOpen ? 'is-open' : ''}`}
                onClick={onToggle}
                aria-expanded={isOpen}
              >
                <span className="user-avatar" aria-hidden="true">
                  TY
                </span>
                <span className="user-name">tanay</span>
                <span className="caret" aria-hidden="true">
                  ▾
                </span>
              </button>
            )}
          />
        </div>
      </header>

      <main className="main-panel">
        {currentPage === 'dashboard' ? <DashboardPage /> : <CreateRepositoryPage onBack={() => setCurrentPage('dashboard')} />}
      </main>
    </div>
  )
}

export default App
