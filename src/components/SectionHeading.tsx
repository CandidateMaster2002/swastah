import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
}

const SectionHeading = ({ title, highlight, description, className = "" }: SectionHeadingProps) => {
    const words = title.split(" ");

    const containerVars = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const wordVars = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={`text-center mb-20 ${className}`}
        >
            <motion.h2
                variants={containerVars}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
                {words.map((word, idx) => (
                    <motion.span
                        key={idx}
                        variants={wordVars}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                ))}
                {highlight && (
                    <motion.span
                        variants={wordVars}
                        className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent inline-block"
                    >
                        {highlight}
                    </motion.span>
                )}
            </motion.h2>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mx-auto"
            ></motion.div>
            {description && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
