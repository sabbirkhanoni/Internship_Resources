import React from 'react'
import { Sparkles, ShieldCheck, Zap, Search, CheckCircle2, Star, Navigation } from 'lucide-react'
import Link from 'next/link'

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="bg-[#f8fafc]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">

                <div className="text-center">

                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        How It Works
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
                        Three simple steps
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    {[
                        {
                            number: "01",
                            title: "Choose a location",
                            description:
                                "Search for a place or explore locations around you.",
                            icon: Search,
                        },
                        {
                            number: "02",
                            title: "Let AI analyze",
                            description:
                                "Local Lens AI processes available location information.",
                            icon: Sparkles,
                        },
                        {
                            number: "03",
                            title: "Get useful insights",
                            description:
                                "Understand the location and make a more informed decision.",
                            icon: CheckCircle2,
                        },
                        {
                            number: "04",
                            title: "Navigate with confidence",
                            description:
                                "Use the insights to make smarter decisions about your surroundings.",
                            icon: Navigation,
                        },
                        {
                            number: "05",
                            title: "Discover local ratings",
                            description:
                                "See how locals rate the place and what they think about it.",
                            icon: Star,
                        },
                        {
                            number: "06",
                            title: "Stay informed",
                            description:
                                "Keep up with local trends and insights to stay ahead.",
                            icon: Zap,
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.number}
                                className="relative text-center"
                            >

                                <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>

                                <span className="block text-xs font-bold text-blue-500 mt-4">
                                    STEP {item.number}
                                </span>

                                <h3 className="text-lg font-bold mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-6 mt-2 max-w-xs mx-auto">
                                    {item.description}
                                </p>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
