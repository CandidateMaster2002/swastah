interface InstructionsPrecautionsProps {
    ctaText: string;
}

const InstructionsPrecautions = ({ ctaText }: InstructionsPrecautionsProps) => {
    const instructions = [
        "Highly concentrated form, consume only one sachet at a time.",
        "Up to 4 sachets can be consumed in a day at regular intervals.",
        "Do not consume empty stomach.",
        "Do not heat or boil, can mix with warm food, not to put when food is cooking on gas.",
        "Best way to consume is by making paste in cow ghee and adding to food.",
        "Expect results on prolong usage of 7 -8 months only.",
    ];

    const precautions = [
        "Strictly follow the instructions listed.",
        "It barely has any serious side effects as the excess will be flushed out.",
        "In case of few boils or yellow sweat no need to worry in worst case can cause diarrhea.",
        "In case of any reaction stop consumption and wait for reaction to subside.",
        "Reactions are likely only in case of excessive consumption.",
        "Those having thrombosis related issues or risk internal bleeding please be known that it is blood thinner.",
        "Those planning for surgery stop usage before and after surgery until recovery.",
        "Those undergoing chemotherapy can consume curcumin.",
    ];

    return (
        <section className="px-4 py-32 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000 text-center mb-20">
                    <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.25em] bg-emerald-50 px-5 py-2 rounded-full inline-block mb-6">
                        Usage Guidelines
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Instructions & Precautions
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* INSTRUCTIONS */}
                    <div className="fade-section opacity-0 translate-y-10 transition-all duration-1000">
                        <div className="bg-white rounded-4xl p-10 shadow-xl border border-gray-100 h-full">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-8 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Instructions</h3>
                            <ul className="space-y-4">
                                {instructions.map((item, index) => (
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
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Precautions</h3>
                            <ul className="space-y-4">
                                {precautions.map((item, index) => (
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
    );
};

export default InstructionsPrecautions;
