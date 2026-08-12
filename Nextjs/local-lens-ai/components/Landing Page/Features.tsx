import React from 'react'
import { Sparkles, ShieldCheck, Zap } from 'lucide-react'

const Features = () => {
    return (
        <section
            id="features"
            className="bg-white border-y border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

                <div className="max-w-2xl mx-auto text-center">

                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Why Local Lens
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
                        Local information,
                        <span className="text-blue-600"> made smarter.</span>
                    </h2>

                    <p className="text-gray-500 mt-4 leading-7">
                        Turn location data into useful insights without
                        complicated tools or overwhelming information.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-5 mt-12">

                    {/* Feature 1 */}
                    <div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300">

                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                        </div>

                        <h3 className="font-bold text-lg mt-5">
                            AI-Powered Insights
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Get meaningful insights about locations instead of
                            simply looking at raw information.
                        </p>

                    </div>

                    {/* Feature 2 */}
                    <div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300">

                        <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                        </div>

                        <h3 className="font-bold text-lg mt-5">
                            Smarter Decisions
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Understand local conditions and make better decisions
                            based on useful location intelligence.
                        </p>

                    </div>

                    {/* Feature 3 */}
                    <div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-300">

                        <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-indigo-600" />
                        </div>

                        <h3 className="font-bold text-lg mt-5">
                            Simple & Fast
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Find what matters quickly through a clean and
                            intuitive experience designed for everyday users.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features
