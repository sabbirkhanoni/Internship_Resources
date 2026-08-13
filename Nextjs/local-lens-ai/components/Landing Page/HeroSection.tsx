import React from 'react'
import { Sparkles, ArrowRight, Search, CheckCircle2, ShieldCheck, Navigation, Star } from 'lucide-react'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute -bottom-60 -right-40 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-24 lg:pt-10 lg:pb-15">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold animate-bounce">
            <Sparkles className="w-3.5 h-3.5" />
            AI-powered local intelligence
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl w-full lg:text-8xl font-bold tracking-tight leading-[1.08] text-gray-950">
            See your surroundings
            <span className="block text-blue-600 lg:text-4xl">
              through a smarter lens.
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-3 text-base sm:text-lg leading-8 text-gray-500">
            Local Lens AI helps you understand places around you,
            discover useful local insights, and make smarter decisions
            wherever you go.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">

            <Link
              href="/registration"
              className="w-full sm:w-auto h-12 px-7 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              Explore Lost & Found AI
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm flex items-center justify-center transition"
            >
              See how it works
            </a>

          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-4 text-xs text-gray-400">

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              AI-powered insights
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              Location-aware
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              Easy to use
            </div>

          </div>
        </div>

        {/* Hero Preview */}
        <div className="relative max-w-5xl mx-auto mt-10">

          <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full" />

          <div className="relative bg-black rounded-3xl border border-gray-200 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] p-3 sm:p-5">

            {/* Browser Header */}
            <div className="flex items-center gap-2 px-3 pb-4 border-b border-gray-100">

              <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-300" />

              <div className="ml-3 flex-1 max-w-sm mx-auto h-7 rounded-lg bg-gray-50 border border-gray-100" />

            </div>

            {/* App Preview */}
            <div className="grid lg:grid-cols-[1fr_280px] gap-4 pt-4">

              {/* Map */}
              <div className="relative h-[300px] sm:h-[400px] rounded-2xl bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 overflow-hidden">

                {/* Map Lines */}
                <div className="absolute inset-0 opacity-40">

                  <div className="absolute top-[25%] left-0 w-full h-px bg-blue-200 rotate-6" />

                  <div className="absolute top-[55%] left-0 w-full h-px bg-blue-200 -rotate-3" />

                  <div className="absolute top-[75%] left-0 w-full h-px bg-blue-200 rotate-2" />

                  <div className="absolute left-[30%] top-0 h-full w-px bg-blue-200 rotate-12" />

                  <div className="absolute left-[65%] top-0 h-full w-px bg-blue-200 -rotate-6" />

                </div>

                {/* Location Pins */}
                <div className="absolute top-[35%] left-[35%]">
                  <div className="w-10 h-10 rounded-full bg-blue-600/15 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg" />
                  </div>
                </div>

                <div className="absolute top-[60%] left-[62%]">
                  <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-lg" />
                  </div>
                </div>

                <div className="absolute top-[45%] left-[72%]">
                  <div className="w-10 h-10 rounded-full bg-orange-500/15 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-lg" />
                  </div>
                </div>

                {/* Search */}
                <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-80">

                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-11 px-3 flex items-center gap-2">

                    <Search className="w-4 h-4 text-gray-400" />

                    <span className="text-xs text-gray-400">
                      Search a place or location...
                    </span>

                  </div>

                </div>

              </div>

              {/* Insight Panel */}
              <div className="hidden lg:block rounded-2xl border border-gray-100 bg-gray-50 p-5">

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Location Insight
                </p>

                <h3 className="font-bold text-gray-900 mt-2">
                  Dhaka Central
                </h3>

                <div className="flex items-center gap-2 mt-3">

                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-50">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Overall Rating
                    </p>

                    <p className="text-sm font-bold text-gray-900">
                      Good
                    </p>
                  </div>

                </div>

                <div className="mt-5 space-y-3">

                  <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold">
                        Accessibility
                      </span>
                    </div>

                    <div className="h-1.5 bg-gray-100 rounded-full mt-3">
                      <div className="h-full w-[82%] bg-blue-500 rounded-full" />
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs font-semibold">
                        Local Rating
                      </span>
                    </div>

                    <p className="text-lg font-bold mt-2">
                      4.7
                      <span className="text-xs text-gray-400 font-normal">
                        /5
                      </span>
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
