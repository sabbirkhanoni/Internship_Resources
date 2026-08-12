import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/logonew.png"
                alt="Local Lens AI"
                className="w-7 h-7 object-contain"
              />

              <span className="text-sm font-bold">
                Lost & Found
                <span className="text-blue-600"> AI</span>
              </span>
            </Link>

            <p className="text-xs text-gray-400">
              © 2026 Local Lens AI. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-gray-700 transition"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="hover:text-gray-700 transition"
              >
                Terms
              </Link>
            </div>

          </div>

        </div>

      </footer>
  )
}

export default Footer
