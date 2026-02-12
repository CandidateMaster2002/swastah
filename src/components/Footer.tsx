import React from 'react';


interface FooterProps {
    scrollToSection?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-gray-900 text-gray-500 py-4 px-4 border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-bold gap-4">
                    {/* Copyright */}
                    <div className="flex items-center">
                        <span>© {new Date().getFullYear()} Swastah. All rights reserved.</span>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-8">
                            <span className="hover:text-[#29b8bd] transition-colors cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-[#29b8bd] transition-colors cursor-pointer">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
