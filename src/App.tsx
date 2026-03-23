import './App.css'
import type { JSX } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="app-container">
        <header className="top-nav" role="banner">
          <div className="nav-container">
            <div className="brand">Help Us Grow</div>
            <nav className="nav-links" aria-label="Main navigation">
              <Link to="/" className = "nav-link">Home</Link>
            </nav>
          </div>
        </header>
        <main className="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
