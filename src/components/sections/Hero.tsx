import meditationImg from "../../assets/images/meditation.png";

interface HeroProps {
    ctaText: string;
}

const Hero = ({ ctaText }: HeroProps) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden py-20">
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
                    <div className="mt-12 mb-12">
                        <button className="group bg-amber-500 hover:bg-amber-600 text-white font-bold px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 text-xl relative overflow-hidden">
                            <span className="relative z-10">{ctaText}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </div>

                    {/* Meditation Image */}
                    <div className="flex justify-center mt-8">
                        <img
                            src={meditationImg}
                            alt="Meditation and Wellness"
                            className="w-full max-w-md md:max-w-lg h-auto rounded-[2.5rem] border-4 border-amber-200/20 shadow-2xl transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Hero;
