interface FloatingWhatsAppProps {
    ctaText: string;
}

const FloatingWhatsApp = ({ ctaText }: FloatingWhatsAppProps) => {
    return (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.772zm-.008 9.528c-.89.001-1.579-.24-2.208-.632l-1.112.365.355-1.104c-.437-.66-.684-1.396-.684-2.176.001-1.832 1.49-3.322 3.322-3.322 1.83 0 3.32 1.49 3.32 3.321-.001 1.831-1.49 3.321-3.32 3.322h-.673z" />
                </svg>
                {ctaText}
            </button>
        </div>
    );
};

export default FloatingWhatsApp;
