import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
import WhatsAppSvg from "./assets/whatsapp_svg.svg";
import SectionHeading from "./components/SectionHeading";



import { getWhatsAppLink } from "./config/contact";
import {
  SITE_TEXT,
  MENU_ITEMS,
  HERO_CONTENT,
  NUTRACEUTICALS_CONTENT,
  ABOUT_CURCUMIN_CONTENT,
  HOW_CURCUMIN_WORKS,
  HEALTH_BENEFITS_GRID,
  CONDITIONS,
  PRODUCT_FORMATS,
  PACKAGING_INFO,
  INSTRUCTIONS_DATA,
  PRECAUTIONS_DATA
} from "./constants/siteData";

// Common WhatsApp CTA Component
const WhatsAppCTA = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic pull strength
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)] overflow-hidden group outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-500 ${className}`}
    >
      {/* Premium Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />

      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      <svg className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72 1.189 7.221 4.316 11.103 4.316h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.178-1.237-6.165-3.483-8.411z" />
      </svg>
      <span className="relative z-10 text-lg uppercase tracking-wider">{text}</span>
    </motion.a>
  );
};



// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = MENU_ITEMS;

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll state for header design
      setIsScrolled(window.scrollY > 20);

      // Handle active section highlighting
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Check Hero Section explicitly
      const heroSection = document.getElementById('hero');
      if (heroSection && heroSection.offsetTop <= scrollPosition && (heroSection.offsetTop + heroSection.offsetHeight) > scrollPosition) {
        setActiveSection('hero');
        return;
      }

      // Check other sections
      const sections = menuItems.map(item => document.getElementById(item.id));
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
    setActiveSection('hero');
  };

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
    <header
      className={`fixed top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300 
      ${isScrolled ? 'left-0 right-0 h-16' : 'left-0 right-0 h-24 md:h-[124px]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer py-1" onClick={scrollToTop}>
            <img
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-28 md:h-48'}`}
              src={logo}
              alt="Swasthah Logo"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 group ${activeSection === item.id
                  ? "text-emerald-700"
                  : "text-gray-500 hover:text-emerald-600"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Horizontal Underline Animation */}
                {activeSection === item.id ? (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                ) : (
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 group-hover:w-4 group-hover:left-[calc(50%-8px)]" />
                )}
              </motion.button>
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
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-full shadow-lg">
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
  const titleLetters = HERO_CONTENT.title.split("");
  const subtitleWords = HERO_CONTENT.subtitle.split(" ");

  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden py-20 pt-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMzBhMTAgMTAgMCAwIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIweiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          className="fade-section"
        >
          <motion.h1
            variants={containerVars}
            className="text-7xl md:text-9xl font-black text-white tracking-tight mb-6 drop-shadow-2xl"
          >
            {titleLetters.map((letter, idx) => (
              <motion.span key={idx} variants={letterVars} className="inline-block">
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 bg-amber-400 mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={staggerContainer}
            className="text-3xl md:text-4xl text-white font-semibold max-w-4xl mx-auto leading-tight"
          >
            {subtitleWords.map((word, idx) => (
              <motion.span key={idx} variants={letterVars} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed mt-4"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-8 space-y-2"
          >
            <p className="text-lg md:text-xl text-amber-300 font-medium">
              {HERO_CONTENT.bioAvailability}
            </p>
            <p className="text-lg md:text-xl text-white/80">
              {HERO_CONTENT.noAdditives}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-lg text-amber-200/90 mt-6 italic"
          >
            {HERO_CONTENT.onTheGo}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="mt-12 mb-12"
          >
            <WhatsAppCTA text={ctaText} className="px-12 py-5 text-xl bg-amber-500 hover:bg-amber-600 border-2 border-transparent hover:border-amber-300" />
          </motion.div>

          {/* Meditation Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="flex justify-center mt-8"
          >
            <img
              src={meditationImg}
              alt="Meditation and Wellness"
              className="w-full max-w-md md:max-w-lg h-auto rounded-[2.5rem] border-4 border-amber-200/20 shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
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
        <SectionHeading title="Nutraceuticals" />

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
            {NUTRACEUTICALS_CONTENT.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-green-100 hover:border-green-300">
                  <div className="flex items-start gap-6">
                    <div className={`shrink-0 w-14 h-14 bg-gradient-to-br ${item.iconType === 'wellness' ? 'from-green-600 to-emerald-600' : 'from-amber-500 to-yellow-500'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.iconType === 'wellness' ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-5m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        )}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
        <SectionHeading title="The Curcumin Molecule" />

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
                {ABOUT_CURCUMIN_CONTENT.introTitle.split(',').map((part, idx) => (
                  <span key={idx}>
                    {part}{idx === 0 && <>,<br /></>}
                    {idx === 1 && <span className="text-emerald-700">{part}</span>}
                  </span>
                ))}
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {ABOUT_CURCUMIN_CONTENT.introDescription}
              </p>
              <div className="space-y-4 text-gray-600">
                {ABOUT_CURCUMIN_CONTENT.points.map((point, idx) => (
                  <p key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-600 text-lg">•</span>
                    <span>{point}</span>
                  </p>
                ))}
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
              <p className="text-2xl md:text-3xl font-light mt-4 leading-relaxed">
                {ABOUT_CURCUMIN_CONTENT.accessibleWellness}
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
              {ABOUT_CURCUMIN_CONTENT.antioxidant}
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
    <section id="science" className="px-4 py-24 bg-emerald-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-3xl"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header - Compact yet elegant */}
        <SectionHeading title="How Curcumin Works" />

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
                  <span className="font-semibold text-gray-900">Works at the Cellular Level</span>
                  <p className="text-gray-900 text-lg font-medium leading-relaxed">
                    {HOW_CURCUMIN_WORKS.cellularLevel.split('cellular level').map((text, i) => (
                      <span key={i}>
                        {text}{i === 0 && <span className="text-emerald-700 font-semibold">cellular level</span>}
                      </span>
                    ))}
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
                  <span className="font-semibold text-gray-900">Corrects Malfunctioning Signals
                    <br />
                  </span>{HOW_CURCUMIN_WORKS.signals}
                </p>
              </div>
            </div>

            {/* Polyphenol targeting */}
            <div className="flex items-start gap-4 bg-white/80 p-5 rounded-xl">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 text-sm">🎯</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-900">Multi-Target Cellular Protection</span>
                <br />
                {HOW_CURCUMIN_WORKS.targeting}
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

        <div className="mt-32">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {HEALTH_BENEFITS_GRID.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-2xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full mb-3 flex items-center justify-center group-hover:bg-emerald-200 transition-colors text-xl">
                  {item.emoji}
                </div>
                <p className="text-gray-800 font-medium text-sm leading-tight">{item.text}</p>
              </motion.div>
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
const conditions = CONDITIONS;

const FunctionalFood = () => {
  return (
    <section id="benefits" className="relative overflow-hidden py-32 px-6 md:px-16 bg-white">

      {/* Ambient Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <SectionHeading title="Support Across Diseases" />

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
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
            </motion.div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-24 text-center">
          <WhatsAppCTA text="Contact Us" />
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
    <section id="product" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <SectionHeading title="Our Product" />

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left Column - Product Visuals */}
          <div className="space-y-8">
            {/* Hero Image - Sachet */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-4xl border border-gray-200/80 p-8 shadow-xl">

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
                {PRODUCT_FORMATS.map((item, index) => (
                  <div key={index} className={`${item.colorStyle === 'emerald' ? 'bg-emerald-50 border-emerald-200' : item.colorStyle === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'} px-6 py-4 rounded-2xl border flex-1 min-w-[140px]`}>
                    <span className={`block text-2xl font-bold ${item.colorStyle === 'emerald' ? 'text-emerald-800' : item.colorStyle === 'amber' ? 'text-amber-800' : 'text-gray-800'}`}>{item.value}</span>
                    <span className="text-gray-600 text-sm">{item.label}</span>
                  </div>
                ))}
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
                {PACKAGING_INFO.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
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
  const instructions = INSTRUCTIONS_DATA.list;
  const precautions = PRECAUTIONS_DATA;

  return (
    <section id="usage" className="px-4 py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Instructions & Precautions" />

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
                  {INSTRUCTIONS_DATA.note}
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
  const ctaText = SITE_TEXT.cta;

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
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
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