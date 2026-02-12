import React from "react";

const conditions = [
    {
        title: "Arthritis",
        icon: "🦴",
        content:
            "Curcumin (the active compound in turmeric) is quite well-studied for arthritis, especially because of its anti-inflammatory action.",
    },
    {
        title: "Diabetes",
        icon: "🩸",
        content:
            "Curcumin helps diabetes in a root-cause way, not just by lowering sugar for a few hours. It targets inflammation, insulin resistance, oxidative stress, and β-cell damage. Curcumin helps diabetes by improving insulin sensitivity, reducing chronic inflammation, protecting pancreatic β-cells and reducing post-meal glucose spikes.",
    },
    {
        title: "Asthma",
        icon: "🌬️",
        content:
            "Curcumin helps in asthma mainly by calming the root processes that drive airway narrowing and hypersensitivity—not by acting like a quick bronchodilator. Curcumin helps in asthma by reducing airway inflammation, preventing airway hyper-responsiveness, decreasing mucus overproduction and providing strong antioxidant protection.",
    },
    {
        title: "Weight Loss",
        icon: "⚖️",
        content:
            "Curcumin supports weight loss by fixing underlying metabolic problems, not by forcing the scale down. Curcumin supports weight loss by reducing inflammation, improving insulin sensitivity, supporting fat metabolism and helping gut health.",
    },
    {
        title: "Gut Health",
        icon: "🌱",
        content:
            "Curcumin is quietly excellent for gut health—not as a laxative or probiotic, but as a gut-lining healer + inflammation modulator. Curcumin is excellent for gut health by calming gut inflammation, repairing and strengthening the gut barrier and modulating the gut microbiome.",
    },
    {
        title: "Cancer",
        icon: "🧬",
        content:
            "Curcumin fights cancer by switching off cancer survival signals, stopping uncontrolled cell division, forcing cancer cells into apoptosis, cutting off tumor blood supply and preventing metastasis. It is preventive and supportive and works best as part of an integrative approach.",
    },
];

const DiseasesSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-32 px-6 md:px-16 bg-gradient-to-br from-white via-green-50/50 to-yellow-50/30">

            {/* Ambient Glow Background */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
                        Targeted Cellular Support
                    </h2>

                    <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Curcumin works at cellular level and supports multiple chronic conditions
                        through its anti-inflammatory and antioxidant properties.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

                    {conditions.map((item, index) => (
                        <div
                            key={index}
                            className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-green-200/40 via-white to-yellow-200/40 transition-all duration-700 hover:scale-[1.03]"
                        >
                            <div className="h-full bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-700">

                                {/* Icon Circle */}
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 text-3xl mb-8 shadow-inner">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                    {item.title}
                                </h3>

                                {/* Content */}
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {item.content}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>

                {/* CTA Strip */}
                <div className="mt-24 text-center">
                    <div className="inline-block bg-green-600 text-white px-10 py-5 rounded-full text-lg font-medium shadow-lg hover:bg-green-700 transition-all duration-300 cursor-pointer">
                        Discuss Your Condition on WhatsApp
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DiseasesSection;
