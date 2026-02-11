import { useEffect } from "react";

const SwastahLanding = () => {
    const ctaText = "Order on WhatsApp";

    // Intersection Observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-10");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans bg-white text-gray-800 antialiased overflow-x-hidden">
            {/* Floating WhatsApp Button - Sticky */}
            <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.772zm-.008 9.528c-.89.001-1.579-.24-2.208-.632l-1.112.365.355-1.104c-.437-.66-.684-1.396-.684-2.176.001-1.832 1.49-3.322 3.322-3.322 1.83 0 3.32 1.49 3.32 3.321-.001 1.831-1.49 3.321-3.32 3.322h-.673z" />
                    </svg>
                    {ctaText}
                </button>
            </div>

            {/* HERO SECTION - Parallax Effect */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMzBhMTAgMTAgMCAwIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIweiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                        <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight mb-6 drop-shadow-2xl animate-float">
                            SWASTAH
                        </h1>
                        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
                        <p className="text-3xl md:text-4xl text-white font-semibold max-w-4xl mx-auto leading-tight">
                            Pure Curcumin 95% in Its Natural Form
                        </p>
                        <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed mt-4">
                            1 gm (1000mg) Highly Concentrated Curcumin with Pepper Powder
                        </p>
                        <div className="mt-8 space-y-2">
                            <p className="text-lg md:text-xl text-amber-300 font-medium">
                                BioEnhanced. High Bioavailability.
                            </p>
                            <p className="text-lg md:text-xl text-white/80">
                                No additives. No preservatives. No binding agents.
                            </p>
                        </div>
                        <p className="text-lg text-amber-200/90 mt-6 italic">
                            Easy to use ON THE GO sachets.
                        </p>
                        <div className="mt-12">
                            <button className="group bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 text-xl relative overflow-hidden">
                                <span className="relative z-10">{ctaText}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* ABOUT CURCUMIN */}
            <section className="px-4 py-32 bg-white relative">
                <div className="mx-auto max-w-6xl">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                        <span className="text-green-600 font-semibold tracking-widest text-sm uppercase">Pure & Natural</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-12 relative">
                            About Curcumin
                            <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 mt-16">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                            <div className="prose prose-lg">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    We provide curcumin in its natural form and no additives or colors added.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Do not expect uniformity at times the final product is more towards
                                    yellow and at times orangish yellow some times it may get slight sweet
                                    taste it all really depends on the rhizome type soil and weather
                                    conditions.
                                </p>
                                <div className="bg-green-50 p-8 rounded-3xl border border-green-100 mt-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center">
                                            <span className="text-white text-2xl">95%</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-green-800">Pure Curcumin</h3>
                                    </div>
                                    <p className="text-gray-700">Contains curcumin 95% in its natural form.</p>
                                </div>
                            </div>
                        </div>
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400">
                            <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-4xl shadow-2xl">
                                <h3 className="text-3xl font-bold text-green-700 mb-6">BioEnhanced Curcumin</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-lg">Improvised Drug Delivery system</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-lg">High bioavailability</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        <span className="text-lg">We do not add peprine but add pepper for reasons ours is most advanced delivery system and high bioavailability.</span>
                                    </div>
                                </div>
                                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                                    <p className="text-amber-800 font-medium">No additives. No preservatives. No binding agents added.</p>
                                    <p className="text-amber-700 mt-2">Our sachets have 1 gm curcumin (1000mg) with pepper powder.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 mt-16 text-center">
                        <button className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center gap-3">
                            {ctaText}
                            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* NUTRACEUTICALS - Card Grid with Hover Effects */}
            <section className="px-4 py-32 bg-gradient-to-br from-green-50 to-emerald-50 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 text-center mb-20">
                        <span className="text-green-700 font-semibold tracking-widest text-sm uppercase">Science of Wellness</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
                            Nutraceuticals
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200 group">
                            <div className="bg-white rounded-4xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-green-100 hover:border-green-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">What are Nutraceuticals?</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    A nutraceutical product may be defined as a substance, which has
                                    physiological benefit or provides protection against chronic
                                    disease. Nutraceuticals may be used to improve health, delay the
                                    aging process, prevent and manage chronic diseases, increase life
                                    expectancy, or support the structure or function of the body.
                                </p>
                            </div>
                        </div>

                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 group">
                            <div className="bg-white rounded-4xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-green-100 hover:border-green-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Nutraceuticals?</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Nutraceuticals induce targeted molecular therapy without causing
                                    side effects. When natural molecules are used your body absorbs
                                    and has mechanism to flush out of body the excess against the
                                    synthetically generated drugs due to which excess does not
                                    accumulate in the body to cause any side effects and hence
                                    Nutraceuticals when taken in recommended safe quantity for prolong
                                    period of time give you good result without side effects.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 mt-16 text-center">
                        <p className="text-2xl text-gray-700 italic font-light mb-10">
                            "Nutrients brought together with the efficacy of modern technology."
                        </p>
                        <button className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* PRODUCT – 90 SACHETS - Hero Product Section */}
            <section className="px-4 py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50 to-transparent opacity-50"></div>
                <div className="mx-auto max-w-6xl relative">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-20 blur-3xl"></div>
                                <div className="relative bg-gradient-to-br from-amber-500 to-yellow-500 rounded-[3rem] p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                    <span className="text-8xl font-black text-white">90</span>
                                    <span className="text-4xl font-bold text-white ml-2">Sachets</span>
                                </div>
                            </div>
                        </div>

                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400">
                            <span className="text-amber-600 font-semibold tracking-widest text-sm uppercase">Limited Edition</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-8">
                                90 Sachets Pack
                            </h2>
                            <div className="space-y-6 text-lg">
                                <p className="text-gray-700">Contains curcumin 95% in its natural form.</p>
                                <p className="text-gray-700">Our sachets have 1 gm curcumin (1000mg) with pepper powder.</p>
                                <p className="text-gray-700">No additives. No preservatives. No binding agents added.</p>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 mt-6">
                                    <p className="text-2xl font-semibold text-amber-800 mb-2">Easy to use ON THE GO sachets.</p>
                                    <p className="text-amber-700">Travelling? Or eating out in restaurant?</p>
                                    <p className="text-amber-800 font-medium mt-2">Simply top your food with it.</p>
                                </div>
                                <p className="text-sm text-gray-500 italic">Kindly follow the instruction leaflet received with the product.</p>
                            </div>
                            <div className="mt-10">
                                <button className="group bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center gap-3">
                                    {ctaText}
                                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTRUCTIONS & PRECAUTIONS - Side by Side */}
            <section className="px-4 py-32 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* INSTRUCTIONS */}
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                            <div className="bg-white rounded-4xl p-10 shadow-xl border border-gray-100 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-8 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">Instructions</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Highly concentrated form, consume only one sachet at a time.",
                                        "Up to 4 sachets can be consumed in a day at regular intervals.",
                                        "Do not consume empty stomach.",
                                        "Do not heat or boil, can mix with warm food, not to put when food is cooking on gas.",
                                        "Best way to consume is by making paste in cow ghee and adding to food.",
                                        "Expect results on prolong usage of 7 -8 months only."
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                            </span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                                    <p className="text-amber-800">
                                        Highly pigmented natural molecule that gets flush out in form of body fluids like sweat urine etc hence do not panic in case of yellow sweat or urine during initial days of consumption.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* PRECAUTIONS */}
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                            <div className="bg-white rounded-4xl p-10 shadow-xl border border-gray-100 h-full">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl mb-8 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">Precautions</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Strictly follow the instructions listed.",
                                        "It barely has any serious side effects as the excess will be flushed out.",
                                        "In case of few boils or yellow sweat no need to worry in worst case can cause diarrhea.",
                                        "In case of any reaction stop consumption and wait for reaction to subside.",
                                        "Reactions are likely only in case of excessive consumption.",
                                        "Those having thrombosis related issues or risk internal bleeding please be known that it is blood thinner.",
                                        "Those planning for surgery stop usage before and after surgery until recovery.",
                                        "Those undergoing chemotherapy can consume curcumin."
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                            </span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 mt-16 text-center">
                        <button className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* HOW CURCUMIN WORKS */}
            <section className="px-4 py-32 bg-gradient-to-br from-green-900 to-emerald-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+')] bg-repeat"></div>
                </div>
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 text-center mb-20">
                        <span className="text-amber-400 font-semibold tracking-widest text-sm uppercase">The Science</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                            How Curcumin Works
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                            <div className="bg-white/10 backdrop-blur-lg rounded-4xl p-10 border border-white/20">
                                <p className="text-xl text-white/90 leading-relaxed mb-6">
                                    Works specifically on certain signaling path systems in your body
                                    correcting the signals that malfunction due to various reasons that
                                    boil down to dietary habits and lifestyle issues.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    This malfunctioning is root cause for many chronic ailments.
                                </p>
                                <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-amber-400 font-semibold mb-2">Hydrophobic Nature</p>
                                    <p className="text-white/80">
                                        Curcumin molecule is hydrophobic meaning does not dissolve in water.
                                        Curcumin is fat and alcohol soluble hence since ages we have always
                                        consumed turmeric in milk and not water.
                                    </p>
                                    <p className="text-amber-400 font-medium mt-4">Curcumin is not water soluble.</p>
                                </div>
                            </div>
                        </div>

                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400">
                            <div className="bg-white/10 backdrop-blur-lg rounded-4xl p-10 border border-white/20">
                                <h3 className="text-3xl font-bold text-white mb-8">Properties</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Blood thinner",
                                        "Blood purifier",
                                        "Anti inflammatory",
                                        "Anti cancer",
                                        "Ligament restoration",
                                        "Bone density"
                                    ].map((prop, index) => (
                                        <div key={index} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10 hover:bg-white/20 transition-colors">
                                            <span className="text-amber-400 text-lg font-medium">{prop}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 mt-16 text-center">
                        <button className="group bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* FUNCTIONAL FOOD SECTIONS - Masonry Grid */}
            <section className="px-4 py-32 bg-white">
                <div className="mx-auto max-w-6xl">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 text-center mb-20">
                        <span className="text-green-600 font-semibold tracking-widest text-sm uppercase">Targeted Wellness</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
                            Functional Food
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Herpes", "Weightloss", "Asthma", "Arthritis", "Cancer", "Diabetes", "Gut Health"
                        ].map((condition, index) => (
                            <div key={index} className={`fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-${index * 100} group ${condition === "Gut Health" ? "md:col-span-2 lg:col-span-3" : ""}`}>
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 h-full">
                                    <h3 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition-colors">
                                        {condition}
                                    </h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-6"></div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Works specifically on certain signaling path systems in your body
                                        correcting the signals that malfunction due to various reasons that
                                        boil down to dietary habits and lifestyle issues. This
                                        malfunctioning is root cause for many chronic ailments.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-700 mt-20 text-center">
                        <button className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* PACKAGING - Eco Friendly Showcase */}
            <section className="px-4 py-32 bg-gradient-to-br from-amber-50 to-yellow-50 relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMzBhMTAgMTAgMCAwIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIweiIgZmlsbD0iI2ZmZWQ5NSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] bg-repeat opacity-30"></div>
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                            <span className="text-amber-700 font-semibold tracking-widest text-sm uppercase">Sustainable Choice</span>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-8">
                                Eco-Friendly
                                <br />
                                <span className="text-amber-600">Packaging</span>
                            </h2>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Eco friendly plastic free.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Transparent sticker no lamination used.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Aluminium sachets.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Jute bag with paper poster stitched on it not laminated.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400">
                            <div className="bg-white rounded-4xl p-10 shadow-2xl border border-amber-200 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-20 blur-3xl"></div>
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700 text-center text-lg leading-relaxed">
                                            We might come with cream bottles in PET jars as no other eco
                                            friendly option found yet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 mt-16 text-center">
                        <button className="group bg-amber-600 hover:bg-amber-700 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION - Modern Form */}

            {/* FOOTER */}
            <footer className="px-4 py-12 bg-black text-white/80">
                <div className="mx-auto max-w-6xl text-center">
                    <div className="mb-8">
                        <span className="text-4xl font-black text-white tracking-tight">SWASTAH</span>
                    </div>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-8"></div>
                    <p className="text-lg text-white/60">
                        © 2021 Swastah LLP. All Rights Reserved.
                    </p>
                </div>
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .rounded-4xl {
          border-radius: 2rem;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}} />
        </div>
    );
};

export default SwastahLanding;