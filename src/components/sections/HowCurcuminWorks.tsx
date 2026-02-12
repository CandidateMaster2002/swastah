import React from 'react';

interface HowCurcuminWorksProps {
    ctaText?: string;
}

const HowCurcuminWorks = ({ ctaText = "Discover the science" }: HowCurcuminWorksProps) => {
    return (
        <section className="px-4 py-24 bg-gradient-to-br from-white to-emerald-50/30 relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-3xl"></div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header - Compact yet elegant */}
                <div className="mb-12">
                    <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.25em] bg-emerald-50 px-5 py-2 rounded-full inline-block mb-6">
                        Cellular Intelligence
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        How <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Curcumin</span> Works
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
                </div>

                {/* Main content grid - Compact, visual, impactful */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left column - Core mechanism */}
                    <div className="space-y-6">
                        {/* Primary statement - Cellular level */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-emerald-700 text-xl">⚛️</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 text-lg font-medium leading-relaxed">
                                        Curcumin works at <span className="text-emerald-700 font-semibold">cellular level</span> to target the signalling pathways to perform corrective measures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Signal correction - Root cause */}
                        <div className="bg-gradient-to-br from-amber-50/80 to-white p-6 rounded-2xl border border-amber-200/50">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-amber-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-amber-600 text-lg">🔄</span>
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    <span className="font-semibold text-gray-900">Works specifically on certain signaling path systems</span> — correcting the signals that malfunction due to dietary habits and lifestyle issues. This malfunctioning is root cause for many chronic ailments.
                                </p>
                            </div>
                        </div>

                        {/* Polyphenol targeting */}
                        <div className="flex items-start gap-4 bg-white/80 p-5 rounded-xl">
                            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-emerald-600 text-sm">🎯</span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                <span className="font-medium text-gray-900">Curcumin, a polyphenol</span> — has been shown to target multiple signaling molecules while also demonstrating activity at the cellular level.
                            </p>
                        </div>

                        {/* Modern drugs comparison - subtle */}
                        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Contrast</span>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>
                            <p className="text-sm text-gray-500 italic">
                                Modern drugs are highly specific in their action, targeting specific receptors or metabolic pathways.
                            </p>
                        </div>
                    </div>

                    {/* Right column - Cancer focus + Visual element */}
                    <div className="relative">
                        {/* Smart cancer targeting - Hero visual */}
                        <div className="h-full flex flex-col">
                            <div className="bg-gradient-to-br from-emerald-900 to-green-800 p-8 rounded-3xl text-white relative overflow-hidden group">
                                {/* Abstract pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-amber-300 text-sm font-semibold tracking-wider px-3 py-1 bg-white/10 rounded-full">
                                            CANCER • SMART APPROACH
                                        </span>
                                    </div>

                                    <p className="text-xl md:text-2xl font-light leading-relaxed">
                                        Curcumin fights cancer in a <span className="text-amber-300 font-semibold">smart, multi-target way</span>.
                                    </p>

                                    <div className="mt-6 space-y-4">
                                        <p className="text-emerald-50/90 text-base leading-relaxed">
                                            It doesn't act like a harsh chemo drug that kills everything blindly — instead it re-programs cancer biology so abnormal cells lose their survival advantage while normal cells stay protected.
                                        </p>
                                    </div>

                                    {/* Visual divider */}
                                    <div className="mt-8 flex items-center gap-2">
                                        <div className="w-12 h-0.5 bg-amber-400/60 rounded-full"></div>
                                        <span className="text-xs text-emerald-200/80">Targeted • Selective • Intelligent</span>
                                    </div>
                                </div>
                            </div>

                            {/* Pathway visualization - Minimal decorative */}

                        </div>
                    </div>
                </div>

                {/* Compact CTA - Optional, minimal */}
                {ctaText && (
                    <div className="mt-12 text-center">
                        <button className="group inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors border-b border-emerald-200 hover:border-emerald-700 pb-0.5">
                            {ctaText}
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HowCurcuminWorks;