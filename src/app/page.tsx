"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronDown, 
  Briefcase, 
  Laptop, 
  Server, 
  Brain, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  AlertCircle,
  AlertTriangle,
  FileText
} from "lucide-react";

// Inline Custom SVG components for Brand Icons since Lucide removed them
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 .057zm6.574-3.52c1.642.975 3.256 1.488 4.966 1.489 5.39 0 9.778-4.387 9.782-9.778.002-2.611-1.015-5.066-2.864-6.918-1.849-1.85-4.303-2.868-6.917-2.869-5.39 0-9.777 4.388-9.782 9.78.001 1.782.493 3.526 1.428 5.097L2.247 21.75l5.584-1.465zM16.75 14.39c-.26-.13-1.536-.759-1.773-.845-.236-.087-.41-.13-.58.13-.17.26-.66.845-.81.996-.15.17-.3.19-.56.06-.26-.13-1.1-.405-2.096-1.284-.774-.69-1.298-1.543-1.45-1.802-.15-.258-.016-.399.115-.529.117-.117.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.324-.02-.454-.06-.13-.58-1.397-.796-1.921-.21-.509-.42-.44-.58-.449-.15-.007-.323-.008-.497-.008-.174 0-.46.065-.7.33-.24.26-.917.896-.917 2.185s.938 2.53 1.07 2.7c.13.17 1.844 2.815 4.466 3.947.624.269 1.11.43 1.49.55.626.2 1.196.172 1.647.105.502-.075 1.536-.628 1.753-1.236.217-.607.217-1.127.153-1.236-.064-.11-.237-.17-.497-.3z"/>
  </svg>
);

export default function Home() {
  // ==========================================================================
  // APP STATES
  // ==========================================================================
  const [introVisible, setIntroVisible] = useState(true);
  const [introActive, setIntroActive] = useState(true);
  
  const [hoverSide, setHoverSide] = useState<null | "webdev" | "itspecialist">(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  
  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  
  // Refs
  const skillsRef = useRef<HTMLElement>(null);
  const totalSlides = 3;

  // ==========================================================================
  // EFFECT HOOKS
  // ==========================================================================
  
  // 1. Page Load Intro Curtain Animation
  useEffect(() => {
    const timerActive = setTimeout(() => {
      setIntroActive(false);
    }, 1800);

    const timerVisible = setTimeout(() => {
      setIntroVisible(false);
    }, 2800);

    return () => {
      clearTimeout(timerActive);
      clearTimeout(timerVisible);
    };
  }, []);

  // 2. Scroll event (Navbar backdrop and Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Navbar shrink
      setScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = ["home", "experience", "projects", "skills", "about", "contact"];
      let current = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= (top - 180)) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Intersection Observer for Skills Bar animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 4. Projects Carousel Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8500);

    return () => clearInterval(interval);
  }, []);

  // ==========================================================================
  // HANDLERS
  // ==========================================================================
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formName, email: formEmail, subject: formSubject, message: formMessage }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setFormStatus('success');
        setFormName('');
        setFormEmail('');
        setFormSubject('');
        setFormMessage('');

        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error('Contact submit error:', data);
        setFormStatus('idle');
        alert('Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (err) {
      console.error('Contact submit exception:', err);
      setFormStatus('idle');
      alert('Terjadi kesalahan jaringan.');
    }
  };

  // Subtitle text helper based on hover side
  const getHeroSubtitle = () => {
    if (hoverSide === "webdev") return "PHP Native, Laravel, MySQL & QA SDLC";
    if (hoverSide === "itspecialist") return "YOLO v11 AI, Raspberry Pi 5 & IT Network Infra";
    return "Web Developer & IT/AI Specialist";
  };

  return (
    <div className="relative min-h-screen">
      
      {/* 1. Animated Page Intro Curtain Overlay */}
      {introVisible && (
        <div 
          className={`fixed inset-0 bg-[#050608] z-[9999] flex flex-col justify-center items-center pointer-events-none transition-all duration-[1000ms] ease-in-out ${
            introActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl font-extrabold tracking-[8px] text-white opacity-0 animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
              LOUIS MAXIMILLIAN
            </span>
            <div className="h-[2px] bg-gradient-to-r from-[#00f2fe] to-[#a855f7] my-5 rounded-full w-0 animate-[expandBar_0.8s_cubic-bezier(0.85,0,0.15,1)_0.5s_forwards]" />
            <span className="font-mono text-sm text-zinc-400 tracking-[5px] opacity-0 animate-[fadeInUp_0.6s_ease_0.9s_forwards]">
              WEB DEVELOPER &amp; IT SPECIALIST
            </span>
          </div>
        </div>
      )}

      {/* Background Cyber-Obsidian Accents */}
      <div className="grid-overlay" />
      <div 
        className={`glow-orb glow-left transition-all duration-[800ms] ${
          hoverSide === "webdev" ? "opacity-35 scale-[1.2]" : hoverSide === "itspecialist" ? "opacity-5" : "opacity-12"
        }`} 
      />
      <div 
        className={`glow-orb glow-right transition-all duration-[800ms] ${
          hoverSide === "itspecialist" ? "opacity-35 scale-[1.2]" : hoverSide === "webdev" ? "opacity-5" : "opacity-12"
        }`} 
      />

      {/* 2. Glassmorphic Navigation Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] border-b border-white/5 transition-all duration-300 ${
          scrolled ? "py-2 bg-[#050608]/90 shadow-2xl backdrop-blur-xl" : "py-4 bg-[#0a0b0e]/75 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="font-mono text-xl font-bold tracking-tight text-white flex items-center">
            <span className="text-[#00f2fe] mr-0.5">&lt;</span>LM<span className="text-[#a855f7] ml-0.5">/&gt;</span>
          </a>
          
          {/* Desktop Navigation Link items */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "experience", "projects", "skills", "about"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium tracking-wide capitalize transition-colors duration-200 relative py-1 hover:text-white ${
                  activeSection === item ? "text-white" : "text-zinc-400"
                }`}
              >
                {item === "projects" ? "Proyek & Riset" : item === "skills" ? "Keahlian" : item === "about" ? "Tentang" : item === "experience" ? "Pengalaman" : item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full" />
                )}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-xs font-semibold tracking-wider text-[#00f2fe] border border-[#00f2fe]/40 rounded-full px-5 py-2.5 bg-[#00f2fe]/2 overflow-hidden transition-all duration-300 hover:text-black hover:bg-gradient-to-r hover:from-[#00f2fe] hover:to-[#4facfe] hover:border-transparent hover:shadow-[0_0_15px_rgba(0,242,254,0.35)]"
            >
              KONTAK
            </a>
          </nav>

          {/* Mobile hamburger menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu pane */}
        <div 
          className={`md:hidden fixed top-[60px] left-0 w-full bg-[#0a0b0e]/95 backdrop-blur-2xl border-b border-white/5 flex flex-col items-center overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "h-[320px] py-4" : "h-0"
          }`}
        >
          {["home", "experience", "projects", "skills", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-3.5 text-base font-medium tracking-wide capitalize ${
                activeSection === item ? "text-[#00f2fe] bg-white/3" : "text-zinc-400"
              }`}
            >
              {item === "projects" ? "Proyek & Riset" : item === "skills" ? "Keahlian" : item === "about" ? "Tentang" : item === "experience" ? "Pengalaman" : item}
            </a>
          ))}
        </div>
      </header>

      {/* 3. Hero Section (Split Screen Layout - Lama Dev styled) */}
      <section className="h-screen min-h-[700px] flex flex-col md:flex-row relative overflow-hidden border-b border-white/5" id="home">
        
        {/* Web Developer Half */}
        <div 
          onMouseEnter={() => setHoverSide("webdev")}
          onMouseLeave={() => setHoverSide(null)}
          className={`w-full h-1/2 md:h-full flex items-center px-6 md:px-16 pt-24 md:pt-32 pb-12 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] relative z-1 ${
            hoverSide === "webdev" ? "md:w-[58%]" : hoverSide === "itspecialist" ? "md:w-[42%]" : "md:w-[50%]"
          } bg-gradient-to-r from-[#0a0b0e]/95 to-[#0a0b0e]/70 justify-start`}
        >
          <div className="absolute inset-0 bg-radial-at-l from-[#00f2fe]/5 to-transparent opacity-0 transition-opacity duration-500 hoverSide:opacity-100" />
          <div className="max-w-[480px] z-5">
            <span className="font-mono text-xs font-semibold tracking-[2px] text-[#00f2fe] uppercase block mb-4">
              FULL STACK DEVELOPER
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] text-white mb-6">
              Membangun Solusi<br />
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">Web Dinamis</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">
              Spesialis pengembangan web, QA testing, dan perencanaan PRD sesuai dengan standar SDLC perangkat lunak.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {["PHP 5 Native", "Laravel", "MySQL", "QA & SDLC"].map((badge) => (
                <span 
                  key={badge} 
                  className="bg-white/3 border border-white/5 hover:border-[#00f2fe] hover:text-[#00f2fe] px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 transition-colors duration-200"
                >
                  {badge}
                </span>
              ))}
            </div>
            <a 
              href="#experience" 
              className="text-[#00f2fe] font-semibold text-sm inline-flex items-center gap-2 transition-transform duration-300 hover:translate-x-1.5 hover:text-white"
            >
              Lihat Riwayat Web <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Central Character Avatar Box */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center pointer-events-none">
          <div 
            className={`relative rounded-full p-2 bg-[#0a0b0e] border border-white/5 shadow-2xl transition-all duration-500 ${
              hoverSide === "webdev" 
                ? "border-[#00f2fe] shadow-[0_0_35px_rgba(0,242,254,0.25)]" 
                : hoverSide === "itspecialist" 
                ? "border-[#a855f7] shadow-[0_0_35px_rgba(168,85,247,0.25)]" 
                : ""
            }`}
          >
            {/* Split Face Image */}
            <div className="w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden relative z-10 bg-black">
              <Image 
                src="/img/split_avatar.jpg" 
                alt="Louis Maximillian Split Avatar" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            
            {/* Outer dotted decorative ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[rotateRing_50s_linear_infinite]" />
            
            {/* Spinning Text Ring (Lama Dev signature UX) */}
            <svg 
              className={`absolute top-[-20px] left-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)] z-15 animate-[rotateTextRing_28s_linear_infinite] transition-colors duration-300 ${
                hoverSide === "webdev" ? "fill-[#00f2fe]" : hoverSide === "itspecialist" ? "fill-[#a855f7]" : "fill-white/35"
              }`} 
              viewBox="0 0 300 300"
            >
              <path id="textRingPath" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" fill="transparent"/>
              <text className="font-mono text-[10.5px] font-bold tracking-[4.5px]">
                <textPath href="#textRingPath" startOffset="0%">
                  • DEVELOPER • IT SPECIALIST • AI RESEARCHER • CREATIVE CODER
                </textPath>
              </text>
            </svg>
          </div>

          <div className="mt-6 text-center bg-[#0a0b0e]/85 border border-white/5 py-3 px-8 rounded-2xl backdrop-blur-md shadow-2xl pointer-events-auto min-w-[280px]">
            <h1 className="text-base md:text-lg font-extrabold tracking-[2px] text-white">LOUIS MAXIMILLIAN</h1>
            <p 
              className={`font-mono text-[10px] mt-1 transition-colors duration-300 ${
                hoverSide === "webdev" ? "text-[#00f2fe]" : hoverSide === "itspecialist" ? "text-[#a855f7]" : "text-zinc-400"
              }`}
            >
              {getHeroSubtitle()}
            </p>
          </div>

          <div className="mt-6 hidden md:flex flex-col items-center gap-1.5 text-zinc-500 font-mono text-[9px] tracking-widest uppercase">
            <span>GULIR KE BAWAH</span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>

        {/* IT & AI Specialist Half */}
        <div 
          onMouseEnter={() => setHoverSide("itspecialist")}
          onMouseLeave={() => setHoverSide(null)}
          className={`w-full h-1/2 md:h-full flex items-center px-6 md:px-16 pb-24 md:pb-32 pt-12 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] relative z-1 ${
            hoverSide === "itspecialist" ? "md:w-[58%]" : hoverSide === "webdev" ? "md:w-[42%]" : "md:w-[50%]"
          } bg-gradient-to-l from-[#0a0b0e]/95 to-[#0a0b0e]/70 justify-end text-right`}
        >
          <div className="absolute inset-0 bg-radial-at-r from-[#a855f7]/5 to-transparent opacity-0 transition-opacity duration-500 hoverSide:opacity-100" />
          <div className="max-w-[480px] z-5">
            <span className="font-mono text-xs font-semibold tracking-[2px] text-[#a855f7] uppercase block mb-4">
              IT &amp; AI SPECIALIST
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[1.15] text-white mb-6">
              Mengintegrasikan IoT &amp;<br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#d946ef] bg-clip-text text-transparent">Kecerdasan Buatan</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">
              Ahli infrastruktur jaringan, cybersecurity, serta riset computer vision dan implementasi perangkat keras pintar.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-10 justify-end">
              {["YOLO v11", "Raspberry Pi 5", "Network Routing", "Cybersecurity"].map((badge) => (
                <span 
                  key={badge} 
                  className="bg-white/3 border border-white/5 hover:border-[#a855f7] hover:text-[#a855f7] px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-400 transition-colors duration-200"
                >
                  {badge}
                </span>
              ))}
            </div>
            <a 
              href="#projects" 
              className="text-[#a855f7] font-semibold text-sm inline-flex items-center gap-2 transition-transform duration-300 hover:translate-x-1.5 hover:text-white flex-row-reverse"
            >
              Jelajahi Riset AI <ArrowRight size={16} className="rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Experience Timeline Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-28 relative z-5" id="experience">
        <div className="text-center mb-16">
          <span className="font-mono text-[#00f2fe] text-xs font-semibold tracking-[3px] uppercase block mb-3">
            Karir Profesional
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Riwayat Pengalaman Kerja</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative max-w-[850px] mx-auto pl-8 border-l border-white/10 space-y-16">
          
          {/* RKZ Surabaya Job Card */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-[#0a0b0e] border-[3px] border-[#00f2fe] z-10 transition-transform duration-300 group-hover:scale-125" />
            <div className="font-mono text-xs text-zinc-500 mb-2">Juni 2026 - Sekarang</div>
            
            <div className="bg-[#12141b]/65 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] hover:border-white/10 hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/5 flex-shrink-0 bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=100&auto=format&fit=crop&q=60"
                    alt="RKZ Surabaya" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">Website Development</h3>
                  <h4 className="text-sm font-medium text-zinc-400">Rumah Sakit RKZ St. Vincentius a Paulo, Surabaya</h4>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Bertanggung jawab penuh atas pengembangan situs web rumah sakit, memastikan performa, keamanan, dan kepatuhan sistem informasi kesehatan.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-400">
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00f2fe] before:font-bold">
                  Mengembangkan dan memelihara aplikasi web menggunakan <strong>PHP 5 Native</strong>, <strong>MySQL</strong>, dan <strong>AI Automate</strong> sebagai standar kerja.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00f2fe] before:font-bold">
                  Melaksanakan siklus hidup pengembangan perangkat lunak (<strong>SDLC</strong>) yang mencakup <strong>PRD Planning Website</strong> dan arsitektur data.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00f2fe] before:font-bold">
                  Menguji dan memastikan kualitas sistem melalui <strong>Full Stack Website QA Testing</strong> secara komprehensif sebelum deployment.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#00f2fe] before:font-bold">
                  Mengadaptasi teknologi baru sesuai dengan kebutuhan dan spesifikasi teknis dari manajemen rumah sakit.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["PHP Native", "MySQL", "AI Automate", "QA Testing", "PRD & SDLC"].map((t) => (
                  <span key={t} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Upwork/Cake Freelance Job Card */}
          <div className="relative group">
            <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-[#0a0b0e] border-[3px] border-[#3b82f6] z-10 transition-transform duration-300 group-hover:scale-125" />
            <div className="font-mono text-xs text-zinc-500 mb-2">Maret 2026 - Sekarang</div>
            
            <div className="bg-[#12141b]/65 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] hover:border-white/10 hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-[#00f2fe]/20 bg-[#00f2fe]/5 flex items-center justify-center text-[#00f2fe] flex-shrink-0">
                  <Laptop size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">Freelance Full-Stack Developer</h3>
                  <h4 className="text-sm font-medium text-zinc-400">Upwork &amp; Cake (CakeResume)</h4>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Menyediakan jasa konsultasi IT dan pengembangan aplikasi web skala penuh (Full-Stack) untuk berbagai klien global di platform Upwork dan Cake.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-400">
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#3b82f6] before:font-bold">
                  Mendesain dan memprogram arsitektur frontend dan backend sesuai kebutuhan spesifik klien.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#3b82f6] before:font-bold">
                  Mengembangkan solusi kustom untuk otomasi bisnis dan integrasi API pihak ketiga.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#3b82f6] before:font-bold">
                  Menjaga komunikasi profesional yang baik serta menyelesaikan proyek tepat waktu dengan standar kode yang bersih.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["Full-Stack Dev", "Freelance", "API Integration", "React", "Node.js"].map((t) => (
                  <span key={t} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PT Surya Multi Indopack Job Card */}
          <div className="relative group">
            <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-[#0a0b0e] border-[3px] border-[#a855f7] z-10 transition-transform duration-300 group-hover:scale-125" />
            <div className="font-mono text-xs text-zinc-500 mb-2">Nov 2025 - Feb 2026</div>
            
            <div className="bg-[#12141b]/65 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:translate-y-[-4px] hover:border-white/10 hover:shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/5 flex-shrink-0 bg-white">
                  <Image 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&auto=format&fit=crop&q=60"
                    alt="PT Surya Multi Indopack" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">IT Supervisor</h3>
                  <h4 className="text-sm font-medium text-zinc-400">PT Surya Multi Indopack, Surabaya</h4>
                </div>
              </div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Memimpin tim IT dan mengelola seluruh infrastruktur teknologi informasi pabrik, memastikan operasional jaringan dan sistem keamanan berjalan tanpa hambatan.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-zinc-400">
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#a855f7] before:font-bold">
                  Mengelola infrastruktur jaringan industri (<strong>Network Infrastructure</strong>) dan sistem keamanan siber (<strong>Cybersecurity</strong>).
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#a855f7] before:font-bold">
                  Mengonfigurasi dan memelihara <strong>Routing &amp; Switching</strong> menggunakan perangkat keras <strong>MikroTik Board</strong>.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#a855f7] before:font-bold">
                  Mengelola sistem pemantauan keamanan CCTV berbasis IP berskala besar di lingkungan operasional perusahaan.
                </li>
                <li className="relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-[#a855f7] before:font-bold">
                  Menyediakan dukungan teknis tingkat lanjut (L2/L3 IT Support) untuk kebutuhan korporat.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["IT Supervisor", "Network Infrastructure", "Cybersecurity", "Mikrotik Board", "CCTV IP"].map((t) => (
                  <span key={t} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Projects & Research Section (Horizontal Showcase) */}
      <section className="bg-[#050608] py-28 relative z-5" id="projects">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="font-mono text-[#a855f7] text-xs font-semibold tracking-[3px] uppercase block mb-3">
              Riset Akademis &amp; Karya Mandiri
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proyek &amp; Riset Pilihan</h2>
            <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#a855f7] to-[#d946ef] mx-auto mt-4 rounded-full" />
          </div>

          {/* Carousel controls bar */}
          <div className="flex justify-between items-center max-w-[380px] mx-auto mb-10">
            <button 
              onClick={handlePrevSlide}
              className="bg-[#12141b]/65 border border-white/5 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:border-[#00f2fe] hover:text-[#00f2fe] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:scale-105"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                    currentSlide === idx 
                      ? "bg-[#00f2fe] scale-125 shadow-[0_0_8px_rgba(0,242,254,0.5)]" 
                      : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNextSlide}
              className="bg-[#12141b]/65 border border-white/5 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all hover:border-[#00f2fe] hover:text-[#00f2fe] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:scale-105"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Outer Slider Window */}
          <div className="w-full overflow-hidden rounded-3xl">
            <div 
              className="flex w-[300%] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(${currentSlide * -33.33333}%)` }}
            >
              
              {/* Slide 1: YOLO v11 Riset */}
              <div className="w-[33.33333%] px-2.5 box-border flex justify-center">
                <div className="w-full bg-[#12141b]/65 border border-[#a855f7]/25 rounded-3xl p-8 relative flex flex-col justify-between bg-gradient-to-b from-[#a855f7]/3 to-[#12141b]/65">
                  <div className="absolute top-6 right-8 text-[9px] font-bold tracking-widest text-white bg-gradient-to-r from-[#a855f7] to-[#d946ef] rounded-full px-3 py-1">
                    RISET UTAMA
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-zinc-500 font-semibold uppercase flex items-center gap-2 mb-3">
                      <Cpu size={14} /> IoT &amp; Computer Vision
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Deteksi APD Otomatis (PPE Detection) menggunakan YOLO v11
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      Riset sistem keselamatan kerja (K3) pintar untuk mendeteksi penggunaan Alat Pelindung Diri (APD) pekerja secara real-time pada kamera CCTV.
                    </p>
                    
                    {/* Visual pipeline diagram inside card (Tailwind build) */}
                    <div className="flex items-center justify-between bg-black/30 border border-white/5 rounded-2xl p-4 mb-6">
                      <div className="flex flex-col items-center gap-1.5 text-center flex-1">
                        <Camera className="text-zinc-400" size={18} />
                        <span className="text-[10px] font-semibold text-zinc-400">CCTV IP Stream</span>
                      </div>
                      <div className="text-zinc-600 font-bold text-xs flow-arrow-animation">
                        ➔
                      </div>
                      <div className="flex flex-col items-center gap-1.5 text-center flex-1 text-[#a855f7]">
                        <Cpu size={18} />
                        <span className="text-[10px] font-semibold">Raspberry Pi 5<br /><small className="text-[8px] text-zinc-500">(YOLOv11 Edge)</small></span>
                      </div>
                      <div className="text-zinc-600 font-bold text-xs flow-arrow-animation">
                        ➔
                      </div>
                      <div className="flex flex-col items-center gap-1.5 text-center flex-1 text-[#d946ef]">
                        <AlertTriangle size={18} />
                        <span className="text-[10px] font-semibold">Notifikasi K3</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm bg-black/20 border border-white/3 rounded-xl p-4 mb-6 leading-relaxed">
                      <strong>Arsitektur Jaringan:</strong> CCTV mengirimkan stream video RSTP to Raspberry Pi 5 yang bertindak sebagai edge computing device. Model <strong>YOLO v11</strong> yang telah dilatih mengekstrak frame dan mengklasifikasikan penggunaan helm keselamatan, rompi, dan sepatu pelindung secara simultan dengan FPS yang optimal.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {["YOLOv11", "Raspberry Pi 5", "CCTV IP", "Edge AI", "Python"].map((tag) => (
                      <span key={tag} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slide 2: AI Auto Clipper Tool */}
              <div className="w-[33.33333%] px-2.5 box-border flex justify-center">
                <div className="w-full bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 relative flex flex-col justify-between hover:border-white/10">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-zinc-500 font-semibold uppercase flex items-center gap-2 mb-3">
                      <FileText size={14} /> Python Automation
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      Tools-Auto-Clipper-AI
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      Software automasi bertenaga AI untuk memotong video berdurasi panjang dari YouTube, Live Stream, atau Podcast menjadi klip vertikal pendek (rasio 9:16) secara otomatis.
                    </p>

                    {/* Clipper visual preview (Tailwind build) */}
                    <div className="bg-black/25 border border-white/5 rounded-2xl p-4 mb-6 flex flex-col items-center gap-3">
                      <div className="w-full flex items-center gap-2">
                        <span className="font-mono text-[9px] text-zinc-500">00:00</span>
                        <div className="flex-1 h-1.5 bg-white/10 rounded-full relative">
                          <div className="absolute top-0 left-[20%] w-[15%] h-full bg-[#00f2fe] rounded-full shadow-[0_0_8px_#00f2fe]" />
                          <div className="absolute top-0 left-[60%] w-[10%] h-full bg-[#00f2fe] rounded-full shadow-[0_0_8px_#00f2fe]" />
                        </div>
                        <span className="font-mono text-[9px] text-zinc-500">30:00</span>
                      </div>
                      <span className="font-mono text-[9px] text-zinc-500 flex items-center gap-1.5">
                        ↓ AI Crop &amp; Subtitle
                      </span>
                      <div className="w-[50px] h-[75px] border border-[#00f2fe] rounded-md flex flex-col items-center justify-center text-[#00f2fe] text-[8px] pulse-border-animation">
                        <Laptop size={14} className="mb-1" /> 9:16 Vertical
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 text-sm text-zinc-400">
                      <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                        Deteksi segmen video paling menarik secara otomatis menggunakan NLP/LLM.
                      </li>
                      <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                        Pemotongan rasio ke 9:16 secara cerdas agar wajah speaker tetap berada di tengah layar.
                      </li>
                      <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                        Integrasi transkripsi suara otomatis menggunakan Whisper AI untuk teks subtitle dinamis.
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "OpenCV", "Whisper AI", "FFmpeg", "Auto-Crop"].map((tag) => (
                        <span key={tag} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="file:///C:/Users/louis/Tools-Auto-Clipper-AI" 
                      className="self-start text-xs font-semibold text-[#00f2fe] border border-[#00f2fe]/20 rounded-lg px-4 py-2 bg-[#00f2fe]/2 transition-all hover:bg-[#00f2fe] hover:text-black hover:shadow-[0_0_10px_rgba(0,242,254,0.3)]"
                    >
                      Buka Repo Lokal
                    </a>
                  </div>
                </div>
              </div>

              {/* Slide 3: Web Profile & POS Desktop (Grid layout page) */}
              <div className="w-[33.33333%] px-2.5 box-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  
                  {/* Web App Card */}
                  <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/10">
                    <div>
                      <span className="font-mono text-xs text-zinc-500 font-semibold uppercase flex items-center gap-2 mb-3">
                        <Laptop size={14} /> Web Application
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                        Website Profil Perusahaan - Bakso Mas Nyok
                      </h3>
                      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                        Situs web profil perusahaan kuliner lokal yang modern, interaktif, dan SEO-friendly yang dikembangkan untuk mendukung pemasaran digital produk.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-zinc-400">
                        <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                          Arsitektur website menggunakan framework <strong>Laravel</strong> yang aman dan cepat.
                        </li>
                        <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                          Halaman administrasi khusus (CMS) untuk memperbarui menu dan promo secara dinamis.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Laravel", "PHP", "MySQL", "TailwindCSS"].map((tag) => (
                        <span key={tag} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desktop App Card */}
                  <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/10">
                    <div>
                      <span className="font-mono text-xs text-zinc-500 font-semibold uppercase flex items-center gap-2 mb-3">
                        <Server size={14} /> Desktop Software
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                        Aplikasi Kasir Bengkel &amp; Toko
                      </h3>
                      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                        Aplikasi point of sale (POS) desktop untuk manajemen transaksi, inventaris barang, serta pencetakan struk pembayaran yang digunakan oleh usaha bengkel lokal.
                      </p>
                      <ul className="space-y-2 mb-6 text-xs text-zinc-400">
                        <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                          Menggunakan antarmuka desktop yang ringan dan responsif.
                        </li>
                        <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#00f2fe]">
                          Manajemen basis data stok barang otomatis dengan peringatan stok.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Java Swing", "C#", "POS System", "Local SQL"].map((tag) => (
                        <span key={tag} className="bg-white/3 border border-white/5 rounded-md px-3 py-1 text-[10px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Skills Section (Interactive bars filling up) */}
      <section className="max-w-[1100px] mx-auto px-6 py-28 relative z-5" id="skills" ref={skillsRef}>
        <div className="text-center mb-16">
          <span className="font-mono text-[#00f2fe] text-xs font-semibold tracking-[3px] uppercase block mb-3">
            Kapasitas Teknis
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Keahlian &amp; Teknologi</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Skill group 1 */}
          <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Laptop className="text-[#00f2fe]" size={20} />
              <h3 className="text-base font-bold text-white">Web Development</h3>
            </div>
            <div className="space-y-6">
              {[
                { name: "PHP (Native & Laravel)", percent: "90%", color: "from-[#00f2fe] to-[#4facfe]" },
                { name: "MySQL & Database Design", percent: "85%", color: "from-[#00f2fe] to-[#4facfe]" },
                { name: "QA Testing & SDLC Planning", percent: "80%", color: "from-[#00f2fe] to-[#4facfe]" },
                { name: "JavaScript (ES6+)", percent: "78%", color: "from-[#00f2fe] to-[#4facfe]" }
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold text-zinc-400">
                    <span>{skill.name}</span>
                    <span>{skill.percent}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-[1.8s] ease-[cubic-bezier(0.1,0.8,0.2,1)]`}
                      style={{ width: skillsAnimated ? skill.percent : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill group 2 */}
          <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Server className="text-[#a855f7]" size={20} />
              <h3 className="text-base font-bold text-white">IT &amp; Infrastructure</h3>
            </div>
            <div className="space-y-6">
              {[
                { name: "Network Routing & Mikrotik Boards", percent: "88%", color: "from-[#a855f7] to-[#d946ef]" },
                { name: "Cybersecurity & Network Auditing", percent: "80%", color: "from-[#a855f7] to-[#d946ef]" },
                { name: "CCTV IP & Monitoring Systems", percent: "85%", color: "from-[#a855f7] to-[#d946ef]" },
                { name: "IT Support L2/L3 & Maintenance", percent: "82%", color: "from-[#a855f7] to-[#d946ef]" }
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold text-zinc-400">
                    <span>{skill.name}</span>
                    <span>{skill.percent}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-[1.8s] ease-[cubic-bezier(0.1,0.8,0.2,1)]`}
                      style={{ width: skillsAnimated ? skill.percent : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill group 3 */}
          <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-8 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-[#d946ef]" size={20} />
              <h3 className="text-base font-bold text-white">AI &amp; IoT Research</h3>
            </div>
            <div className="space-y-6">
              {[
                { name: "Computer Vision (YOLO v11, OpenCV)", percent: "85%", color: "from-[#d946ef] to-[#ec4899]" },
                { name: "Python Programming", percent: "82%", color: "from-[#d946ef] to-[#ec4899]" },
                { name: "Raspberry Pi & Hardware", percent: "78%", color: "from-[#d946ef] to-[#ec4899]" },
                { name: "AI Automate Workflows", percent: "80%", color: "from-[#d946ef] to-[#ec4899]" }
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold text-zinc-400">
                    <span>{skill.name}</span>
                    <span>{skill.percent}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-[1.8s] ease-[cubic-bezier(0.1,0.8,0.2,1)]`}
                      style={{ width: skillsAnimated ? skill.percent : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. About Me Section */}
      <section className="bg-[#050608] py-28 relative z-5" id="about">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-[#00f2fe] text-xs font-semibold tracking-[3px] uppercase block mb-3">
              Kenali Lebih Dekat
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Tentang Saya</h2>
            <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
            
            <div className="space-y-6 text-zinc-400 text-base md:text-[15.5px] leading-relaxed">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Halo, Saya <span className="text-[#00f2fe] drop-shadow-[0_0_10px_rgba(0,242,254,0.15)]">Louis Maximillian</span>
              </h3>
              <p>
                Saya adalah seorang profesional IT yang berbasis di Surabaya, Indonesia. Berlatar belakang pendidikan <strong>Informatika dari Universitas Katolik Darma Cendika (UKDC)</strong>, saya menggabungkan disiplin ilmu rekayasa perangkat lunak tradisional dengan teknologi mutakhir untuk memecahkan masalah industri.
              </p>
              <p>
                Pendekatan profesional saya berpusat pada fleksibilitas teknologi: <em>&ldquo;Teknologi yang saya gunakan tergantung pada kebutuhan dan permintaan bisnis.&rdquo;</em> Baik itu memelihara sistem warisan (legacy) dengan <strong>PHP 5 Native</strong> di lingkungan pelayanan kesehatan, merancang arsitektur jaringan pabrik yang andal, atau memprogram kecerdasan buatan edge-computing dengan <strong>YOLO v11</strong>, saya selalu berkomitmen penuh pada kualitas sesuai metodologi <strong>SDLC</strong>.
              </p>
              <p>
                Saat ini, selain bekerja sebagai pengembang web tetap di <strong>RS RKZ St. Vincentius a Paulo Surabaya</strong>, saya juga aktif mengambil proyek lepas secara global sebagai <strong>Freelance Full-Stack Developer</strong> di platform Upwork dan Cake.
              </p>
              
              <div className="border-t border-white/5 pt-6 mt-8 space-y-4">
                {[
                  { label: "Lokasi:", value: "Surabaya, Jawa Timur, Indonesia" },
                  { label: "Pendidikan:", value: "S1 Informatika, UKDC Surabaya" },
                  { label: "Fokus Utama:", value: "Full Stack Development, IT Infra, AI Research" },
                  { label: "Status Freelance:", value: "Tersedia untuk Proyek", customVal: true }
                ].map((row) => (
                  <div key={row.label} className="flex border-b border-white/2 pb-3.5 text-sm">
                    <span className="w-[140px] font-bold text-zinc-500 flex-shrink-0">{row.label}</span>
                    {row.customVal ? (
                      <span className="text-[#10b981] font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={15} /> {row.value}
                      </span>
                    ) : (
                      <span className="text-zinc-200">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-[#a855f7]/5 to-[#00f2fe]/5 border border-white/5 rounded-3xl p-8 backdrop-blur-md max-w-[340px] shadow-2xl">
                <span className="font-mono text-xs text-[#a855f7] uppercase font-semibold tracking-wider block mb-4">
                  “ Filosofi Kerja
                </span>
                <p className="italic text-zinc-300 text-[14.5px] leading-relaxed mb-6">
                  &ldquo;Teknologi hanyalah sebuah alat untuk memecahkan masalah. Kunci dari solusi terbaik adalah pemahaman menyeluruh terhadap kebutuhan sistem dan eksekusi yang disiplin sesuai siklus SDLC.&rdquo;
                </p>
                <div className="text-right text-xs font-semibold text-zinc-500">— Louis Maximillian</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-28 relative z-5" id="contact">
        <div className="text-center mb-16">
          <span className="font-mono text-[#00f2fe] text-xs font-semibold tracking-[3px] uppercase block mb-3">
            Mari Berkolaborasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Hubungi Saya</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12">
          
          {/* Contact Details box */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-3">Ada Proyek atau Peluang Riset?</h3>
            <p className="text-zinc-400 text-sm mb-10 leading-relaxed max-w-[420px]">
              Saya selalu terbuka untuk diskusi mengenai pengembangan website full stack, kebutuhan infrastruktur jaringan IT, riset sistem cerdas berbasis AI/IoT, atau kolaborasi freelance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email link */}
              <a href="mailto:lsmaximillian@gmail.com" className="block group">
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-[#00f2fe] flex items-center justify-center text-[#0a0b0e] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">EMAIL</span>
                    <strong className="text-xs text-white block truncate">lsmaximillian@gmail.com</strong>
                  </div>
                </div>
              </a>

              {/* LinkedIn link */}
              <a 
                href="https://www.linkedin.com/in/louis-maximillian-8889332ab" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-[#0077b5] flex items-center justify-center text-white flex-shrink-0">
                    <LinkedinIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">LINKEDIN</span>
                    <strong className="text-xs text-white block truncate">Louis Maximillian</strong>
                  </div>
                </div>
              </a>

              {/* GitHub link */}
              <a 
                href="https://github.com/louismax12" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-[#a855f7] flex items-center justify-center text-white flex-shrink-0">
                    <GithubIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">GITHUB</span>
                    <strong className="text-xs text-white block truncate">louismax12</strong>
                  </div>
                </div>
              </a>

              {/* Instagram link */}
              <a 
                href="https://instagram.com/maximillianlouiss" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white flex-shrink-0">
                    <InstagramIcon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">INSTAGRAM</span>
                    <strong className="text-xs text-white block truncate">@maximillianlouiss</strong>
                  </div>
                </div>
              </a>

              {/* WhatsApp Utama */}
              <a 
                href="https://wa.me/62895802120081" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">WHATSAPP (UTAMA)</span>
                    <strong className="text-xs text-white block truncate">+62 895-8021-20081</strong>
                  </div>
                </div>
              </a>

              {/* WhatsApp Alt */}
              <a 
                href="https://wa.me/6287747620245" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block group"
              >
                <div className="flex items-center gap-4 bg-[#12141b]/65 border border-white/5 rounded-2xl p-4 backdrop-blur-md transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-white/10 group-hover:shadow-2xl">
                  <div className="w-11 h-11 rounded-xl bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase block">WHATSAPP (ALT)</span>
                    <strong className="text-xs text-white block truncate">+62 877-4762-0245</strong>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Form wrapper */}
          <div className="bg-[#12141b]/65 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider" htmlFor="form-name">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  id="form-name" 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Masukkan nama Anda" 
                  className="bg-black/30 border border-white/5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 focus:border-[#00f2fe] focus:bg-black/40"
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider" htmlFor="form-email">
                  Alamat Email
                </label>
                <input 
                  type="email" 
                  id="form-email" 
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Masukkan email Anda" 
                  className="bg-black/30 border border-white/5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 focus:border-[#00f2fe] focus:bg-black/40"
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider" htmlFor="form-subject">
                  Subjek Pesan
                </label>
                <input 
                  type="text" 
                  id="form-subject" 
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Masukkan tujuan pesan" 
                  className="bg-black/30 border border-white/5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 focus:border-[#00f2fe] focus:bg-black/40"
                  required 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider" htmlFor="form-message">
                  Pesan Anda
                </label>
                <textarea 
                  id="form-message" 
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tuliskan pesan Anda di sini..." 
                  className="bg-black/30 border border-white/5 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 focus:border-[#00f2fe] focus:bg-black/40 resize-none"
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={formStatus === "sending"}
                className="self-start px-7 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0b0e] font-bold text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(0,242,254,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_6px_20px_rgba(0,242,254,0.5)] disabled:opacity-50 disabled:pointer-events-none"
              >
                {formStatus === "sending" ? (
                  <>
                    <span>Mengirim...</span>
                    <div className="w-4 h-4 border-2 border-[#0a0b0e] border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl p-4 text-[#10b981] text-xs font-semibold text-center mt-2 flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} /> Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 bg-[#050608] text-center text-xs text-zinc-500 relative z-5">
        <div className="max-w-[1200px] mx-auto px-6 space-y-2">
          <p>&copy; 2026 Louis Maximillian. Hak Cipta Dilindungi.</p>
          <p className="font-mono text-[10px] text-zinc-600">Dirancang dengan presisi &amp; estetika Next.js + Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  );
}
