'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center text-xl font-bold text-primary">
            <img 
              src="/images/icon.jpg" 
              alt="Profile" 
              className="w-8 h-8 rounded-full mr-2 object-cover"
              onError={(e) => {
                // Fallback to a placeholder if the image fails to load
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+'
              }}
            />
            <span>Mohsin Furkh Dar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/research" className="nav-link">Research</Link>
            <Link href="/publications" className="nav-link">Publications</Link>
            <Link href="/projects" className="nav-link">Projects</Link>
            <Link href="/academic-profile" className="nav-link">Academic Profile</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Social Media Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/mohsinfurkh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/mohsinfurkh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.researchgate.net/profile/Mohsin-Furkh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.586 0H4.414C1.973 0 0 1.973 0 4.414v15.172C0 22.027 1.973 24 4.414 24h15.172C22.027 24 24 22.027 24 19.586V4.414C24 1.973 22.027 0 19.586 0zM13.662 14.292v-3.586h1.253c.611 0 1.106.498 1.106 1.112v1.362c0 .613-.495 1.112-1.106 1.112h-1.253zm-7.246.448h3.586v-1.25h-1.245v-2.013h1.25V10.23h-1.25V8.217h1.245V6.966H6.416v7.774zm11.85-1.692c0 1.225-1.007 2.229-2.236 2.229h-2.961V10.23h1.248v3.586h1.713c.289 0 .53-.238.53-.53v-3.056h1.236v2.818h.47zm-8.428-5.997v4.99h1.255v-4.99h-1.255z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`fixed inset-0 transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-30`}
          >
            <div className="bg-white h-full w-full flex flex-col">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-primary focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4 mt-8">
                <Link href="/" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className="nav-link-mobile" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/research" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Research</Link>
                <Link href="/publications" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Publications</Link>
                <Link href="/projects" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/academic-profile" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Academic Profile</Link>
                <Link href="/blog" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/contact" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 