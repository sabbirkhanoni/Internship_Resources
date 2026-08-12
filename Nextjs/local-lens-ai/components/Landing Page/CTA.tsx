import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTA = () => {
  return (
          <section
        id="about"
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20">

          <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-7 sm:px-12 py-14 text-center">

            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-400/20 blur-2xl" />

            <div className="relative">

              <div className="w-12 h-12 mx-auto rounded-xl bg-white/15 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5">
                See your world differently.
              </h2>

              <p className="max-w-xl mx-auto text-sm sm:text-base text-blue-100 leading-7 mt-4">
                Start exploring local insights with Local Lens AI
                and make smarter decisions about the places around you.
              </p>

              <Link
                href="/register"
                className="inline-flex items-center gap-2 mt-7 h-12 px-7 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-semibold text-sm shadow-xl transition"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>

        </div>
      </section>
  )
}

export default CTA
