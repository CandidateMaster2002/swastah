import sachet500Img from "../../assets/sachet500.jpeg";
import herpesImg from "../../assets/herpes.png";

interface OurProductProps {
    whatsappLink?: string;
}

const OurProduct = ({
    whatsappLink = "https://wa.me/919850319154?text=Hello%20Swastah%2C%20I%20want%20to%20order%20Swastah%20Curcumin%20sachets"
}: OurProductProps) => {

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.2em] bg-emerald-50/80 px-5 py-2.5 rounded-full inline-block mb-6">
                        Pure • Natural • Traditional
                    </span>
                    <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
                        Our <span className="font-bold bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Curcumin</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mx-auto mt-6"></div>
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* Left Column - Product Visuals */}
                    <div className="space-y-8">
                        {/* Hero Image - Sachet */}
                        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-4xl border border-gray-200/80 p-8 shadow-xl">
                            <div className="absolute top-6 right-6 bg-emerald-100 px-4 py-2 rounded-full">
                                <span className="text-emerald-800 font-medium text-sm">100% Natural</span>
                            </div>
                            <img
                                src={sachet500Img}
                                alt="Swastah Curcumin 90 Sachets"
                                className="w-full h-auto max-h-96 object-contain"
                            />
                        </div>

                        {/* Secondary Image - Turmeric Root */}
                        <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg h-64">
                            <img
                                src={herpesImg}
                                alt="Fresh turmeric rhizome"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                                    Pure rhizome • No additives
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="space-y-10">
                        {/* Available Formats */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-emerald-600 rounded-full"></span>
                                Available Formats
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-200 flex-1 min-w-[140px]">
                                    <span className="block text-2xl font-bold text-emerald-800">90</span>
                                    <span className="text-gray-600 text-sm">Sachets</span>
                                </div>
                                <div className="bg-amber-50 px-6 py-4 rounded-2xl border border-amber-200 flex-1 min-w-[140px]">
                                    <span className="block text-2xl font-bold text-amber-800">295</span>
                                    <span className="text-gray-600 text-sm">Sachets</span>
                                </div>
                                <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-200 flex-1 min-w-[140px]">
                                    <span className="block text-2xl font-bold text-gray-800">500 g</span>
                                    <span className="text-gray-600 text-sm">Bulk</span>
                                </div>
                            </div>
                        </div>

                        {/* What Makes It Natural */}
                        <div className="bg-gradient-to-br from-emerald-50/50 to-white rounded-3xl border border-emerald-100 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full"></span>
                                What Makes It Natural
                            </h3>
                            <div className="space-y-4">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    We provide curcumin in its natural form — no additives or colors added.
                                </p>
                                <div className="bg-white/80 p-5 rounded-xl border border-emerald-200/50">
                                    <p className="text-gray-600 italic text-base">
                                        "Do not expect uniformity — at times the final product is more towards yellow,
                                        at times orangish yellow, sometimes it may get slight sweet taste.
                                        It all really depends on the rhizome type, soil and weather conditions."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Packaging */}
                        <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-3xl border border-amber-100 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-emerald-600 rounded-full"></span>
                                Packaging
                            </h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-700 text-xl">👜</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Easy to use ON THE GO sachets</p>
                                        <p className="text-gray-600 text-sm mt-1">Travelling? or eating out in restaurant? Simply top your food with it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-700 text-xl">🌍</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">Eco friendly plastic free</p>
                                        <p className="text-gray-600 text-sm mt-1">Jute bag with paper poster stitched on it — not laminated.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Usage */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-amber-600 rounded-full"></span>
                                Usage
                            </h3>
                            <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200/50">
                                <p className="text-gray-700 font-medium">
                                    Kindly follow the instruction leaflet received with the product.
                                </p>
                                <p className="text-xs text-gray-500 mt-2">
                                    *Detailed dosage and precautions on the leaflet inside each pack
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center font-medium px-6 py-5 rounded-full transition-colors shadow-lg hover:shadow-xl"
                        >
                            <span className="flex items-center justify-center gap-3 text-lg">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.001 2.00195C6.477 2.00195 2.00098 6.47695 2.00098 12C2.00098 15.99 4.53298 19.362 8.11098 20.723V13.637H6.28798V12H8.11298V10.315C8.11298 6.95895 9.91898 5.00195 13.061 5.00195C13.908 5.00195 15.024 5.12695 15.024 5.12695V8.00095H13.893C12.792 8.00095 12.398 8.82195 12.398 9.67095V12H14.899L14.451 13.637H12.398V20.723C15.976 19.363 18.501 15.99 18.501 12C18.501 6.47695 14.026 2.00195 12.001 2.00195Z" fill="white" />
                                </svg>
                                Order on WhatsApp
                            </span>
                        </a>
                        <p className="text-xs text-gray-400 text-center">
                            Send address • Pay via GPay / bank transfer • Courier shipped
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default OurProduct;