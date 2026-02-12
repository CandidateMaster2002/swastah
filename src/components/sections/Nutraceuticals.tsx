import nutraceuticalsImg from '../../assets/nutraceuticals.png';

interface NutraceuticalsProps {
    ctaText: string;
}

const Nutraceuticals = ({ ctaText }: NutraceuticalsProps) => {
    return (
        <section className="px-4 py-32 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="mx-auto max-w-7xl relative z-10">
                <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 text-center mb-20">
                    <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.25em] bg-emerald-50 px-5 py-2 rounded-full inline-block mb-6">
                        Science of Wellness
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Nutraceuticals
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-200 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                            <img
                                src={nutraceuticalsImg}
                                alt="Nutraceuticals display showing natural ingredients"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-300 group">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-300">
                                <div className="flex items-start gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What are Nutraceuticals?</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            A nutraceutical product may be defined as a substance, which has
                                            physiological benefit or provides protection against chronic
                                            disease. Nutraceuticals may be used to improve health, delay the
                                            aging process, prevent and manage chronic diseases, increase life
                                            expectancy, or support the structure or function of the body.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 group">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-300">
                                <div className="flex items-start gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Nutraceuticals?</h3>
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
                        </div>
                    </div>
                </div>

                <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-500 mt-20 text-center">

                    <button className="group bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                        {ctaText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Nutraceuticals;
