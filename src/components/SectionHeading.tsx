
interface SectionHeadingProps {
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
}

const SectionHeading = ({ title, highlight, description, className = "" }: SectionHeadingProps) => {
    return (
        <div className={`text-center mb-20 fade-section opacity-0 translate-y-10 transition-all duration-1000 ${className}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title} {highlight && <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">{highlight}</span>}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mx-auto"></div>
            {description && (
                <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
