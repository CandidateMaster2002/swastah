import { useEffect, useState } from "react";
import meditationImg from "./assets/images/meditation.png";
import nutraceuticalsImg from "./assets/nutraceuticals.png";
import functionalFoodImg from "./assets/functional_food.jpeg";
import logo from "./assets/logo1.png";
import curcuminImg from "./assets/curcumin.png";
import turmericRootImg from "./assets/turmeric_root.jpg";
import sachet500Img from "./assets/sachet500.jpeg";
import herpesImg from "./assets/herpes.png";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";



import { getWhatsAppLink } from "./config/contact";

// Common WhatsApp CTA Component
const WhatsAppCTA = ({ text = "Order on WhatsApp", className = "" }: { text?: string; className?: string }) => {
  const whatsappLink = getWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      <span className="text-lg">{text}</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.93 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.772zm-.008 9.528c-.89.001-1.579-.24-2.208-.632l-1.112.365.355-1.104c-.437-.66-.684-1.396-.684-2.176.001-1.832 1.49-3.322 3.322-3.322 1.83 0 3.32 1.49 3.32 3.321-.001 1.831-1.49 3.321-3.32 3.322h-.673z" />
      </svg>
    </a>
  );
};


// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Nutraceuticals", id: "nutraceuticals" },
    { name: "Curcumin", id: "about-curcumin" },
    { name: "Science", id: "science" },
    { name: "Benefits", id: "benefits" },
    { name: "Product", id: "product" },
    { name: "Usage", id: "usage" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for sticky header
        behavior: "smooth"
      });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-[96px]">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer py-2" onClick={() => scrollToSection('hero')}>
            <img className="h-32 md:h-42 w-auto object-contain transition-all duration-300" src={logo} alt="Swasthah Logo" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === item.id
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === item.id
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


// 1. FloatingWhatsApp - Replaced by imported component



// 2. Footer - Replaced by imported component


// 3. Hero
interface HeroProps {
  ctaText: string;
}

const Hero = ({ ctaText }: HeroProps) => {
  return (

    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden py-20 pt-32">
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
            <div className="mt-12 mb-12">
              <WhatsAppCTA text={ctaText} className="px-12 py-5 text-xl bg-amber-500 hover:bg-amber-600 border-2 border-transparent hover:border-amber-300" />
            </div>
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

// 4. Nutraceuticals
interface NutraceuticalsProps {
  ctaText: string;
}

const Nutraceuticals = ({ ctaText }: NutraceuticalsProps) => {
  return (
    <section id="nutraceuticals" className="px-4 py-32 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
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
          <WhatsAppCTA text={ctaText} />
        </div>
      </div>
    </section>
  );
};

// 5. AboutCurcumin
interface AboutCurcuminProps {
  ctaText: string;
}

const AboutCurcumin = ({ ctaText }: AboutCurcuminProps) => {
  return (
    <section id="about-curcumin" className="px-4 py-32 bg-white relative overflow-hidden">
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
                  src={curcuminImg}
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
                src={turmericRootImg}
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
          <WhatsAppCTA text={ctaText} />
        </div>
      </div>
    </section>
  );
};

// 6. HowCurcuminWorks
interface HowCurcuminWorksProps {
  ctaText?: string;
}

const HowCurcuminWorks = ({ ctaText = "Discover the science" }: HowCurcuminWorksProps) => {
  return (
    <section id="science" className="px-4 py-24 bg-gradient-to-br from-white to-emerald-50/30 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-3xl"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header - Compact yet elegant */}
        <div className="mb-12">
          <span className="text-emerald-700 font-medium text-sm uppercase tracking-[0.25em] bg-emerald-50 px-5 py-2 rounded-full inline-block mb-6">
            Cellular Intelligence
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Curcumin</span> Works
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
        </div>

        {/* Main content grid - Compact, visual, impactful */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column - Core mechanism */}
          <div className="space-y-6">
            {/* Primary statement - Cellular level */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100/50 hover:border-emerald-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-700 text-xl">⚛️</span>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-medium leading-relaxed">
                    Curcumin works at <span className="text-emerald-700 font-semibold">cellular level</span> to target the signalling pathways to perform corrective measures.
                  </p>
                </div>
              </div>
            </div>

            {/* Signal correction - Root cause */}
            <div className="bg-gradient-to-br from-amber-50/80 to-white p-6 rounded-2xl border border-amber-200/50">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 text-lg">🔄</span>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  <span className="font-semibold text-gray-900">Works specifically on certain signaling path systems</span> — correcting the signals that malfunction due to dietary habits and lifestyle issues. This malfunctioning is root cause for many chronic ailments.
                </p>
              </div>
            </div>

            {/* Polyphenol targeting */}
            <div className="flex items-start gap-4 bg-white/80 p-5 rounded-xl">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 text-sm">🎯</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-medium text-gray-900">Curcumin, a polyphenol</span> — has been shown to target multiple signaling molecules while also demonstrating activity at the cellular level.
              </p>
            </div>

            {/* Modern drugs comparison - subtle */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Contrast</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <p className="text-sm text-gray-500 italic">
                Modern drugs are highly specific in their action, targeting specific receptors or metabolic pathways.
              </p>
            </div>
          </div>

          {/* Right column - Cancer focus + Visual element */}
          <div className="relative h-full flex flex-col gap-6">
            {/* Smart cancer targeting - Hero visual */}


            {/* Functional Food Image */}
            <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg border border-emerald-100 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10"></div>
              <img
                src={functionalFoodImg}
                alt="Functional Food - Curcumin benefits"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

            </div>
          </div>

        </div>

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
              { text: "Blood thinner", emoji: "🩸" },
              { text: "Blood Purifier", emoji: "🌊" },
              { text: "Anti Inflammatory", emoji: "🔥" },
              { text: "Anti Cancer", emoji: "🎗️" },
              { text: "Anti-oxidant", emoji: "🛡️" },
              { text: "Helps ligament restoration", emoji: "🦵" },
              { text: "Restores bone density", emoji: "🦴" },
              { text: "Exerts antiviral effects", emoji: "🦠" },
              { text: "Anti-pulmonary fibrosis", emoji: "🫁" },
              { text: "COPD effects", emoji: "😮‍💨" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full mb-3 flex items-center justify-center group-hover:bg-emerald-200 transition-colors text-xl">
                  {item.emoji}
                </div>
                <p className="text-gray-800 font-medium text-sm leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compact CTA - Optional, minimal */}
        {ctaText && (
          <div className="mt-12 text-center">
            <WhatsAppCTA text={ctaText} />
          </div>
        )}
      </div>
    </section>
  );
};

// 7. FunctionalFood (DiseasesSection)
const conditions = [
  {
    title: "Arthritis",
    icon: "🦴",
    content: "Curcumin (the active compound in turmeric) is quite well-studied for arthritis, especially because of its anti-inflammatory action.",
  },
  {
    title: "Diabetes",
    icon: "🩸",
    content: "Curcumin helps diabetes in a root-cause way, not just by lowering sugar for a few hours. It targets inflammation, insulin resistance, oxidative stress, and β-cell damage. Curcumin helps diabetes by improving insulin sensitivity, reducing chronic inflammation, protecting pancreatic β-cells and reducing post-meal glucose spikes.",
  },
  {
    title: "Asthma",
    icon: "🌬️",
    content: "Curcumin helps in asthma mainly by calming the root processes that drive airway narrowing and hypersensitivity—not by acting like a quick bronchodilator. Curcumin helps in asthma by reducing airway inflammation, preventing airway hyper-responsiveness, decreasing mucus overproduction and providing strong antioxidant protection.",
  },
  {
    title: "Weight Loss",
    icon: "⚖️",
    content: "Curcumin supports weight loss by fixing underlying metabolic problems, not by forcing the scale down. Curcumin supports weight loss by reducing inflammation, improving insulin sensitivity, supporting fat metabolism and helping gut health.",
  },
  {
    title: "Gut Health",
    icon: "🌱",
    content: "Curcumin is quietly excellent for gut health—not as a laxative or probiotic, but as a gut-lining healer + inflammation modulator. Curcumin is excellent for gut health by calming gut inflammation, repairing and strengthening the gut barrier and modulating the gut microbiome.",
  },
  {
    title: "Cancer",
    icon: "🧬",
    content: "Curcumin fights cancer by switching off cancer survival signals, stopping uncontrolled cell division, forcing cancer cells into apoptosis, cutting off tumor blood supply and preventing metastasis. It is preventive and supportive and works best as part of an integrative approach.",
  },
];

const FunctionalFood = () => {
  return (
    <section id="benefits" className="relative overflow-hidden py-32 px-6 md:px-16 bg-gradient-to-br from-white via-green-50/50 to-yellow-50/30">

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
          <WhatsAppCTA text="Discuss Your Condition on WhatsApp" />
        </div>

      </div>
    </section>
  );
};

// 8. AboutProduct
interface AboutProductProps {
  ctaText: string;
}

const AboutProduct = ({
  ctaText
}: AboutProductProps) => {

  return (
    <section id="product" className="py-24 bg-white">
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
            <WhatsAppCTA text={ctaText} className="w-full" />

          </div>
        </div>


      </div>
    </section>
  );
};

// 9. InstructionsPrecautions
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
    <section id="usage" className="px-4 py-32 bg-gray-50">
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
          <WhatsAppCTA text={ctaText} />
        </div>
      </div>
    </section>
  );
};

// --- Main Component ---

const SwastahLanding = () => {
  const ctaText = "Order on";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 antialiased overflow-x-hidden">
      <Header />
      <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
        <WhatsAppButton />
      </div>
      <Hero ctaText={ctaText} />
      <Nutraceuticals ctaText={ctaText} />
      <AboutCurcumin ctaText={ctaText} />
      <HowCurcuminWorks ctaText={ctaText} />
      <FunctionalFood />
      <AboutProduct ctaText={ctaText} />
      <InstructionsPrecautions ctaText={ctaText} />
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .rounded-4xl {
          border-radius: 2rem;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}} />
    </div>
  );
};

export default SwastahLanding;