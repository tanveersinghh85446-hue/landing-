import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/Features', label: 'Features' },
    { to: '/Pricing', label: 'Pricing' },
    { to: '/About', label: 'About' },
    { to: '/Contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-950 flex items-center justify-center">
            <span className="text-blue-300 font-bold text-sm tracking-tight">P</span>
          </div>
          <span className="text-xl font-bold text-blue-950 tracking-tight">
            Promptify
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'bg-blue-950 text-white'
                    : 'text-gray-500 hover:text-blue-950 hover:bg-gray-100'
                  }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/Contact"
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-blue-950 text-white hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-blue-200"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-blue-950 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-4 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-950 transition-all"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/Contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-2 px-4 text-center rounded-lg bg-blue-950 text-white text-sm font-semibold hover:bg-blue-800 transition-all"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}