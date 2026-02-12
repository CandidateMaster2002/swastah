

interface AboutCurcuminProps {
    ctaText: string;
}

const AboutCurcumin = ({ ctaText }: AboutCurcuminProps) => {
    return (
        <section className="px-4 py-32 bg-white relative overflow-hidden">
            {/* Premium background accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/20 rounded-full filter blur-3xl"></div>

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 max-w-4xl">
                    <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.25em] bg-emerald-50/80 px-5 py-2 rounded-full inline-block mb-6">
                        Science of Well-being
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        The <span className="text-emerald-700">Curcumin</span><br />
                        <span className="text-gray-600 font-light">molecular wisdom</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full mt-2"></div>
                </div>

                {/* Hero Image + Intro */}
                <div className="grid lg:grid-cols-2 gap-16 mt-20">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200/40 rounded-full filter blur-2xl"></div>
                            <div className="relative rounded-4xl overflow-hidden shadow-2xl">
                                <img
                                    src="/src/assets/curcumin.png"
                                    alt="Curcumin molecular structure"
                                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <p className="text-2xl font-light mb-2">Experience Curcumin</p>
                                    <p className="text-lg text-amber-200">Support your body's natural rhythm.</p>
                                </div>
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[220px] border border-emerald-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <span className="text-emerald-700 text-xl">🌿</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Curcumin</p>
                                        <p className="font-semibold text-gray-900">Active compound</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 flex flex-col justify-center">
                        <div className="bg-gradient-to-br from-emerald-50/50 to-amber-50/30 p-8 rounded-4xl border border-emerald-100/50">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                                Curcumin,<br />
                                <span className="text-emerald-700">a polyphenol.</span>
                            </h3>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                Curcumin is the active compound in turmeric.
                            </p>
                            <div className="space-y-4 text-gray-600">
                                <p className="flex items-start gap-3">
                                    <span className="text-emerald-600 text-lg">•</span>
                                    <span>Curcumin molecule is hydrophobic — meaning does not dissolve in water. Curcumin is fat and alcohol soluble.</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-emerald-600 text-lg">•</span>
                                    <span>Curcumin is not water soluble.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extraction & Modern Technology */}
                <div className="grid md:grid-cols-2 gap-12 mt-32">
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-300">
                        <div className="h-full flex flex-col justify-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <span className="text-amber-600 font-medium mb-4">TRADITION → TECHNOLOGY</span>
                            <h4 className="text-2xl font-semibold text-gray-900 mb-4">The extraction evolution</h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Curcumin extracts were not possible in old days since only water extracts were known.
                                Today with modern technology, curcumin extracts are possible and should be used well
                                for the benefit of all.
                            </p>
                        </div>
                    </div>

                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-500">
                        <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/src/assets/turmeric_root.jpg"
                                alt="Fresh turmeric root"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm uppercase tracking-wider text-amber-300">Root of wisdom</p>
                                <p className="text-2xl font-light">Turmeric</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicinal Values Grid */}
                <div className="mt-32 fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-600">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                            Curcumins contain<br />
                            <span className="font-bold bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">
                                numerous medicinal values
                            </span>
                        </h3>
                        <p className="text-xl text-gray-600">
                            Including anti-oxidation and anti-inflammation — the foundation of cellular protection.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "Blood thinner",
                            "Blood Purifier",
                            "Anti Inflammatory",
                            "Anti Cancer",
                            "Anti-oxidant",
                            "Helps ligament restoration",
                            "Restores bone density",
                            "Exerts antiviral effects",
                            "Anti-pulmonary fibrosis",
                            "COPD effects"
                        ].map((property, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 bg-emerald-100 rounded-full mb-3 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                    <span className="text-emerald-700 text-sm">✓</span>
                                </div>
                                <p className="text-gray-800 font-medium text-sm leading-tight">{property}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Low dose benefit + key message */}
                <div className="mt-32 grid md:grid-cols-2 gap-12 items-center fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-800">
                    <div className="bg-gradient-to-br from-emerald-900 to-green-800 p-10 rounded-4xl text-white">
                        <div className="max-w-lg">
                            <span className="text-amber-300 text-sm font-semibold tracking-wider">ACCESSIBLE WELLNESS</span>
                            <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
                                A relatively low dose of the complex can provide health benefits for people that do not have diagnosed health conditions.
                            </p>
                        </div>
                    </div>
                    <div className="bg-amber-50 p-10 rounded-4xl border border-amber-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                                <span className="text-amber-700 text-2xl">🛡️</span>
                            </div>
                            <h4 className="text-2xl font-semibold text-amber-900">Antioxidant & Anti-inflammatory</h4>
                        </div>
                        <p className="text-gray-800 text-lg">
                            Most of these benefits can be attributed to its antioxidant and anti-inflammatory effects.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-1000 mt-32 text-center">
                    <button className="group bg-gradient-to-r from-emerald-800 to-green-700 hover:from-emerald-900 hover:to-green-800 text-white font-semibold px-12 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 text-xl inline-flex items-center gap-4">
                        {ctaText}
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <style>{`
                .fade-section {
                    transition: opacity 1s ease, transform 1s ease;
                }
                .fade-section.show {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>

            <script dangerouslySetInnerHTML={{
                __html: `
                    document.addEventListener('DOMContentLoaded', function() {
                        const fadeElements = document.querySelectorAll('.fade-section');
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('show');
                                }
                            });
                        }, { threshold: 0.1 });
                        
                        fadeElements.forEach(el => observer.observe(el));
                    });
                `
            }} />
        </section>
    );
};

export default AboutCurcumin;